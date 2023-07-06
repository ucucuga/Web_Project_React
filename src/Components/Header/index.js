import React, {useState} from "react";
import {ContainerHeader, Blocks} from "./style.js"
import {
    Routes,
    Route, BrowserRouter,
  } from 'react-router-dom';
import { FaRegFlag, FaBeer, FaHome, FaFigma, FaFile } from "react-icons/fa";
  
const Header = () =>{
    
    return(

        <ContainerHeader>
            <>
            <Blocks>
                <h2><FaRegFlag /></h2>
                <h2><FaHome /></h2>
                <h2><FaFile /></h2>
            </Blocks>
            </>
        </ContainerHeader>
    )
}

export default Header