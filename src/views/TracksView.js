// src/views/TracksView.js
import './TracksView.scss';
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
import searchicon from '../images/Icons/Search.svg'
import trackmarkicon from '../images/Icons/Inboxes fill.svg'
// import icons from '/node_modules/bootstrap-icons/icons'
import React from 'react'
import { ButtonGroup } from 'react-bootstrap';

function TracksView(props){
    return (
        <div className="tracksview">
            <div className="pagetitle">
                <p class="h5">Tracks</p>
                <img
                    src= {trackmarkicon}
                />

            </div>
        
           <div className="tabletitle">
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
                        <h6 className='t-index'> 1</h6>
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
                                        Blinding Lightsdjsajfoajfodsajf
                                        </div>
                                        <div className="song-album">
                                        After Hours
                                        </div>
                                    </div>
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
                            </div>
                        </Card>
                    </div>
                </div>
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