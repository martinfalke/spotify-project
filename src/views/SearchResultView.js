// src/views/SearchResultView.js
import './SearchResultView.scss';
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import spotifyicon from '../images/Icons/Spotify_Icon.png';
import searchicon from '../images/Icons/Search.svg';
import trackmarked from '../images/Icons/Inboxes fill.svg';
import untrackmark from '../images/Icons/Inboxes.png';



function SearchResultView(props){
    return (
        <div className= 'searchresultview'>
            <div className= 'searchresultcontainer'>
                <div className='sr-searchbar'>
                    <form className='sr-searchinput'>
                        <Form.Group controlId="formSearchInput">
                            <Form.Control autoFocus={props.tabVisible} defaultValue={props.search} 
                                    type="text" placeholder="Search for a song, an artist or an album"
                                    onChange={e=>props.onSearch(e.target.value)} />
                       </Form.Group>
                    </form>
                        <img
                                alt="search icon"
                                src= {searchicon}
                            />
                </div>
                <Table size="sm">
                        <thead>
                            <tr>
                            <th class='th-index'> </th>
                            <th class='th-songname text-muted'>Name </th>
                            <th class='th-songartist text-muted'>Artist</th>
                            <th class='th-songalbum text-muted'>Album</th>
                            <th class='th-actions text-muted'>Actions</th>
                            </tr>
                        </thead>
                </Table>
                <div className='resultscontainer'>

                   { props.results.map((item, index) => {
                       return (
                        <div className='songitem' key={index}>  
                            <div className='cd-cover'>  
                                <img
                                    alt="song album cover"
                                    className="songitem-cover"
                                    src={item.image} 
                                    />
                            </div>
                            <Card>
                               <div className='cardcontent'>
                                   <p className="cd-name text-muted">
                                   <a href={item.spotifyUrl}>{item.track}</a>
                                   </p>
                                   <p className="cd-artist text-muted">
                                   <i class="fas fa-user"></i>
                                   {item.artist}
                                   </p>
                                   <p className="cd-album text-muted">
                                   <i class="fas fa-record-vinyl"></i>
                                   {item.album}
                                   </p>
                                   <div className='cd-Actions' > 
                                        <div className="sr-addsong">
                                            <div class="dropdown"> 
                                                <button class="dropbtn">
                                                    <i className="far fa-plus-square"></i>
                                                </button>
                                            
                                            
                                            <div class="dropdown-content">
                                                <ul className="playlist-dropdown">
                                                {props.playlists.map((list) => {
                                                    return (
                                        
                                                        <li onClick={() => props.onAddToPlaylist(list.id, item.id)}>{list.name}</li>
                                                    )
                                                     
                                                })}
                                               </ul>
                                                {/* <p>Link 1</p>
                                                <p>Link 1</p> */}
                                            </div>
                                        </div>
                                            
                                        </div>
                                
                                       <Button variant="light" onClick={(item.isInStash) ? (() => props.onDeleteFromTracks(index)) : (()=>props.onAddToTracks(index))}>
                                           <img
                                                alt="remove from track stash"
                                                src={(item.isInStash) ? (trackmarked) : (untrackmark) } />
                                       </Button>
                                       
                                       <a href={item.spotifyUrl}>
                                           {/* Open Spotify */}
                                            <img
                                                alt="open song in Spotify"
                                                src={spotifyicon}
                                                className='openinspotify'
                                                />
                                        </a>
                                    </div>
                               </div>
                       </Card>
                       </div>
                       )
                    })}
                    <div className="Pagenav">
                        <nav>
                            <ul class="pagination">
                                <li class={(props.currentPage===1) ? "page-item disabled" : "page-item"}>
                                <span class="page-link" aria-label="Previous" onClick={props.onPrevPage} disabled={props.currentPage===1}>
                                    <span aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                    Previous
                                </span>
                                </li>
                              
                                <li class={(props.currentPage===props.numPages) ? "page-item disabled" : "page-item"}>
                                <span class="page-link" aria-label="Next" onClick={props.onNextPage} disabled={props.currentPage===props.numPages}>
                                    <span aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                    Next
                                </span>
                                </li>
                            </ul>
                            <p>Page {props.currentPage} out of {props.numPages}</p>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default SearchResultView;