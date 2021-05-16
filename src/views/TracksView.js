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
                <Table className="tabletitle" size="sm" >
                    <thead>
                        <tr>
                        <th># </th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                </Table>
            </div>
            <div className='trackscontainer'>
                {/* <div className="trackitem"> */}
                    <div className='songitem'>
                        <h6>1</h6>
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

          );
}

export default TracksView;