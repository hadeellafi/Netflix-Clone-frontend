import { useState } from "react";
import { useEffect } from "react";
import FavListMovies from "./FavListMovies";
function FavList() {
    const [favArr, setFavArr] = useState([])
    const getFavorite = () => {
        const serverURL = " http://localhost:3005/getMovies"
        fetch(serverURL)
            .then(response => {
                response.json().then(data => {
                    console.log(data)
                    setFavArr(data)
                })
            })
            .catch((error) => console.log(error))

    }
    
    useEffect(()=>{
        getFavorite()
    },[])
    return (
        <>
            <FavListMovies movies={favArr}  />
        </>
    )
}
export default FavList;