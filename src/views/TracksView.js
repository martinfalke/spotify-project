// src/views/TracksView.js
import './TracksView.scss';
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import LOGO from '../images/LOGO.svg';
import logo from '../images/logo-02.png';
import searchicon from '../images/Icons/Search.svg';
import trackmarked from '../images/Icons/Inboxes fill.svg';
import untrackmark from '../images/Icons/Inboxes.png';
// import icons from '/node_modules/bootstrap-icons/icons'
import React from 'react'
import { ButtonGroup } from 'react-bootstrap';


function TracksView(props){
    return (
        <div className="tracksview">
            <div className="pagetitle">
                <p class="h5">Tracks</p>
                <img
                    src= {trackmarked}
                />
            </div>
        
           <div className="trackstable">
                <Table className="t-tabletitle" size="sm" >
                    <thead>
                        <tr>
                        <th class="text-light"> </th>
                        <th class="text-light">Actions</th>
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
                             src={track.image.url}
                            />
                       <Card borderless='1'>
                            <div className="cardbody">
                                    <div className='cardcontent'>
                                        <div className="song-name">
                                        {track.name}
                                        </div>
                                        <div className="song-artist">
                                            <i class="fas fa-user"></i>
                                            {track.artist}
                                        </div>
                                        <div className="song-album">
                                            <i class="fas fa-record-vinyl"></i>
                                            {track.album_name}
                                        </div>
                                    </div>
                                    <div className="t-actions">
                                        <Button variant="light" class="btn-sm" onClick={()=>props.onDeleteTrack(index)}>
                                           <img
                                                alt="remove from track stash"
                                                src={trackmarked} 
                                                width='16px'
                                                height= '16px'/>
                                       </Button>
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