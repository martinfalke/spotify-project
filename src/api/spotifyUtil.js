// src/api/spotifyUtil.js

const baseUrl = "https://api.spotify.com/v1";

const requestTypes = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
}

function handleHttpResponse(response){
    return response.json().then(
        (json) => {
            if(!response.ok) {
                const error = Object.assign({}, json, {
                    status: response.status,
                    statusText: response.statusText
                });

                return Promise.reject(error);
            }
            return json;
        });
}

const spotifyApiCall = (token, endpoint, method="GET", bodyObj={}, content_type="application/json") => {
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
        parameters["body"] = JSON.stringify(bodyObj);
        headers["Content-Type"] = content_type;
    }
    
    return fetch(baseUrl+finalEndpoint, parameters).then(handleHttpResponse).then(response => ({response}) ).catch(error => ({error}) );
}

export { baseUrl, requestTypes, spotifyApiCall };