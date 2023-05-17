import FavMovie from './FavMovie';
import { useEffect } from 'react';
import { useState } from 'react';
function FavListMovies(props) {
    const [newArr, setNewArr] = useState([])
    useEffect(() => {
        setNewArr(props.movies)
    }, [props.movies])
    const takeNewUpdatedMovies = (arr) => {
        setNewArr(arr);
        console.log(arr);
    }



    return (<>
        {newArr.map(movie => {
            return (
                <>
                    <FavMovie movie={movie} key={movie.id} takeNewUpdatedMovies={takeNewUpdatedMovies} />
                </>
            )

        })}
    </>
    )
}

export default FavListMovies;





