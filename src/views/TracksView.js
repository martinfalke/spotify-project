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
                        <th class="text-light"># </th>
                        <th class="text-light">Actions</th>
                        </tr>
                    </thead> 
                </Table>
                <div className='trackscontainer'>
                    <div className='t-songitem'> 
                        <span className="t-preview fake-button" onClick={()=>console.log('play')}>
                            <i class="fas fa-play-circle"></i>
                        </span>
                        {/* <h6 className='t-index'> </h6> */}
                        <img className='t-songcover'
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Weeknd_-_After_Hours.png/220px-The_Weeknd_-_After_Hours.png"
                            width= '48px'
                            height= '48px'
                            />
                       <Card borderless='1'>
                            <div className="cardbody">
                                    <div className='cardcontent'>
                                        <div className="song-name">
                                        The weekendfnaiojfdisaojifjaso
                                        </div>
                                        <div className="song-artist">
                                            <i class="fas fa-user"></i>
                                            Blinding Lightsdjsajfoajfodsajf
                                        </div>
                                        <div className="song-album">
                                            <i class="fas fa-record-vinyl"></i>
                                            After Hours
                                        </div>
                                    </div>
                                    <div className="t-actions">
                                        <Button variant="light" class="btn-sm">
                                            {/* <Button variant="light" onClick={()=>console.log(index)}> */}
                                           {/* <Button onClick={()=>props.addToStash(index)}> */}
                                           {/* If it is not clicked */}
                                           {/* <img
                                            alt="add to track stash"
                                            src={untrackmark}
                                            width='16px'
                                            height= '16px'
                                           /> */}
                                           {/* If it is clicked */}
                                           <img
                                                alt="remove from track stash"
                                                src={trackmarked} 
                                                width='16px'
                                                height= '16px'/>
                                       </Button>
                                       {/* multiple-choice */}
                                       <div class="form-check">
                                            <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="uncheck" aria-label="..."/>
                                            {/* <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="uncheck" aria-label="..." onClick={(e)=>console.log(index)}> */}
                                        </div>
                                        {/* <ButtonGroup>
                                            <button>
                                                <i class="far fa-arrow-alt-circle-up"></i>
                                            </button>
                                            <button><i class="far fa-arrow-alt-circle-down"></i></button>
                                            <button><i class="far fa-minus-square"></i></button>
                                        </ButtonGroup> */}
                                    </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <span className="fake-button new-playlist text-light" >
                    {/* When clicked a new playlist will be created named "Myplaylist#1"
                        <span className="fake-button new-playlist text-light" onClick={()=>console.log(index)}> */}
                    + create a new playlist with selected tracks
                </span>

            </div>
        </div>

          );
}

export default TracksView;

/*                 <Table className="t-tabletitle" size="sm" >
                    <thead>
                        <tr>
                        <th class="text-light">Song</th>
                        <th class="text-light"> </th>
                        <th class="text-light">Artist </th>
                        <th class="text-light">Album </th>
                        <th class="text-light">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="t-songitem">
                            <td class="song-cover">
                                <h6 className='t-index'> 1</h6>
                                <img className='t-songcover'
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Weeknd_-_After_Hours.png/220px-The_Weeknd_-_After_Hours.png"
                                    width= '48px'
                                    height= '48px'
                            />
                                <div className="song-name">
                                            The weekendkjfklajfjkldsj
                                </div>
                            </td>
                            <td><div className="song-artist">
                                            Blinding Lights
                                            </div>
                            </td>
                            <td><div className="song-album">
                                            After Hours
                                            </div>
                            </td>
                            <td>
                                <div className="t-actions">
                                            <button className="trackmark">
                                                <img
                                                    src={trackmarkicon}
                                                    width="18px"
                                                    height="18px"
                                                    />
                                            </button>
                                            <ButtonGroup>
                                                <button>
                                                    <i class="far fa-arrow-alt-circle-up"></i>
                                                </button>
                                                <button><i class="far fa-arrow-alt-circle-down"></i></button>
                                                <button><i class="far fa-minus-square"></i></button>
                                            </ButtonGroup>
                                        </div>
                            </td>
                        </tr>
                    </tbody>
                </Table> */