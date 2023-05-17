import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
function Home() {
    const [trendingArr, setTrendingArr] = useState([])
    const getTrending = () => {
        const serverURL = "http://localhost:3005/trending";
        //using axios 
        // axios.get(serverURL)
        //     .then(response => {
        //         console.log(response.data);
        //     })
        //     .catch((error) => console.log(error))

        //fetch is a method unlike axios so we can use it wathout instll it
        fetch(serverURL)
            //in order to convert our response to json format response.json
            .then(response => {
                response.json().then(data => {
                    console.log(data)
                    setTrendingArr(data)
                })
            })
            .catch((error) => console.log(error))

    }
    useEffect(() => {
        getTrending()
    }, [])
    return (
        <>
            <MoviesList movies={trendingArr} />
        </>
    )
}
export default Home;