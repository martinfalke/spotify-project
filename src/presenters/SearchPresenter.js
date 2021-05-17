import React from "react"
import { Container, Form } from "react-bootstrap"
import {useState, useEffect} from "react"
import { getSearchResults } from "../api/spotifySearch"
import { connect } from 'react-redux';
import searchActions from '../state/search/searchActions';
import SearchView from '../views/SearchView';
import SearchResultView from '../views/SearchResultView';

function setNextPage(currentPage, numPages, setPage){
    if(currentPage === numPages) return;
    setPage(currentPage+1);
}
function setPrevPage(currentPage, setPage){
    if(currentPage === 0) return;
    setPage(currentPage-1);
}

function SearchPresenter(props) {
    //console.log(props);
    //search == search
    const [search, setSearch] = useState("");
    const { token } = props;

    useEffect(() =>{
        if (!search) return;
        props.getSearchResults(token, search);
    }, [search])

    const [isTabVisible, setIsTabVisible] = useState(false);
    useEffect(()=>{
        const observer = new MutationObserver(() =>{
            let searchTab = document.querySelector('#home-page-tabs-tabpane-search');
            setIsTabVisible( (searchTab && searchTab.classList.contains("active")) );
        })
        let searchTab = document.querySelector('#home-page-tabs-tabpane-search');
        observer.observe(searchTab, {
            attributes: true
        });

        return () => observer.disconnect(searchTab);
    }, []);

    useEffect(()=>{
        if(isTabVisible){
            const searchBar = document.getElementById("formSearchInput");
            searchBar.focus();
        }
    }, [isTabVisible]);

    const [page, setPage] = useState(1);
    const numPages = Math.ceil(props.totalResults/20);
   
    
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
        /> : 
        <SearchView onSearch={(term)=>setSearch(term)} tabVisible={isTabVisible} />

}

const mapStateToProps = (state) => { 
    let totalResults = (state.search.activePage && state.search.activePage.total) || 0; 
    let itemsArray = [];
    if(state.search.activePage){
        itemsArray = state.search.activePage.items.map( (item) => {
            let artistString = item.artists.reduce((tot,artist,i,arr) => {
                if (arr.length-1!=i){
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
            return {
                artist: artistString,
                album: item.album.name,
                track: item.name,
                spotifyUrl: item.external_urls.spotify,
                image: smallestAlbumImage.url,
                duration: trackMinutes + ":" + trackSeconds,
                previewSong: item.preview_url
            }
        })
    }
    return {
        totalResults: totalResults,
        results: itemsArray,
        token: state.auth.spotify.token
    };
}
  
const mapDispatchToProps = {
    getSearchResults: searchActions.getSearchResults,
    getNextPage: searchActions.getNextPage,
    getPreviousPage: searchActions.getPreviousPage
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPresenter);
