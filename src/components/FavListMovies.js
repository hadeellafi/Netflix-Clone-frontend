import FavMovie from './FavMovie';
import { useEffect } from 'react';
import { useState } from 'react';
function FavListMovies(props) {
    const [newArr, setNewArr] = useState([])

    const takeNewUpdatedMovies = (arr) => {
        setNewArr(arr)
        console.log(newArr)
    }

    useEffect(() => {
        setNewArr(props.movies)
    }, [props.movies])

    return (<>
        {newArr.map(movie => {
            return (
                <>
                    <FavMovie key={movie.id} movie={movie} takeNewUpdatedMovies={takeNewUpdatedMovies} />
                </>
            )

        })}
    </>
    )
}

export default FavListMovies;





