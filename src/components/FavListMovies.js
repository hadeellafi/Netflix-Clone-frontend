import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FavMovie from './FavMovie';

function FavListMovies(props) {
    const [newArr, setNewArr] = useState([]);

    useEffect(() => {
        setNewArr(props.movies);
    }, [props.movies]);

    const takeNewUpdatedMovies = (arr) => {
        setNewArr(arr);
        console.log(arr);
    };

    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {newArr.map((movie) => (
                    <Col key={movie.id}>
                        <FavMovie
                            movie={movie}
                            key={movie.id}
                            takeNewUpdatedMovies={takeNewUpdatedMovies}
                        />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default FavListMovies;
