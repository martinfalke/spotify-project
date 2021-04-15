// src/presenters/LoginPresenter.js
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import authActions from '../state/auth/authActions';

function LoginPresenter(props){
    console.log(props);

    // state must be present and correct
    if(!props.match.params.state || props.match.params.state != localStorage.getItem("spotifyState")){
        console.error("Faulty URL parameter \'state\' for login attempt.");
        return <Redirect to="/" />;
    }

    localStorage.removeItem("spotifyState");

    if(props.match.params.error){
        props.saveSpotifyTokenError(props.match.error);
        return <Redirect to="/" />;
    }

    if(props.match.params.token && props.match.params.expires_in){
        props.saveSpotifyToken(props.match.params.token, props.match.params.expires_in);
        return <Redirect to="/authorized" />;
    }

    return <Redirect to="/" />;
}

const mapStateToProps = (state) => ({
    auth: state.auth
})
  
const mapDispatchToProps = {
    // ... normally is an object full of action creators
    saveSpotifyToken: authActions.saveSpotifyToken,
    saveSpotifyTokenError: authActions.saveSpotifyTokenError
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPresenter);