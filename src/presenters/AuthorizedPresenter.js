// src/presenters/AuthorizedPresenter.js
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AuthorizedView from '../views/AuthorizedView';
import { useHistory } from 'react-router';
import authActions from '../state/auth/authActions';
import userActions from '../state/user/userActions';

function AuthorizedPresenter(props){
    const { token, user } = props;
    const history = useHistory();
    // makes sure the user is authorized
    if(!token){
        const storedToken = localStorage.getItem("spotifyToken");
        if(!storedToken){
            history.push("/");
        }
        else{
            props.saveSpotifyToken(storedToken);
        }
    }

    useEffect(() => {
        if(token){
            props.fetchSpotifyUser(token);
        }
    }, [token]);


    return (user) ? <AuthorizedView username={user.id || ""} country={user.country || ""} display_name={user.display_name || ""}/> : <div>Fetching user..</div>;
}

const mapStateToProps = (state) => ({
    token: state.auth.spotify.token,
    user: state.user
})
  
const mapDispatchToProps = {
    saveSpotifyToken: authActions.saveSpotifyToken,
    fetchSpotifyUser: userActions.fetchUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedPresenter);