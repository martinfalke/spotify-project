import React from "react"
import { Container, Form } from "react-bootstrap"
import {useState, useEffect} from "react"
import { getSearchResults } from "../api/spotifySearch"
import { connect } from 'react-redux';


function SearchPresenter(props) {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([])
    const { token } = props;
    console.log(searchResults)

    useEffect(() =>{
        if (!search) return setSearchResults([])

        getSearchResults(token, search, ["track", "artist"]).then(r=>r.json()).then(res =>{
            console.log(res)
            setSearchResults(res.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce(
                    (smallest, image) => {
                        if (image.height < smallest.height) return image
                        return smallest
                    }, 
                    track.album.images[0]
                )

                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url

                }
            }))
        })
    }, [search])

    return ( 
    <Container>
        <Form.Control 
            type="search"
            placeholder="Search Songs/Artists" 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
        />
        <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
            Songs
        </div>
        <div>Bottom</div>
    </Container>);
}

const mapStateToProps = (state) => ({
    token: state.auth.spotify.token
})
  
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPresenter);