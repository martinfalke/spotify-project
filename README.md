# Project structure
Based on ["The View-State Split"](https://www.pluralsight.com/guides/how-to-organize-your-react-+-redux-codebase#module-theviewstatesplit).
*TODO*

## Redux explanation and suggested conventions
https://betterprogramming.pub/my-awesome-react-redux-structure-6044e5007e22


# Design

## Colors
Primary, bright orange: #F0D5C9
Dark green: #79A385
Bright green: #D5F0DD
Dark blue: #7992A3
Bright blue: #BDDCF0

# Development

### [fuzzy-search](https://www.npmjs.com/package/fuzzy-search)
Package to handle quickly searching through a lot of data in objects, could be useful for filtering playlists and tracks inside playlists.

# Getting Started with Create React App (Auto-generated by create-react-app)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# Summary
The idea now is to have three major "components" on the website, each of view take up a portion of the horizontal space in the view. 

First (1), a permanent sidebar on the left that shows all of the user's playlists. The sidebar can be collapsed (to the left) to give more space for the rest of the view. It also allows filtering/searching for a specific playlist name.

Second (2), a content view in the middle that shows one of two things (A, B). A: the content of a playlist that the user has clicked in the sidebar. B: a search view that allows the user to search the Spotify catalogue. In both cases, tracks should be listed (either existing tracks in the playlists for A, or the track results of the search for B) with the functionality to add the track to your "Track Stash" (3Z) as well as to mark the track as "selected" or "focused" (3X). For A (playlist), it should also be possible to re-order the tracks with an up arrow and a down arrow as well as an X for deleting the track from the playlist. For B (search), there is currently no extra functionality planned.

Third (3), a managing view where there are three sub-components (X, Y, Z). X: the currently "selected" or "focused" track. This contains a play/stop button that allows playing a preview clip of the track next to info about the track like title, artist, album, track length, etc. Y: Directly connected to X, should maybe even be described as part of it. The content shown is two lists. One that shows the user's playlists that currently contain the track and one list that shows the user's playlists that currently *do not* contain the track. For the former, there should be an X that allows removing the "selected" track from that playlist as well as a button that when pressed opens the playlist in the content view to the left (2). For the latter, there should ba a + that allows adding the "selected" track to that playlist as well as the same button as before, that when pressed opens the playlist in the content view. Z: The "Track Stash" that allows the user to quickly and temporarily save tracks in a list. From here, the user can "select"/"focus" individual tracks in the "Track Stash" for an overview of the track, what playlists it exists in and does not exist in, as well as the option to create a playlist containing the tracks in the "Track Stash". The stash can also be cleared or have the entire list of tracks be added to an existing playlist (ignoring duplicates).

This page is considered to be the primary view of the website. For the extra piece of functionality, we had the idea of having an additional "gallery" page that gives an overview of your playlists. On this page, you can choose to sort your playlists (shown as their cover images with brief details underneath) based on the audio features (https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-several-audio-features) like how danceable, happy, slow/fast the tracks in the playlist are. In other words, the playlists get an average score in each category based on the values for the tracks that are in them. The average score is shown as a percentage value (or BPM for tempo) for easy comparison.