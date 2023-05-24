import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UpdateModal from './UpdateModel';
import axios from 'axios';

function FavMovie(props) {

    const { id, title, poster_path, overview, comment } = props.movie;
    const posterPathURL = "http://image.tmdb.org/t/p/w500/";

    const [showFlag, setShowFlag] = useState(false)
    const handleShow = () => {
        setShowFlag(true);
    }
    const handleClose = () => {
        setShowFlag(false)
    }

    const deleteMovie = async () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/DELETE/${id}`;
        await axios.delete(serverURL)
            .then(response => {
                props.takeNewUpdatedMovies(response.data); // Update state with the response data
                handleClose();
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <>

            <Card>
                <Card.Img variant="top" src={posterPathURL + poster_path} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {overview}
                        <br />
                        My comment:{comment}
                    </Card.Text>
                    <Button variant="success" onClick={() => { handleShow() }}>Update comment</Button>
                    <Button variant="danger" onClick={() => deleteMovie()}>Delete</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default FavMovie;
