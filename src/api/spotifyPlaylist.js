// src/api/spotifyPlaylist.js
import { spotifyApiCall, requestTypes } from './spotifyUtil';

const fetchPlaylist = (token, offset) => {
    return spotifyApiCall(token, '/me/playlists?offset='+offset+"&limit=20");
}

const fetchTrack = (token, playlist_id, offset) => {
    return spotifyApiCall(token, '/playlists/' + playlist_id + '/tracks?market=from_token&offset='+offset+'&limit=100');
}

const moveTrack = (token, playlist_id, range_start, insert_before, snapshot_id) => {
    return spotifyApiCall(token, '/playlists/' + playlist_id + '/tracks', requestTypes.GET, {range_start,insert_before,snapshot_id});
}

const deleteFromPlaylist = (token, playlist_id, tracks, snapshot_id) => {
    return spotifyApiCall(token, '/playlists/' + playlist_id + '/tracks', requestTypes.DELETE, {tracks, snapshot_id})
}

export { moveTrack, deleteFromPlaylist, fetchPlaylist, fetchTrack };