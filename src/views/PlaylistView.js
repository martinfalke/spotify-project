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
import nottrackedicon from '../images/Icons/Inboxes.png'
// import icons from '/node_modules/bootstrap-icons/icons'
import React from 'react'
import { ButtonGroup, NavItem } from 'react-bootstrap';


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

                {props.allPlaylists.map((playlist,i) => {
                    return (
                        <div className={(
                            props.selectedPlaylist && props.selectedPlaylist === playlist.id || !props.selectedPlaylist && i === 0) ?
                                'selectedplaylist': "unselectedplaylist"} 
                                onClick = {() => props.onSelectPlaylist(playlist.id)}
                        >
                            <img src={(playlist.image)?playlist.image.url: LOGO}></img>
                            <p class="h6 text-light">{playlist.name}</p>
                        </div>
                    )
                })}
                
                {/* <div className="unselectedplaylist">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Weeknd_-_After_Hours.png/220px-The_Weeknd_-_After_Hours.png"
                        >
                    </img>
                    <p class="h6 text-secondary">Playlist B</p>
                </div> */}

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
                    <img src={(props.playlist.image)?props.playlist.image.url: LOGO} />
                    <div className="playlistinfo">
                        <div class=" h4 text-light">{props.playlist.name}</div>
                        <p class=" md text-light">{props.playlist.description}</p>
                    
                        <form className="actionsbar">
                            <div class= "form-group">
                                <input type="email" class="form-control" id="PlaylistSearchAction" placeholder="search for a song"  defaultValue={props.searchTerm} onChange={e=>props.onSearchTerm(e.target.value)}/>
                            </div>
                            <div class="form-group">
                                {/* <label for="exampleFormControlSelect1">Sort</label> */}
                                <select class="form-control" id="PlaylistSortAction" placeholder="Sort">
                                <option>song</option>
                                <option>artist</option>
                                <option>album</option>
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
                    {props.tracks.map((track, index) => {
                        return (
                            <div className='p-songitem'>
                                <h6>{index+1}</h6>
                                <div className='songlocation'>
                                    <img className="p-songcover"
                                        src={track.image.url}
                                        width= '48px'
                                        height= '48px'
                                        />
                                        <div class="dropdown"> 
                                            <button class="dropbtn">
                                                <img
                                                        src={trackmarkicon}
                                                        width="12px"
                                                        height="12px"
                                                    />
                                            </button>

                                            <div class="dropdown-content">
                                            {/* {props.trackLocations.map((track) => {
                                                return
                                                (
                                                    <p></p>
                                                )
                                                })
                                            }  */}
                                            </div>
                                            
                                        </div>
                                </div>
                            <Card borderless='1'>
                                    <div className="p-cardbody">
                                            <div className='p-cardcontent'>
                                                <div className="p-songname">
                                                    <a href={track.spotifyUrl.spotify}>{track.name}</a>
                                                </div>
                                                <div className="p-songartist">
                                                    <i class="fas fa-user"></i>
                                                    {track.artist}
                                                </div>
                                                <div className="p-songalbum">
                                                    <i class="fas fa-record-vinyl"></i>
                                                    {track.album_name}
                                                </div>
                                            </div>
                                            <div className="p-actions">
                                                <button className="trackmarked"  onClick={()=>props.onAddToTracks(index)}>
                                                    {/* if added in tracks  */}
                                                    <img
                                                        src={trackmarkicon}
                                                        />
                                                </button>
                                                {/* : <button className="nottrackmarked" >
                                                    <img
                                                        src={nottrackedicon}
                                                        />
                                                </button>
                                                */}
                                                <ButtonGroup>
                                                <button disabled={!props.actionsDisabled} onClick={()=> props.onMoveUpSong(index)}>
                                                    <i class="far fa-arrow-alt-circle-up"></i>
                                                </button>
                                                <button disabled={!props.actionsDisabled} onClick={()=> props.onMoveDownSong(index)}>
                                                    <i class="far fa-arrow-alt-circle-down"></i>
                                                </button>
                                                <button disabled={!props.actionsDisabled} onClick={()=> props.onDeleteSong(index)}>
                                                    <i class="far fa-minus-square"></i>
                                                </button>
                                                </ButtonGroup>
                                            </div>
                                    </div>
                                </Card>
                            </div>
                        )
                        
                    })}
                    
                </div>
            </div>
        </div>
    
    );
}

export default PlaylistView;