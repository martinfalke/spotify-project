// src/views/AuthorizedView.js
import './AuthorizedView.scss';
import SearchView from  '../views/SearchView'
import SearchResultView from '../views/SearchResultView'
import Table from 'react-bootstrap/Table'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import React from 'react'
import PlaylistPresenter from '../presenters/PlaylistPresenter';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import LOGO from '../images/LOGO.svg'
import searchicon from '../images/Icons/Search.svg'


import SearchPresenter from '../presenters/SearchPresenter'
import DropdownButton from 'react-bootstrap/DropdownButton'
import PlaylistView from './PlaylistView';

function AuthorizedView(props){
    return (
        <div>
            <Tabs className="tabs" defaultActiveKey="tracks" id="home-page-tabs">
                <Tab eventKey="playlist" title="Playlists">
                    <PlaylistView/>
                </Tab>
                <Tab eventKey="tracks" title="Tracks">
                    

                </Tab>
                <Tab eventKey="search" title="Search">
                 <SearchPresenter>
                </SearchPresenter> 
                </Tab>
                <Tab className="listify" eventKey="logo" title="Listify" disabled></Tab>
                <Tab classname="usermenu" eventKey="usermenu" title="Menu">
                    <nav>
                        <div class="dropdown">
                            <button><a href="#">Home</a></button>
                            <div class="projects">
                                <button>Projects</button>
                                <ul class="list">
                                    <li><a href="#">Weather App1</a></li>
                                    <li><a href="#">Weather App2</a></li>
                                    <li><a href="#">Weather App3</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </Tab>
            </Tabs>
         
            
            {/*<div className="App">
                <p>Spotify login success!</p>
                <h2>Sample API data from authorized user</h2>
                <h5>Username</h5>
                <p>{props.username}</p>
                <h5>Display name</h5>
                <p>{props.display_name}</p>
                <h5>Country Code</h5>
                <p>{props.country}</p>
            </div>
            */}
        </div>
  );
}

export default AuthorizedView;






/* function AuthorizedView(props){

    return (
        <div className='allthingscontainer'>
             <Navbar className="NavigationForEveryPage justify-content-between">             
                <Navbar.Brand href="#authorized"> 
                    <img
                        alt=""
                        src={LOGO}
                        width='30'
                        height='30'
                    />{' '}
                    Listify
                </Navbar.Brand>
                <Nav className= "navpages" activeKey="/authorized" >
                    <Nav.Link href="#Playlist" >Playlist</Nav.Link>
                    <Nav.Link href="#Tracks">Tracks</Nav.Link>
                    <Nav.Link href="#authorized" disabled>
                        Search
                    </Nav.Link>
                    <img 
                            alt=""
                            src= {searchicon}
                    />{' '}
                </Nav>
            </Navbar>
            <SearchPresenter/>
        </div>
  );
}

export default AuthorizedView; */

