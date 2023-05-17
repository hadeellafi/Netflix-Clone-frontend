import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Image } from 'react-bootstrap';
import axios from 'axios';

function UpdateModal(props) {
    const posterPathURL = "http://image.tmdb.org/t/p/w500/";
    const updateComment = async (event) => {
        event.preventDefault();
        console.log(event.target.comment.value)
        console.log(props.movie.id);
        const serverURL = `${process.env.REACT_APP_serverURL}/UPDATE/${props.movie.id}`
        
        const result = await axios.put(serverURL,{comment: event.target.comment.value});
        console.log("done",result.data)
        props.takeNewUpdatedMovies(result.data)
        props.handleClose()
    }
    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movie.title}</Modal.Title>
                </Modal.Header>
                <Image src={posterPathURL + props.movie.poster_path}></Image>
                <Modal.Body>
                    <Form onSubmit={updateComment}>
                        <Form.Group >
                            <Form.Label>My Comment</Form.Label>
                            <Form.Control type="text" name='comment' defaultValue={props.movie.comment} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default UpdateModal;