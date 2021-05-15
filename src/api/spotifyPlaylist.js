// src/api/spotifyPlaylist.js
import { spotifyApiCall, requestTypes } from './spotifyUtil';

const fetchPlaylist = (token) => {
    console.log('fetch playlist');
    return spotifyApiCall(token, '/me/playlists');
}

const fetchTrack = (token, playlist_id, market) => {
    return spotifyApiCall(token, '/playlists/' + playlist_id + '/tracks?market=' + market);
}

const moveTrack = (token, playlist_id, range_start, insert_before, snapshot_id) => {
    return spotifyApiCall(token, '/playlists/' + playlist_id + '/tracks',{range_start,insert_before,snapshot_id});
}

const deleteFromPlaylist = (token, playlist_id, tracks, snapshot_id) => {
    return spotifyApiCall(token, '/playlists/' + playlist_id + '/tracks', requestTypes.DELETE, {tracks, snapshot_id})
}

export { moveTrack, deleteFromPlaylist, fetchPlaylist, fetchTrack };