// src/presenters/LoginPresenter.js
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import authActions from '../state/auth/authActions';

function LoginPresenter(props){
    const history = useHistory();
    const params = useParams();

    // state must be present and correct
    if(!params.state || params.state !== localStorage.getItem("spotifyState")){
        console.error("Faulty URL parameter 'state' for login attempt.");
        history.push("/login");
    }

    localStorage.removeItem("spotifyState");

    if(params.error){
        props.saveSpotifyTokenError(params.error);
        history.push("/login");
    }

    if(params.token && params.expires_in){
        props.saveSpotifyToken(params.token, params.expires_in);
    }

    return <div></div>;
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