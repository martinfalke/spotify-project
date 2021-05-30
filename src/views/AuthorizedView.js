// src/views/AuthorizedView.js
import './AuthorizedView.scss';
import { Tab, Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import LOGO from '../images/LOGO.svg';
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchPresenter from '../presenters/SearchPresenter';
import PlaylistPresenter from '../presenters/PlaylistPresenter';
import TracksPresenter from '../presenters/TracksPresenter';



function AuthorizedView(props){
    return (
        <div className="authorized-view">
            <Tab.Container id="left-tabs-example" defaultActiveKey="playlist">
            <Nav id="navbar" className="navbar">
            <Nav variant="tabs" className="mr-auto" id="nav-container">
                    <Nav.Item>
                        <Nav.Link eventKey="playlist" onClick={props.onTabClick}>Playlist</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="search" onClick={props.onSearchTabClick}>Search</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="tracks" onClick={props.onTabClick}>Tracks</Nav.Link>
                    </Nav.Item>
            </Nav>
            <Nav>
                <NavDropdown title={props.username}>
                    <NavDropdown.Item onClick={props.logout} eventKey="1">Sign Out</NavDropdown.Item>
                </NavDropdown>
                <Navbar.Brand>
                    <img id="listify-logo" src={LOGO} alt="Logo" height="30" width="30"/>
                </Navbar.Brand>
            </Nav>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="search">
                    <SearchPresenter>
                    </SearchPresenter> 
                </Tab.Pane>
                <Tab.Pane eventKey="playlist">
                    <PlaylistPresenter>
                    </PlaylistPresenter>
                </Tab.Pane>
                <Tab.Pane eventKey="tracks">
                    <TracksPresenter></TracksPresenter>
                </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
        </div>
  );
}

export default AuthorizedView;

