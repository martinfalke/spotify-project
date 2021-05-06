// src/views/AuthorizedView.js
import './SearchView.scss';
import Table from 'react-bootstrap/Table'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Button from "react-bootstrap/Button"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import LOGO from '../images/LOGO.svg'
import logo from '../images/logo-02.png'
// import icons from '/node_modules/bootstrap-icons/icons'
import React from 'react'

// navigation bar 
    // LOGO+listyfy playlist
// background

// search bar

function SearchView(props){
    return (
        <div>
            <img
                alt=""
                src={LOGO}
                className="bg"
            />{' '}

            <div className= 'searchcontainer'>
                <h6>Listify helps you find manage and find inspiration for your playlist</h6>
                <div className='searchbar'>
                    <form className='searchinput'>
                        <Form.Group controlId="formSearchInput">
                            <Form.Control type="text" placeholder="Search for a song, an artist or an album" />
                        </Form.Group>
                    </form>
                    <img
                            alt=""
                            src= {logo}
                            width ='24px'
                            height='24px'
                            className="align-top"

                        />{' '}
                </div>
            </div>
            
            
        </div>
  );
}

export default SearchView;