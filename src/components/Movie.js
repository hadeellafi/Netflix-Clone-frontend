import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from './ModalMovie';
function Movie(props) {
    const { title, release_date, poster_path, overview } = props.data;
    const posterPathURL = "http://image.tmdb.org/t/p/w500/"

    const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie,setClickedMovie]=useState({});
    const handleShow = (item) => {
        setShowFlag(true)
        //console.log(item);
        setClickedMovie(item);
    }
    const handleClose=()=>{
        setShowFlag(false)
    }
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={posterPathURL + poster_path} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button variant="primary" onClick={()=>{handleShow(props.data)}}>add to the favorite list</Button>
                </Card.Body>
            </Card>
            <ModalMovie showFlag={showFlag} handleClose={handleClose} data={props.data}/>
        </>
    )
}
export default Movie;
