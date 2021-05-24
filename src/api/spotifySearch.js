import { spotifyApiCall, requestTypes } from './spotifyUtil';


const getSearchResults = (token, searchQuery, searchTypes, pageInfo="&offset=0&limit=20") => {
    const baseEndpoint = '/search';
    const typesListString = searchTypes.reduce((tot,type,i,arr) => {
        if (arr.length-1!==i){
            return (tot + type + ',');
        }else return (tot + type);
    });
    const queryEndpoint = '?q=' + encodeURIComponent(searchQuery) + '&type=' + encodeURIComponent(typesListString) + "&market=from_token";
    
    return spotifyApiCall(token, baseEndpoint + queryEndpoint + pageInfo);
}

const addToPlaylist = (token, playlist_id, uris) => {
    return spotifyApiCall(token, '/playlists/' + playlist_id + '/tracks', requestTypes.POST, {uris});
}


export { getSearchResults, addToPlaylist };