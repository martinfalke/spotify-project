// src/views/PlaylistView.js
import './PlaylistView.scss';
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import trackmarkicon from '../images/Icons/Inboxes fill.svg'
import nottrackedicon from '../images/Icons/Inboxes.png'
import LOGO from '../images/LOGO.svg';
// import icons from '/node_modules/bootstrap-icons/icons'
import React from 'react'
import { ButtonGroup, NavItem } from 'react-bootstrap';
import spotifyicon from '../images/Icons/Spotify_Icon.png';


function PlaylistView(props){
    return (
    
        <div className="playlistview">
            <div className="playlistsnav"> 
                {props.allPlaylists && (props.allPlaylists.map((playlist,i) => {
                    return (
                        <div key={i} className={(
                            (props.selectedPlaylist && props.selectedPlaylist === playlist.id) || (!props.selectedPlaylist && i === 0)) ?
                                'selectedplaylist': "unselectedplaylist"} 
                                onClick = {() => props.onSelectPlaylist(playlist.id)}
                        >
                            <img className={(playlist.image) ? "" : "no-img"} alt="playlists" src={(playlist.image)?playlist.image.url: LOGO}></img>
                            <p class="h6 text-light">{playlist.name}</p>
                        </div>
                    )
                })) || <p className="no-playlists-text">Your account has no playlists yet.</p>}

            </div>
            <div className="playlistcontent">
                <div className="playlistbanner">
                    <img alt="selected playlist" className={(props.playlist && props.playlist.image) ? "" : "no-img"}
                            src={(props.playlist && props.playlist.image) ? props.playlist.image.url : LOGO} />
                    <div className="playlistinfo">
                        <div className=" h4 text-light">{props.playlist && props.playlist.name || ""}</div>
                        <p className=" md text-light">{props.playlist && props.playlist.description || ""}</p>
                    
                        <form className="actionsbar">
                            <div class= "form-group">
                                <input type="text" class="form-control" id="PlaylistSearchAction" placeholder="Filter songs.."  defaultValue={props.searchTerm} onChange={e=>props.onSearchTerm(e.target.value)}/>
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
                    {props.tracks.map((track, index, list)=> {
                        return (
                            <div key={index} className='p-songitem'>
                                <h6>{index+1}</h6>
                                <img className="p-songcover"
                                    alt="song album cover"
                                    src={(track.image) ? track.image.url : LOGO}
                                    width= '48px'
                                    height= '48px'
                                    />
                            <Card borderless='1'>
                                    <div className="p-cardbody">
                                            <div className='p-cardcontent'>
                                                <div className="p-songname">
                                                    <a>{track.name}</a>
                                                </div>
                                                <div className="p-songartist">
                                                    <i className="fas fa-user"></i>
                                                    {track.artist}
                                                </div>
                                                <div className="p-songalbum">
                                                    <i className="fas fa-record-vinyl"></i>
                                                    {track.album_name}
                                                </div>
                                            </div>
                                            
                                            <div className="p-actions">
                                                <div onClick={(track.isInStash) ? (() => props.onDeleteFromTracks(index)) : (()=>props.onAddToTracks(index))}>
                                                {(track.isInStash) ? (<button className='trackmarked'>
                                                    <img
                                                        alt="add to track stash"
                                                        src={trackmarkicon}
                                                        />
                                                </button>)
                                                : (<button className="nottrackmarked" >
                                                    <img
                                                        src={nottrackedicon}
                                                        />
                                                </button>)
                                                }
                                                </div>
                                                <a target="_blank" href={track.spotifyUrl}>
                                                <img
                                                alt="open song in Spotify"
                                                src={spotifyicon}
                                                className='openinspotify'
                                                />
                                                </a>
                                                
                                                <ButtonGroup>
                                                <button disabled={!props.actionsDisabled || index==0} onClick={()=> props.onMoveUpSong(index)}>
                                                    <i class="far fa-arrow-alt-circle-up"></i>
                                                </button>
                                                <button disabled={!props.actionsDisabled || index===list.length-1} onClick={()=> props.onMoveDownSong(index)}>
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