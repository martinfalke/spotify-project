// src/presenters/PlaylistPresenter.js
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PlaylistView from '../views/PlaylistView';
import LoadingView from '../views/LoadingView';
import playlistActions from '../state/playlist/playlistActions';
import tracksActions from '../state/tracks/tracksActions';
import FuzzySearch from 'fuzzy-search';

function PlaylistPresenter(props){
    const { token, playlists, playlistsFetched, tracksFetched, playlist, playlistTracks, allPlaylists, selectedPlaylist  } = props;

    useEffect(()=>{
        props.fetchPlaylists(token);
    },[])

    useEffect(()=>{
        if(playlistsFetched && Object.keys(playlists).length !== 0 && !tracksFetched){
            Object.values(playlists).forEach(list => {
                if(!list.tracks){
                    props.fetchTracks(token, list.id);
                }
            });
        }
    },[playlistsFetched])
    
    const updateSelectedPlaylist = (playlistId) => props.selectPlaylist(playlistId);
    const moveUpSong = (CI) => props.moveUpSong(token, playlist.id, CI, playlist.snapshot_id);
    const moveDownSong = (CI) => props.moveDownSong(token, playlist.id, CI, playlist.snapshot_id);
    const deleteFromList = (CI) => props.deleteFromList(token, playlist.id, playlistTracks[CI].uri, playlist.snapshot_id, CI, playlist.tracks[CI]); 
    const addToTracks = (CI) => props.addToTracks(playlist.tracks[CI]);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(playlistTracks);

    useEffect(()=>{
        if(searchTerm){
            const searcher = new FuzzySearch(playlistTracks, ['name','artist','album_name'], {
                caseSensitive: false,
            })
            setSearchResults(searcher.search(searchTerm));
            console.log(searchResults);
        }else if(playlistTracks){
            setSearchResults(playlistTracks);
        }

    },[searchTerm, playlistTracks])



    return (playlist && playlists && searchResults && allPlaylists && playlistTracks && tracksFetched) ? 
            <PlaylistView   onSelectPlaylist = {updateSelectedPlaylist} 
                            onMoveUpSong = {moveUpSong}
                            onMoveDownSong = {moveDownSong}
                            onDeleteSong = {deleteFromList}
                            tracks = {searchResults}
                            allPlaylists = {allPlaylists}
                            playlist = {playlist}
                            selectedPlaylist={selectedPlaylist}
                            onAddToTracks={addToTracks}
                            onSearchTerm={(term)=>setSearchTerm(term)}
                            searchTerm={searchTerm}
                            actionsDisabled={(searchTerm == false)}
    /> : <LoadingView percentage={props.fetchProgress}/>
}

const mapStateToProps = (state) => {
    let selectedPlaylistData = null;
    let allPlaylists = null;
    let playlistTracks = null;
    if(state.lists.playlistsFetched){
        // retrieve the focused playlist
        if(state.lists.selectedList){
            selectedPlaylistData = state.lists.playlists[state.lists.selectedList];
        }
        else{
            selectedPlaylistData = Object.values(state.lists.playlists)[0];
        }

        // retrieve the tracks of the focused playlist
        if(selectedPlaylistData.tracks){
            playlistTracks = selectedPlaylistData.tracks.map(trackId => {
                let trackObj = state.lists.trackIndex[trackId];
                let artistString = trackObj.artists.reduce((tot,artist,i,arr) => {
                    if (arr.length-1!==i){
                        return (tot + artist + ', ');
                    }else return (tot + artist);
                }, "");

                let trackMinutes = Math.floor((trackObj.duration/1000)/60);
                let trackSeconds = Math.round((trackObj.duration - trackMinutes * 1000 * 60)/1000);

                return {
                    name: trackObj.name,
                    album_name: trackObj.album_name,
                    artist: artistString,
                    spotifyUrl: trackObj.external_urls.spotify,
                    duration: trackMinutes + ":" + trackSeconds,
                    previewSong: trackObj.preview_url,
                    image: trackObj.album_image,
                    uri: trackObj.uri
                }
            })
        }

        // create array containing relevant info about all playlists
        //console.log(state.lists.playlists);
        allPlaylists = Object.values(state.lists.playlists).map((playlist) => ({
            name: playlist.name,
            image: playlist.image,
            id: playlist.id,
        }))

    }
    return ({
        token: state.auth.spotify.token,
        selectedPlaylist: state.lists.selectedList,
        playlists: state.lists.playlists,
        playlist: selectedPlaylistData,
        playlistsFetched: state.lists.playlistsFetched,
        tracksFetched: state.lists.tracksFetched,
        playlistTracks: playlistTracks,
        allPlaylists: allPlaylists,
        fetchProgress: state.lists.fetchProgress,
    });
}
  
const mapDispatchToProps = {
    fetchPlaylists: playlistActions.fetchPlaylists,
    fetchTracks: playlistActions.fetchTrack,
    selectPlaylist: playlistActions.selectPlaylist,
    moveUpSong: playlistActions.moveUpSong,
    moveDownSong: playlistActions.moveDownSong,
    deleteFromList: playlistActions.deleteFromList,

    addToTracks: tracksActions.addToTracks,

}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPresenter);