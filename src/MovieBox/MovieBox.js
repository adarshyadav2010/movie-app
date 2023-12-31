import React, { useState } from 'react'
import {Modal,Button} from 'react-bootstrap'


const API_IMG="https://image.tmdb.org/t/p/w500/"

const MovieBox = ({title,poster_path,vote_average,release_date,overview}) => {

    const [show,setShow]=useState(false);

    const HandleShow=()=>setShow(true);
    const HandleClose=()=>setShow(false)



  return (
    <div className='card text-center .bg-secondary mb-3'>
        <div className="card-body">
            <img src={API_IMG+poster_path} alt="movie-img" className="card-img-top" />
            <div className="card-body">
                <button type='button' className='btn btn-dark' onClick={HandleShow}>View More</button>
                <Modal show={show} onHide={HandleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>                
                    <Modal.Body>
                    <img src={API_IMG+poster_path} alt="movie-img" className="card-img-top" style={{width:'13rem'}} />           
                    <h3>{title}</h3>
                    <h4>IMDB: {vote_average} </h4>   
                    <h5>Release Date: {release_date}</h5>  <br />
                    <h6>Overview</h6>
                    <p>{overview}</p>       
                    </Modal.Body>  
                    <Modal.Footer>
                        <Button className='btn btn-secondary' onClick={HandleClose}>Close</Button>
                    </Modal.Footer>  
                </Modal>
            </div>
        </div>
    </div>
  )
}

export default MovieBox

