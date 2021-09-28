import React from 'react';

//components
import HeroImage from "../components/HeroImage/index";
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';

//import config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";

//image
import NoImage from "../images/no_image.jpg";

//hook
import { useHomeFetch } from '../hooks/useHomeFetch';
import Grid from './Grid';
import Button from './Button';

const Home = () => {
    const {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch();
    console.log(state);

    if (error) return <div>Algo salió mal...</div>
    return (
        <>
        {!searchTerm && state.results[0] && 
        <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].overview}/>}
        <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
        <Grid header={searchTerm ? `Resultados de ${searchTerm}` : "Películas populares"}>
            {state.results.map(movie => (
                <Thumb 
                key={movie.id} 
                clickable 
                image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path :
                NoImage}
                movieId= {movie.id}></Thumb>
            ))}
        </Grid>
        {
            loading && <Spinner></Spinner>
        }
        {
            state.page < state.total_pages && !loading && (
                <Button text="Cargar más" callback={() => setIsLoadingMore(true)}></Button>
            )
        }
        </>
    );
}

export default Home;