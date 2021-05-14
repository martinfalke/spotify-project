import React from "react"
import { Container, Form } from "react-bootstrap"
import {useState, useEffect} from "react"
import { getSearchResults } from "../api/spotifySearch"
import { connect } from 'react-redux';
import searchActions from '../state/search/searchActions';


function SearchPresenter(props) {
    console.log(props);
    const [search, setSearch] = useState("");
    const { token } = props;

    useEffect(() =>{
        if (!search) return;
        props.getSearchResults(token, search);
    }, [search])

    function setNextPage(currentPage, numPages, setPage){
        if(currentPage === numPages) return;
        setPage(currentPage+1);
    }
    function setPrevPage(currentPage, setPage){
        if(currentPage === 0) return;
        setPage(currentPage-1);
    }

    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);

    const numPages = Math.ceil(searchResults.length/20);
    const pageResults = searchResults.slice((page-1)*20, (page*20));
    
    return ( 
    <Container>
        <Form.Control 
            type="search"
            placeholder="Search Songs/Artists" 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
        />
        <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
           songs
        </div>
    </Container>);
}

const mapStateToProps = (state) => { 
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
        results: itemsArray,
        token: state.auth.spotify.token
    };
}
  
const mapDispatchToProps = {
    getSearchResults: searchActions.getSearchResults
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPresenter);
