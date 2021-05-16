// src/views/PlaylistView.js
import './PlaylistView.scss';
import Table from 'react-bootstrap/Table'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Button from "react-bootstrap/Button"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import LOGO from '../images/LOGO.svg'
import logo from '../images/logo-02.png'
import trackmarkicon from '../images/Icons/Inboxes fill.svg'
// import icons from '/node_modules/bootstrap-icons/icons'
import React from 'react'
import { ButtonGroup } from 'react-bootstrap';


function PlaylistView(props){
    return (
    
        <div className="playlistview">
            {/* Playlist navigation (selected/unselected)*/}
            <div className="playlistsnav"> 
                {/* 
                {props.playlists.map((playlistlabel)=> {
                    (playlistlabel.selected)? 
                    <div className="unselectedplaylist">

                    </div> :
                    <div className="selectedplaylist>
                    </div>


                })} */}
                <div className="selectedplaylist">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Weeknd_-_After_Hours.png/220px-The_Weeknd_-_After_Hours.png"
                        >
                    </img>
                    <p class="h6 text-light">Playlist A</p>
                </div>
                <div className="unselectedplaylist">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Weeknd_-_After_Hours.png/220px-The_Weeknd_-_After_Hours.png"
                        >
                    </img>
                    <p class="h6 text-secondary">Playlist B</p>
                </div>
                <div className="unselectedplaylist">
                    <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Weeknd_-_After_Hours.png/220px-The_Weeknd_-_After_Hours.png"
                            />
                    <p class="h6 text-secondary">Playlist C</p>
                </div>
            </div>
            {/* Playlist content (selected)*/}
            {/* display the content of selected playlist
                  {props.playlists.map((playlistlabel)=> {
                    (playlistlabel.selected)? 
                     :
                    <div className="selectedplaylist>
                    </div>


                })}   
                */}
            <div className="playlistcontent">
                <div className="playlistbanner">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Weeknd_-_After_Hours.png/220px-The_Weeknd_-_After_Hours.png"
                    />
                    <div className="playlistinfo">
                        <div class=" h4 text-light">Playlist A</div>
                        <p class=" md text-light">Playlist A introduction</p>
                        <p class=" md text-light">Playlist A Description</p>
                    
                        <form className="actionsbar">
                            <div class= "form-group">
                                <input type="email" class="form-control" id="PlaylistSearchAction" placeholder="search for a song"/>
                            </div>
                            <div class="form-group">
                                {/* <label for="exampleFormControlSelect1">Sort</label> */}
                                <select class="form-control" id="PlaylistSortAction" placeholder="Sort">
                                <option>dancability</option>
                                <option>beats</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>

                <Table className="p-tabletitle" size="sm" >
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                </Table>
                <div className='songscontainer'>
                    <div className='songitem'>
                        <h6>1</h6>
                        <img className="p-songcover"
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Weeknd_-_After_Hours.png/220px-The_Weeknd_-_After_Hours.png"
                            width= '48px'
                            height= '48px'
                            />
                       <Card borderless='1'>
                            <div className="cardbody">
                                    <div className='cardcontent'>
                                        <div className="song-name">
                                        The weekend
                                        </div>
                                        <div className="song-artist">
                                        Blinding Lights
                                        </div>
                                        <div className="song-album">
                                        After Hours
                                        </div>
                                    </div>
                                    <div className="Actions">
                                        {/* <button><i class="fa fa-box"></i></button> */}
                                        <button className="trackmark">
                                            <img
                                                src={trackmarkicon}
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
                            </div>
                        </Card>
                    </div>
                    <div className='songitem'>
                        <h6>2</h6>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Weeknd_-_After_Hours.png/220px-The_Weeknd_-_After_Hours.png"
                            width= '48px'
                            height= '48px'
                            />
                        <Card borderless='1'>
                            <div className="cardbody">
                                    <div className='cardcontent'>
                                        <div className="song-name">
                                        The weekend
                                        </div>
                                        <div className="song-artist">
                                        Blinding Lights
                                        </div>
                                        <div className="song-album">
                                        After Hours
                                        </div>
                                    </div>
                                    <div className="Actions">
                                        {/* <button><i class="fa fa-box"></i></button> */}
                                        <button className="trackmark">
                                            <img
                                                src={trackmarkicon}
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
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    
    );
}

export default PlaylistView;