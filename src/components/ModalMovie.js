import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'react-bootstrap';
import axios from 'axios';

function ModalMovie(props) {
  const { title, release_date, poster_path, overview } = props.data;
  const posterPathURL = "http://image.tmdb.org/t/p/w500/";
  
  const [comment, setComment] = useState('');

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const addFavorite = (item) => {
    const serverURL = "http://localhost:3005/getMovies";
    const data = { ...item, comment }; // Include the comment in the data to be sent
    axios.post(serverURL, data)
      .then(response => {
        console.log(response.data);
        setComment(''); // Clear the comment input field
        props.handleClose();
      })
      .catch((error) => console.log(error));
  }

  return (
    <Modal show={props.showFlag} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Image src={posterPathURL + poster_path}></Image>
      <Modal.Body>
        {overview}<br/>{release_date}<br/>
        <input type="text" value={comment} onChange={handleComment} placeholder="Add a comment" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => { addFavorite(props.data) }}>
          Add to favorite
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMovie;
