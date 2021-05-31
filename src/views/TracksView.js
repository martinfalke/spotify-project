// src/views/TracksView.js
import './TracksView.scss';
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import trackmarked from '../images/Icons/Inboxes fill.svg';
// import icons from '/node_modules/bootstrap-icons/icons'
import React from 'react'
import spotifyicon from '../images/Icons/Spotify_Icon.png';


function TracksView(props){
    return (
        <div className="tracksview">
            <div className="pagetitle">
                <p className="h5">Tracks</p>
                <img
                    alt="tracks page logo"
                    src= {trackmarked}
                />
            </div>
        
           <div className="trackstable">
                <Table className="t-tabletitle" size="sm" >
                    <thead>
                        <tr>
                        <th className="text-light"> </th>
                        <th className="text-light">Actions</th>
                        </tr>
                    </thead> 
                </Table>
                <div className='trackscontainer'>
                    
                    { ((props.tracks === null || props.tracks.length === 0) && (
                        <span className=" new-playlist text-light" >
                        Add tracks from your Playlist or search for new songs to add!
                        </span>
                    )) || props.tracks.map((track, index) => {
                    return(
                    <div className='t-songitem'> 
                        <img className='t-songcover'
                             alt="song album cover"
                             src={track.image.url}
                            />
                       <Card borderless='1'>
                            <div className="cardbody">
                                    <div className='cardcontent'>
                                        <div className="song-name">
                                        {track.name}
                                        </div>
                                        <div className="song-artist">
                                            <i className="fas fa-user"></i>
                                            {track.artist}
                                        </div>
                                        <div className="song-album">
                                            <i className="fas fa-record-vinyl"></i>
                                            {track.album_name}
                                        </div>
                                    </div>
                                    <div className="t-actions">
                                        <div className="sr-addsong">
                                            <div className={(props.isFetchingPlaylists) ? "dropdown disabled" : "dropdown"}> 
                                                <button className="dropbtn"
                                                        disabled={props.isFetchingPlaylists}>
                                                    <i className="far fa-plus-square"></i>
                                                </button>
                                            
                                            
                                                <div className="dropdown-content" onClick={props.notify}>
                                                    {props.playlists.map((list) => {
                                                            return (
                                                                <p onClick={() => props.onAddToPlaylist(list.id, track.id)} className="playlist-dropdown-p">{list.name}</p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                
                                            </div>
                                            
                                        </div>

                                        <Button variant="light" className="btn-sm" onClick={()=>props.onDeleteTrack(index)}>
                                           <img
                                                alt="remove from track stash"
                                                src={trackmarked} 
                                                width='16px'
                                                height= '16px'/>
                                       </Button>


                                       <a href={track.spotifyUrl}>
                                           {/* Open Spotify */}
                                            <img
                                                alt="open song in Spotify"
                                                src={spotifyicon}
                                                className='openinspotify'
                                                />
                                        </a>
                                    </div>
                            </div>
                        </Card>
                    </div>);
                    
                    })}
                </div>
           

            </div>
        </div>

          );
}



export default TracksView;