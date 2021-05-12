// src/api/spotifyPlaylist.js
import { spotifyApiCall, requestTypes } from './spotifyUtil';


const moveTrack = (token, playlistId, snapshotId, range_start, insert_before) => {
    return spotifyApiCall(token, '/playlists/' + playlistId + 'tracks', bodyObj = {range_start,insert_before});
}

const deleteFromPlaylist = (token, playlistId, ) => {
    return spotifyApiCall(token, '/playlists/' + playlistId + 'tracks', method = requestTypes.DELETE, bodyObj = {})
}

export { moveTrack, deleteFromPlaylist };