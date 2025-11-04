// Components/Rows/RowList/RowList.js (Recommended Correction)

import React from 'react'
import Row from '../Row/Row'
import request from '../../../Utils/request';
const RowList = () => {
  return (
    <>
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={request.fetchNetflixOriginals} 
        isLarge={true} // <-- CORRECTED PROP NAME
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Row title="TV Shows" fetchUrl={request.fetchTvShows} />
      
      {/* REMOVE ONE: Comedy Movies is listed twice */}
      {/* <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} /> */} 
    </>
  )
}

export default RowList;