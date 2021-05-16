// src/views/AuthorizedView.js
import './AuthorizedView.scss';
import SearchView from  '../views/SearchView'
import SearchResultView from '../views/SearchResultView'
import Table from 'react-bootstrap/Table'
import { Tabs, Tab, Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import LOGO from '../images/LOGO.svg'
import searchicon from '../images/Icons/Search.svg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavDropdown from "react-bootstrap/NavDropdown";



import React from 'react'
import SearchPresenter from '../presenters/SearchPresenter'
// import PlaylistView from './PlaylistView';



function AuthorizedView(props){
    return (
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="playlist">
            <Nav class="navbar">
            <Nav variant="tabs" className="mr-auto" id="nav-container">
                    <Nav.Item>
                        <Nav.Link eventKey="playlist">Playlist</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="search">Search</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="tracks">Tracks</Nav.Link>
                    </Nav.Item>
            </Nav>
            <Nav inline>
                <NavDropdown title={props.username}>
                    <NavDropdown.Item eventKey="1">Sign Out</NavDropdown.Item>
                </NavDropdown>
                <Navbar.Brand>
                    <img id="listify-logo" src={LOGO} alt="Logo" height="30" width="30"/>
                </Navbar.Brand>
            </Nav>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="search" title="Search">
                    <SearchPresenter>
                    </SearchPresenter> 
                </Tab.Pane>
                <Tab.Pane eventKey="playlist" title="Search">
                    <p>Playlistview</p>
                </Tab.Pane>
                <Tab.Pane eventKey="tracks" title="Search">
                    <p>Tracksview</p>
                </Tab.Pane>
            </Tab.Content>
            </Tab.Container>

            
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

