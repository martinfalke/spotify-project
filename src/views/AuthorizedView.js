// src/views/AuthorizedView.js
import './AuthorizedView.scss';
import Table from 'react-bootstrap/Table'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import React from 'react'


function AuthorizedView(props){
    return (
        <div>
            <Tabs className="tabs" defaultActiveKey="tracks" id="home-page-tabs">
                <Tab eventKey="playlist" title="Playlists">
                    <p>Will display playlists eventually</p>
                </Tab>
                <Tab eventKey="tracks" title="Tracks">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Artist</th>
                                <th>Song Name</th>
                                <th>Album</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>The Weeknd</td>
                                    <td>Blinding Lights</td>
                                    <td>After Hours</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>The Weeknd</td>
                                    <td>In Your Eyes</td>
                                    <td>After Hours</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Justin Bieber</td>
                                    <td>Peaches</td>
                                    <td>Justice</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Molly Sandén</td>
                                    <td>Nån annan nu</td>
                                    <td>Nån annan nu</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Lil Nas X</td>
                                    <td>Montero</td>
                                    <td>Montero</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Alesso</td>
                                    <td>Going Dumb</td>
                                    <td>Going Dumb</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Tusse</td>
                                    <td>Voices</td>
                                    <td>Voices</td>
                                </tr>
                            </tbody>
                    </Table>

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