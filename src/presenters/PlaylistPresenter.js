// src/presenters/PlaylistPresenter.js
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PlaylistView from '../views/PlaylistView';
import { getPlaylists} from "../api/spotifyPlaylist"

function PlaylistPresenter(props){
    const { token } = props;
    const [Playlist, setPlaylist] = useState({})
    const [SelectedPlaylist, setSelectedPlaylist] = useState({});

    useEffect( () => {
        setPlaylist (getPlaylists(token))
    }, [Playlist])

    useEffect(() =>{
        setSelectedPlaylist(playlist.map( playlistId => ))
    }, [SelectedPlaylist])



    return <PlaylistView playlist={SelectedPlaylist}/> 
}

const mapStateToProps = (state) => ({
    token: state.auth.spotify.token
})
  
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPresenter);