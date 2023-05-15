import Movie from "./Movie"
function MoviesList(props) {
    return (
        <>
            {props.movies.map(movie => {
                return (
                    <>
                        <Movie key={movie.id} data={movie} />
                    </>
                )

            })}
        </>
    )
}
export default MoviesList