// src/presenters/AuthorizedPresenter.js
import { useEffect } from 'react';
import { connect } from 'react-redux';
import AuthorizedView from '../views/AuthorizedView';
import { useHistory } from 'react-router';
import userActions from '../state/user/userActions';
import fbaseActions from '../state/fbase/fbaseActions';
import searchActions from '../state/search/searchActions';
import LoadingView from '../views/LoadingView';

function AuthorizedPresenter(props){
    const { token, user } = props;
    const history = useHistory();
    
    // makes sure the user is authorized
    if(!token){
        history.push("/login");
    }

    useEffect(() => {
        if(token && !user.id){
            props.fetchSpotifyUser(token);
        }
    }, [token]);

    const onTabClick = () => props.setSearchTabVisibility(false);
    const onSearchTabClick = () => props.setSearchTabVisibility(true);

    return (user.id) ? <AuthorizedView username={user.display_name || user.id || ""}
                        logout={() => props.logout()}
                        onTabClick={onTabClick}
                        onSearchTabClick={onSearchTabClick} />
                        : 
                        <LoadingView size="lg" />;
}

const mapStateToProps = (state) => ({
    token: state.auth.spotify.token,
    user: state.user
})
  
const mapDispatchToProps = {
    fetchSpotifyUser: userActions.fetchUser,
    logout: fbaseActions.logout,
    setSearchTabVisibility: searchActions.setIsTabVisible,
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedPresenter);