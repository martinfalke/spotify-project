import React, { useRef } from "react";
import {useState, useEffect} from "react";
import { connect } from 'react-redux';
import searchActions from '../state/search/searchActions';
import SearchView from '../views/SearchView';
import SearchResultView from '../views/SearchResultView';
import tracksActions from '../state/tracks/tracksActions';
import playlistActions from '../state/playlist/playlistActions';


function setNextPage(currentPage, numPages, setPage){
    if(currentPage === numPages) return;
    setPage(currentPage+1);
}
function setPrevPage(currentPage, setPage){
    if(currentPage === 0) return;
    setPage(currentPage-1);
}

function SearchPresenter(props) {
    const [search, setSearch] = useState("");
    const { token, isTabVisible } = props;
    const searchBarRef = useRef(null);

    useEffect(() =>{
        if (!search) return;
        props.getSearchResults(token, search);
    }, [search])

    // focus search bar when the search (result) view is visible
    useEffect(()=>{
        if(isTabVisible){
            if(searchBarRef && searchBarRef.current)
                searchBarRef.current.focus();
        }
    }, [isTabVisible, searchBarRef]);

    const [page, setPage] = useState(1);
    const numPages = Math.ceil(props.totalResults/20);
    const addToTracks = (CI) => props.addToTracks(props.results[CI].id, props.rawItems[CI]);
    const deleteFromTracks = (CI) => props.deleteFromTracks(CI, props.results[CI].id);

    return (search) ?
        <SearchResultView   onSearch={(term)=>setSearch(term)} search={search}
                            results={props.results} currentPage={page}
                            numPages={numPages}
                            onNextPage={() => {
                                setNextPage(page, numPages, setPage);
                                props.getNextPage(token);
                            }}
                            onPrevPage={() => {
                                setPrevPage(page, setPage);
                                props.getPreviousPage(token);
                            }}
                            tabVisible={isTabVisible}
                            getSearchBarRef={() => searchBarRef}
                            onAddToTracks={addToTracks}
                            onDeleteFromTracks={deleteFromTracks}
        /> : 
        <SearchView onSearch={(term)=>setSearch(term)} tabVisible={isTabVisible} getSearchBarRef={() => searchBarRef} />
       

}

const mapStateToProps = (state) => { 
    let totalResults = (state.search.activePage && state.search.activePage.total) || 0; 
    let itemsArray = [];
    if(state.search.activePage){
        itemsArray = state.search.activePage.items.map( (item) => {
            let artistString = item.artists.reduce((tot,artist,i,arr) => {
                if (arr.length-1!==i){
                    return (tot + artist.name + ', ');
                }else return (tot + artist.name);
            }, "");
            let smallestAlbumImage = item.album.images.reduce(
                (smallest, image) => {
                    if (image.height < smallest.height) return image
                    return smallest
                }, 
                item.album.images[0]
            );
            let trackMinutes = Math.floor((item.duration_ms/1000)/60);
            let trackSeconds = Math.round((item.duration_ms - trackMinutes * 1000 * 60)/1000);
            let isInStash = state.tracks.stash.includes(item.id);
            return {
                artist: artistString,
                album: item.album.name,
                track: item.name,
                spotifyUrl: item.external_urls.spotify,
                image: smallestAlbumImage.url,
                duration: trackMinutes + ":" + trackSeconds,
                previewSong: item.preview_url,
                id: item.id,
                isInStash: isInStash,
            }
        })
    }
    return {
        totalResults: totalResults,
        results: itemsArray,
        token: state.auth.spotify.token,
        rawItems: (state.search.activePage && state.search.activePage.items) || null,
        isTabVisible: state.search.isTabVisible,
    };
}
  
const mapDispatchToProps = {
    getSearchResults: searchActions.getSearchResults,
    getNextPage: searchActions.getNextPage,
    getPreviousPage: searchActions.getPreviousPage,
    addToTracks: tracksActions.addToTracks,
    deleteFromTracks: tracksActions.deleteFromTracks,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPresenter);
