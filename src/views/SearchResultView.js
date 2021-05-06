// src/views/AuthorizedView.js
import './SearchResultView.scss';
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
import songcover from '../images/songcoverimg.jpeg'
import searchicon from '../images/Icons/Search.svg'
import trackmarkicon from '../images/Icons/Inboxes fill.svg'
import React from 'react'

// navigation bar 
    // LOGO+listyfy playlist
// background

// search bar

function SearchResultView(props){
    return (

        <div className= 'searchresultview'>
            <div className= 'searchresultcontainer'>
                <h6>Listify helps you find manage and find inspiration for your playlist</h6>
                <div className='searchbar'>
                    <form className='searchinput'>
                        <Form.Group controlId="formSearchInput">
                            <Form.Control type="text" placeholder="Search for a song, an artist or an album" />
                        </Form.Group>
                    </form>
                    <img
                            alt=""
                            src= {searchicon}
                            width ='24px'
                            height='24px'
                            className="justify-content-center"

                        />
                </div>
                <Table striped bordered hover size="sm" borderless='0' >
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Cover </th>
                            <th>Details</th>
                            <th>Mark</th>
                            </tr>
                        </thead>
                </Table>
                <div className='resultscontainer'>
                    <div className='songitem' style={{background:'#ffffff'}}>
                        <h6>1</h6>
                        <img
                            src={songcover}
                            width= '96px'
                            height='96px' />
                        <Card style={{ width: '80%' , borderColor:'#ffffff'}}>
                            <Card.Body>
                                <div className='cardcontent'>
                                    <Card.Text className="sm text-muted">
                                    The weekend
                                    </Card.Text>
                                    <Card.Text className="sm text-muted">
                                    Blinding Lights
                                    </Card.Text>
                                    <Card.Text className="sm text-muted">
                                    After Hours
                                    </Card.Text>
                                    <Button>
                                        <img
                                            src={trackmarkicon}
                                            width= '18px'
                                            height='18px' />
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='songitem' style={{background:'#ffffff'}}>
                        <h6>1</h6>
                        <img
                            src={songcover}
                            width= '96px'
                            height='96px' />
                        <Card style={{ width: '80%' , borderColor:'#ffffff'}}>
                            <Card.Body>
                                <div className='cardcontent'>
                                    <Card.Text className="sm text-muted">
                                    The weekend
                                    </Card.Text>
                                    <Card.Text className="sm text-muted">
                                    Blinding Lights
                                    </Card.Text>
                                    <Card.Text className="sm text-muted">
                                    After Hours
                                    </Card.Text>
                                    <Button>
                                        <img
                                            src={trackmarkicon}
                                            width= '18px'
                                            height='18px' />
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='flex-column'> </div>
                </div>
            
{/*                     <img
                        alt=""
                        src={LOGO}
                        className="bg"
                    /> */}
            </div>

            <div className= 'trackscontainer'>
                <h6>
                    Tracks
                </h6>
                <img
                            alt=""
                            src= {searchicon}
                            width ='24px'
                            height='24px'
                            className="justify-content-center"

                        />
                <Table striped bordered hover size="sm" borderless='0' >
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Cover </th>
                            <th>Details</th>
                            <th>Mark</th>
                            </tr>
                        </thead>
                </Table>
                <div className='resulttable'>
                    <div className='songitem' style={{background:'#FD570B'}}>
                        <img
                            src={songcover}
                            width= '72px'
                            height='72px' />
                        <Card style={{ width: '80%' , borderColor:'#FD570B', background:'#FD570B', display:'flex', justifyContent:"space-evenly"}}>
                            <Card.Body display='flex'>
                                <div className='cardcontent'>
                                    <Card.Text className="sm">
                                    The weekend
                                    </Card.Text>
                                    <Card.Text className="sm">
                                    Blinding Lights
                                    </Card.Text>
                                    <Card.Text className="sm">
                                    After Hours
                                    </Card.Text>
                                    <Button borderless="1" background-color="transparent">
                                        <img
                                            src={trackmarkicon}
                                            width= '18px'
                                            height='18px'
                                             />
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='songitem' style={{background:'#ffffff'}}>
                        <img
                            src={songcover}
                            width= '72px'
                            height='72px' />
                        <Card style={{ width: '80%' , borderColor:'#ffffff'}}>
                            <Card.Body>
                                <div className='cardcontent'>
                                    <Card.Text className="sm text-muted">
                                    The weekend
                                    </Card.Text>
                                    <Card.Text className="sm text-muted">
                                    Blinding Lights
                                    </Card.Text>
                                    <Card.Text className="sm text-muted">
                                    After Hours
                                    </Card.Text>
                                    <Button>
                                        <img
                                            src={trackmarkicon}
                                            width= '18px'
                                            height='18px' />
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                   
                </div>
            </div>
            
        </div>
  );
}

export default SearchResultView;