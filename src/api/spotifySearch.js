import { spotifyApiCall } from './spotifyUtil';


const getSearchResults = (token, searchQuery, searchTypes, pageInfo="&offset=0&limit=20") => {
    const baseEndpoint = '/search';
    const typesListString = searchTypes.reduce((tot,type,i,arr) => {
        if (arr.length-1!=i){
            return (tot + type + ',');
        }else return (tot + type);
    });
    const queryEndpoint = '?q=' + encodeURIComponent(searchQuery) + '&type=' + encodeURIComponent(searchTypes) + "&market=from_token";
    
    return spotifyApiCall(token, baseEndpoint + queryEndpoint + pageInfo);
}


export { getSearchResults };