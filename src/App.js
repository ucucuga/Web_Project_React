import React, { useState, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Body from "./Components/Body"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import {
  Routes,
  Route, BrowserRouter,
} from 'react-router-dom';
import ReactDOM from 'react-dom'

const App = () => {
           return(
            <>
            <Fade top> <Header /></Fade>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={
                  <Fade top><Body /></Fade>
                }/>
            </Routes>
            </BrowserRouter>
            <Fade top><Footer /></Fade>
            </>
           )
}

export default App;
