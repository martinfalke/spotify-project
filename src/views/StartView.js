// src/views/StartView.js
import Button from 'react-bootstrap/Button';
import "./StartView.scss";

function StartView(props){
    return(
        <div className="start-view" >
          {/* <p>Firebase config options</p>
          <code>
            <pre>{props.firebaseOptions}</pre>
          </code> */}
          <p>{console.log(`Firebase config options: ${props.firebaseOptions}`)}</p>
          <header className="login-header">
            <h1>Listify</h1>
          </header>
          <Button variant="secondary" href={props.loginUrl} className="login-bnt">
          <i className="fa fa-spotify">
            Login with Spotify
            </i>
          </Button>
        </div>
    )
}


export default StartView; 