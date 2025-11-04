import React, { useEffect, useState } from 'react';
import './row.css';
import axios from '../../../Utils/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
// Assuming the file is named Row.jsx (or Row.js)

const Row = ({ title, fetchUrl, isLarge }) => {
    // State to hold the YouTube video ID for the trailer
    const [trailerUrl, setTrailerUrl] = useState(""); 
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    
    // YouTube player options
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1, // Auto-play the video
        },
    };

    // Data fetching logic
    useEffect(() => {
        (async () => {
            try {
                // console.log("Fetching from:", fetchUrl);
                const response = await axios.get(fetchUrl);
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching row data:", error);
            }
        })();
    }, [fetchUrl]);
    
    // Corrected handleClick function
    const handleClick = (movie) => {
        if (trailerUrl) {
            // If trailer is already open, close it
            setTrailerUrl(""); 
        } else {
            // Search for the movie trailer
            movieTrailer(movie?.name || movie?.title || "")
                .then((url) => {
                    if (url) {
                        // Extract the video ID (the 'v' parameter) from the full YouTube URL
                        const urlParams = new URLSearchParams(new URL(url).search);
                        const videoId = urlParams.get("v");
                        
                        setTrailerUrl(videoId);
                        console.log("Found Trailer Video ID:", videoId);
                    } else {
                        console.warn(`Trailer not found for: ${movie?.name || movie?.title}`);
                        setTrailerUrl(""); 
                    }
                })
                .catch((error) => console.error("Error fetching trailer:", error));
        }
    };

    // Component Return (JSX)
    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='row_posters'>
                {movies?.map((movie, index) => (
                    // Attach the handleClick to the image
                    <img 
                        onClick={() => handleClick(movie)}
                        key={movie.id || index}
                        src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name || movie.title}
                        className={`row_poster ${isLarge && "row_posterLarge"}`}
                    />
                ))}
            </div>
            <div  style={{ padding: "40px 0" }}>{/* Conditional YouTube Player */}
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} 
            </div>
        </div> // <-- Missing closing </div> and corresponding ) from the original code
    );
}; // <-- No stray characters here!

export default Row;