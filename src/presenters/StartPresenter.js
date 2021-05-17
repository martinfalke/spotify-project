// src/presenters/StartPresenter.js
import { useEffect, useState } from 'react';
import spotifyAuthUrl, { generateSpotifyString } from '../api/spotifyAuth';
import StartView from '../views/StartView';

import { connect } from 'react-redux';
import authActions from '../state/auth/authActions';
import { useHistory } from 'react-router';

function StartPresenter(props){
    const { token } = props;
    const history = useHistory();
    const [spotifyString, setSpotifyString] = useState(null);

    useEffect(function(){
        const randomString = generateSpotifyString();
        setSpotifyString(randomString);
        props.setSpotifyState(randomString);
    }, []);

    useEffect(() => {
        if(token){
            // user is already authorized, redirect to AuthorizedPresenter/View
            history.push("/");
        }
    }, [token]);

    return <StartView loginUrl={`${spotifyAuthUrl}&state=${spotifyString}`} />;
}

const mapStateToProps = (state) => ({
    token: state.auth.spotify.token,
});

const mapDispatchToProps = {
    setSpotifyState: authActions.setSpotifyState,
}
export default connect(mapStateToProps, mapDispatchToProps)(StartPresenter);