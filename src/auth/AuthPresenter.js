// src/auth/AuthPresenter.js
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import authActions from '../state/auth/authActions';

function AuthPresenter(props){
    let hashParams = new Map();
    window.location.hash.slice(1).split('&').forEach(
        (d) => {
            let param = d.split('=');
            console.log(param);
            hashParams.set(param[0], param[1]);
        }
    );
    if(hashParams.has('access_token') && hashParams.has('state') && hashParams.has('token_type') && hashParams.has('expires_in') && !hashParams.has('error')){ // TODO: check that state is the correct state with what is in the redux store
        props.saveSpotifyToken(hashParams.get('access_token'), hashParams.get('expires_in'), hashParams.get('state'));
        return <Redirect to ="/authorized"></Redirect>
    }else if(hashParams.has('error')){
        props.saveSpotifyTokenError(hashParams.get('error'));
        return <Redirect to="/"></Redirect>
    }else{
        return <Redirect to="/"></Redirect>
    }
}

const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    ...state
})
  
const mapDispatchToProps = {
    // ... normally is an object full of action creators
    ...authActions
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthPresenter);