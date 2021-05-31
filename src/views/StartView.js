// src/views/StartView.js
import Button from 'react-bootstrap/Button';
import Startintro from '../images/Startpage.png'
import "./StartView.scss";

function StartView(props){
    return(
        <div className="start-view" >
          <img src={Startintro} alt="Listify logo"></img>


          <div className="login-btn-wrapper">
            <Button variant="info" href={props.loginUrl} className="login-btn">
            <i className="fa fa-lg fa-spotify">
              Login with Spotify
              </i>
            </Button>
            {/* <h3 id="intro-header">Listify enables Spotify users to customize their playlists in a creative way</h3>
            <p id="intro">
            Listify is divided into 3 unique sections to offer all the tools you need to customize your playlist. 
            The first section is called "Playlist" and this is where you can customize your existing playlists by removing songs, switching places, add to your track stash or to search for a specific song/artist/album.
            The second section is called "Search" and here is where you search for new songs and add them into your stash of tracks and once you are done you can view your selected songs under "Tracks" 
            </p> */}
          </div>
        </div>
    )
}


export default StartView; 