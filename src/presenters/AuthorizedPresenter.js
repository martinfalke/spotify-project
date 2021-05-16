// src/presenters/AuthorizedPresenter.js
import { useEffect } from 'react';
import { connect } from 'react-redux';
import AuthorizedView from '../views/AuthorizedView';
import { useHistory } from 'react-router';
import authActions from '../state/auth/authActions';
import userActions from '../state/user/userActions';
import fbaseActions from '../state/fbase/fbaseActions';

function AuthorizedPresenter(props){
    const { token, user } = props;
    const history = useHistory();
    
    // makes sure the user is authorized
    if(!token){
        history.push("/login");
    }

    useEffect(() => {
        if(token){
            props.fetchSpotifyUser(token);
        }
    }, [token]);


    return (user) ? <AuthorizedView username={user.id || ""} 
                        country={user.country || ""} 
                        display_name={user.display_name || ""}
                        logout={() => props.logout()}/>
                        : 
                        <div>Fetching user..</div>;
}

const mapStateToProps = (state) => ({
    token: state.auth.spotify.token,
    user: state.user
})
  
const mapDispatchToProps = {
    saveSpotifyToken: authActions.saveSpotifyToken,
    fetchSpotifyUser: userActions.fetchUser,
    logout: fbaseActions.logout
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedPresenter);