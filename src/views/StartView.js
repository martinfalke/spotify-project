// src/views/StartView.js
import Button from 'react-bootstrap/Button';

function StartView(props){
    return(
        <div className="App">
          <p>Firebase config options</p>
          <code>
            <pre>{props.firebaseOptions}</pre>
          </code>
          <Button variant="secondary" href={props.loginUrl}>
            Login with Spotify
          </Button>
        </div>
    )
}


export default StartView; 