// src/presenters/StartPresenter.js
import { useEffect, useState } from 'react';
import spotifyAuthUrl, { generateSpotifyString } from '../api/spotifyAuth';
import StartView from '../views/StartView';

import { connect } from 'react-redux';
import authActions from '../state/auth/authActions';

import firebase from 'firebase';

function StartPresenter(props){
    const [spotifyString, setSpotifyString] = useState(generateSpotifyString());

    useEffect(function(){
        props.setSpotifyState(spotifyString);
    }, []);

    return <StartView loginUrl={`${spotifyAuthUrl}&state=${spotifyString}`} firebaseOptions={JSON.stringify(firebase.apps[0].options, null, 2)}/>;
}

const mapDispatchToProps = {
    setSpotifyState: authActions.setSpotifyState,
}
export default connect(null, mapDispatchToProps)(StartPresenter);