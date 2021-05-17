// src/views/StartView.js
import Button from 'react-bootstrap/Button';
import LOGO from '../images/LOGO.svg';
import "./StartView.scss";

function StartView(props){
    return(
        <div className="start-view" >
          <img src={LOGO} alt="Listify logo"></img>
          <div className="login-btn-wrapper">
            <Button variant="info" href={props.loginUrl} className="login-btn">
            <i className="fa fa-lg fa-spotify">
              Login with Spotify
              </i>
            </Button>
          </div>
        </div>
    )
}


export default StartView; 