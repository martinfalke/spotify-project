// src/api/spotifyAuth.js

// generates a random String used to validate that the request is actually from the user's browser
function generateURIstate(len){
    var arr = new Uint8Array((len || 10) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, (dec)=>dec.toString(16).padStart(2, "0")).join('');
}

// Spotify's "Implicit Grant Flow", general info at:
// https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow
const clientId = "c0e19491232e4cadbff0efd339179f6d";
const redirectUri = (process.env.NODE_ENV !== 'production') ? "http://localhost:3000/login" : "https://listify-app.github.io/login";

// https://developer.spotify.com/documentation/general/guides/scopes/#overview
// encode spaces as %20 after reducing from array (done to easily add/remove scopes)
const scope = encodeURIComponent([
    "ugc-image-upload",             // Upload cover image for playlists
    "playlist-modify-public",       // Modify public playlists
    "playlist-modify-private",      // Modify private playlists
        //"user-library-read",            // View saved tracks, albums etc.
        //"user-library-modify",          // Save/unsave tracks, albums etc.
    "playlist-read-private",        // Get list of user's playlists
    "playlist-read-collaborative",  // Include collaborative lists when getting user's playlists
    "user-read-private",            // To only show search results available to the user's market
].reduce( (total, d, i) => {
    return (i !== 0) ? total + " " + d : d;
}));

// TODO: add "show_dialog" forced in development mode, to always prompt the developer for authorizing our app through Spotify

const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&response_type=token`;

export { redirectUri, generateURIstate };
export default authUrl;