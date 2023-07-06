import React from "react";
import Body from "./Components/Body"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import {
  Routes,
  Route, BrowserRouter,
} from 'react-router-dom';
import ReactDOM from 'react-dom'

const App = () => {
  const hHeader = "Header";
  const hBody = "Body";
  const hFooter = "Footer";


  return (
    <>
    <Header hHeader={hHeader} />
    <BrowserRouter>
    <Body hBody={hBody}/>
    <Footer hFooter={hFooter}/>
    </BrowserRouter>

    </>
  );
}
export default App;
