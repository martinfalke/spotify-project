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
                {/* Here needs to fetch searchresults data */}
                <div className='resultscontainer'>

                   { props.results.map((item, index) => {
                       return (
                        <div className='songitem' key={index}>  
                            <span className="cd-preview fake-button" onClick={()=>console.log(index)}>
                                <i class="fas fa-play-circle"></i>
                            </span>
                            <div className='cd-cover'>  
                                {/* <h6>{(props.currentPage-1)*20 + index+1}</h6> */}
                                <img
                                    alt="song album cover"
                                    className="songitem-cover"
                                    src={item.image} 
                                    />
                            </div>
                            <Card>
                               <div className='cardcontent'>
                                   <p className="cd-name text-muted">
                                   {item.track}
                                   </p>
                                   <p className="cd-artist text-muted">
                                   <i class="fas fa-user"></i>
                                   {item.artist}
                                   </p>
                                   <p className="cd-album text-muted">
                                   <i class="fas fa-record-vinyl"></i>
                                   {item.album}
                                   </p>
                                   {/* These functions have not been implemented yet */}
                                   <div className='cd-Actions' > 
                                       <Button variant="light" onClick={()=>console.log(index)}>
                                           {/* <Button onClick={()=>props.addToStash(index)}> */}
                                           {/* If it is not clicked */}
                                           {/* <img
                                            alt="add to track stash"
                                            src={untrackmark}
                                           /> */}
                                           {/* If it is clicked */}
                                           <img
                                                alt="remove from track stash"
                                                src={trackmarked} />
                                       </Button>
                                       
                                       <a href={item.spotifyUrl}>
                                           {/* Open Spotify */}
                                            <img
                                                alt="open song in Spotify"
                                                src={spotifyicon}
                                                className='openinspotify'
                                                />
                                        </a>
                                       {/* <i className="fa fa-plus add-song" aria-hidden="true" /> */}
                                    </div>
                               </div>
                       </Card>
                       </div>
                       )
                    })}
                        

                    {/* Here needs to get the number of pages */}
                    <div className="Pagenav">
                        <nav>
                            <ul class="pagination">
                                <li class={(props.currentPage===1) ? "page-item disabled" : "page-item"}>
                                <span class="page-link" aria-label="Previous" onClick={props.onPrevPage} disabled={props.currentPage===1}>
                                    <span aria-hidden="true">&laquo;</span>
                                    <span class="sr-only">Previous</span>
                                </span>
                                </li>
                                <li class={(props.currentPage===props.numPages) ? "page-item disabled" : "page-item"}>
                                <span class="page-link" aria-label="Next" onClick={props.onNextPage} disabled={props.currentPage===props.numPages}>
                                    <span aria-hidden="true">&raquo;</span>
                                    <span class="sr-only">Next</span>
                                </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* smtracks here */}
        </div>
  );
}

export default SearchResultView;

//small tracksview has not been implemented
            /*
            <div className= 'smtrackscontainer'>
                <div className="trackstitle"> 
                    <h5>
                        Tracks
                    </h5>
                    <img
                            alt=""
                            src= {trackmarked}
                            width ='24px'
                            height='24px'

                        />
                </div>
                <Table size="sm" borderless='1' >
                        <thead class="text-light">
                            <tr>
                            <th><em>Cover </em></th>
                            <th>Details</th>
                            <th>Mark</th>
                            </tr>
                        </thead>
                </Table>
                // Here needs to fetch data from tracks //
                <div className='resulttable'>
                    <div className='tracksitem' style={{background:'orange'}}>
                        <img
                            src={songcover}
                             />
                        <Card style={{ width: '80%' , borderColor:'transparent', background:'orange', display:'flex', justifyContent:"space-evenly"}}>
                                <div className='cardcontent'>
                                    // <p><small>The weekend</small></p> //
                                    <p><small>Blinding Lights</small></p>
                                    <p><small>After Hours</small></p>                        
                                    <Button class="btn-sm btn-transparent">
                                        <img
                                            src={trackmarked}
                                            width= '18px'
                                            height='18px'
                                             />
                                    </Button>
                                </div>
                        </Card>
                    </div>
                    <div className='tracksitem'style={{background:'white'}}>
                        <img
                            src={songcover}
                            width= '72px'
                            height='72px' />
                        <Card style={{ width: '80%' , background:'white'}}>
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
                                            src={trackmarked}
                                            width= '18px'
                                            height='18px' />
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                   
                </div>
            </div> */
