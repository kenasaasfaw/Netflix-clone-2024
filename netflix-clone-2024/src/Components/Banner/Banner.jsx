// Components/Banner/Banner.js

import React, { useEffect, useState } from "react";
import './banner.css';
import requests from '../../Utils/request';
import axios from '../../Utils/axios';

const Banner = () => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        async function fetchData() {
            try {
                const endpoint = requests?.fetchNetflixOriginals;
                
                // IMPORTANT: Check the correct env key variable name here
                console.log("API Key Check:", process.env.REACT_APP_API_KEY ? 'Key Found' : 'Key Missing!');


                if (!endpoint) {
                    console.error("Banner: No endpoint found in requests file");
                    return; // Don't try to fetch
                }

                const response = await axios.get(endpoint);
                const results = response?.data?.results;
                
                if (mounted && results && results.length > 0) {
                    const randomIndex = Math.floor(Math.random() * results.length);
                    setMovie(results[randomIndex]);
                } else if (mounted) {
                    console.warn("Banner: API returned no results.");
                }

            } catch (error) {
                console.error("Banner: API fetch error (Likely 401/404):", error);
            } finally {
                if (mounted) setLoading(false);
            }
        }
        fetchData();
        return () => { mounted = false; };
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.slice(0, n - 1) + "..." : str;
    }

    // Simplified loading and empty state check
    if (loading) {
        // Show a visible loading box instead of just text
        return <header className="banner" style={{ height: '80vh', backgroundColor: '#333' }} />;
    }
    
    if (!movie) {
        return <header className="banner" style={{ height: '10vh', color: 'gray', textAlign: 'center' }}>No content available. Check Console for API errors.</header>;
    }


    const backgroundUrl = movie?.backdrop_path
        ? `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
        : 'none';

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: backgroundUrl,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name || 'Unknown'}
                </h1>

                <div className="banner_buttons">
                    <button className="banner_button_play">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                <p className="banner_description">{truncate(movie?.overview, 150)}</p>
            </div>

            <div className="banner_fadeBottom" />
        </header>
    );
};

export default Banner;