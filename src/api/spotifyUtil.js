// src/api/spotifyUtil.js

const baseUrl = "https://api.spotify.com/v1";

const requestTypes = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
}

const spotifyApiCall = (token, endpoint, method="GET", content_type="application/json", bodyObj={}) => {
    // add slash if missing
    const finalEndpoint = (endpoint.startsWith("/")) ? endpoint : "/" + endpoint;
    // embed token
    const headers = {
        'Authorization': ('Bearer ' + token),
    }
    const parameters = {
        method: method,
        headers: headers
    }
    // add the body object to the parameters if it isn't empty
    if(Object.keys(bodyObj).length !== 0){
        parameters["body"] = JSON.Stringify(bodyObj);
        headers["Content-Type"] = content_type;
    }
    
    return fetch(baseUrl+finalEndpoint, parameters);
}

export { requestTypes, spotifyApiCall };