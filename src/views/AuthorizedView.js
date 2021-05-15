// src/views/AuthorizedView.js
import './AuthorizedView.scss';
import Table from 'react-bootstrap/Table'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import React from 'react'
import PlaylistPresenter from '../presenters/PlaylistPresenter';


function AuthorizedView(props){
    return (
        <div>
            <Tabs className="tabs" defaultActiveKey="tracks" id="home-page-tabs">
                <Tab eventKey="playlist" title="Playlists">
                    <PlaylistPresenter />
                </Tab>
                <Tab eventKey="tracks" title="Tracks">
                    

                </Tab>
                <Tab eventKey="search" title="Search">
                <p>Search</p>
                </Tab>
                <Tab className="listify" eventKey="logo" title="Listify" disabled></Tab>
            </Tabs>
            <div className="App">
                <p>Spotify login success!</p>
                <h2>Sample API data from authorized user</h2>
                <h5>Username</h5>
                <p>{props.username}</p>
                <h5>Display name</h5>
                <p>{props.display_name}</p>
                <h5>Country Code</h5>
                <p>{props.country}</p>
            </div>
        </div>
  );
}

export default AuthorizedView;