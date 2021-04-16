// src/presenters/AuthorizedPresenter.js
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AuthorizedView from '../views/AuthorizedView';
import { getCurrentUser } from "../api/spotifyUser";
import { useHistory } from 'react-router';

function AuthorizedPresenter(props){
    const { token } = props;
    const history = useHistory();
    if(!token){
        history.push("/");
    }
    // TODO: move retrieval of user to the redux store
    const [user, setUser] = useState(null);
    const [promise, setPromise] = useState(null);
    useEffect(() => {
        setPromise(getCurrentUser(token).then(r=>r.json()).then(res=>setUser(res)));
    }, []);

    return (user) ? <AuthorizedView username={user.id || ""} country={user.country || ""} display_name={user.display_name || ""}/> : <div className="App">Fetching user..</div>;
}

const mapStateToProps = (state) => ({
    token: state.auth.spotify.token
})
  
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedPresenter);