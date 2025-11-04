// ...existing code...
import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import home from '../Home/home.css';
import RowList from "../../Components/Rows/RowList/RowList";

const Home = () => {
  useEffect(() => {
    // quick debug: ensure env key is available (shows in browser console)
    console.log("Home mounted — REACT_APP_TMDB_KEY:", process.env.REACT_APP_TMDB_KEY);
  }, []);

  return (
    <div className="home">
      <Header />
      <main className="home_main">
        <Banner />
        <RowList />   
      </main>
      <Footer />
    </div>
  );
};

export default Home;
// ...existing code...