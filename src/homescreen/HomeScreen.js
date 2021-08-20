import React from 'react'
import "./HomeScreen.css"
import NavBar from '../Navbar/NavBar'
import Banner from '../Banner/Banner'
import requests from '../Request'
import Row from '../Row/Row'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <NavBar />
            <Banner />
            <Row  title="Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals}
            isLargeRow
            />
            <Row  title="Trending Now" fetchUrl = {requests.fetchTrending} />
            <Row  title="Top Rated" fetchUrl = {requests.fetchTopRated} />
            <Row  title="Action Movies" fetchUrl = {requests.fetchActionMovies} />
            <Row  title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
            <Row  title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies} />
            <Row  title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies} />
            <Row  title="Documentaries" fetchUrl = {requests.fetchDocumentaries} />
            
        </div>
    )
}

export default HomeScreen
