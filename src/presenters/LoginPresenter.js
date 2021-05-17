// src/presenters/LoginPresenter.js
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import authActions from '../state/auth/authActions';
import LoadingView from '../views/LoadingView';

function LoginPresenter(props){
    const history = useHistory();
    const params = useParams();

    // state must be present and correct
    if(!params.state || params.state !== localStorage.getItem("spotifyState")){
        history.push("/login");
    }

    
    if(params.error){
        props.saveSpotifyTokenError(params.error);
        history.push("/login");
    }
    
    if(params.token && params.expires_in){
        props.saveSpotifyToken(params.token, params.expires_in);
        localStorage.removeItem("spotifyState");
    }

    return <LoadingView size="lg"/>;
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