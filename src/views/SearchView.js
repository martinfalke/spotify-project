// src/views/SearchView.js
import './SearchView.scss';
import Form from 'react-bootstrap/Form';
import BGimg from '../images/BGimg.png';
import searchicon from '../images/Icons/Search.svg';
// import icons from '/node_modules/bootstrap-icons/icons'
import React from 'react'

function SearchView(props){
    return (
        <div className="searchview">
            <img
                alt="background"
                src={BGimg}
            />{' '}

            <div className= 'searchcontainer'>
                <h6>Listify helps you manage and find inspiration for your playlists</h6>
                <div className='s-searchbar'>
                    <form className='s-searchinput'>
                        <Form.Group controlId="formSearchInput">
                            <Form.Control autoFocus={props.tabVisible}
                                type="text" placeholder="Search for a song, an artist, or an album..." 
                                onChange={e=>props.onSearch(e.target.value)}
                                ref={props.getSearchBarRef()}/> 
                        </Form.Group>
                    </form>
                    <img
                            
                        alt=""
                        src= {searchicon}       
                        />{' '}
                </div>
            </div>
            
            
        </div>
  );
}

export default SearchView;