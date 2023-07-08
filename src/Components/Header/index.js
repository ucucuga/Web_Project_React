import React, {useState, useEffect} from "react";
import {ContainerHeader, StyledIcons, H2} from "./style.js"
import {
    Routes,
    Route, BrowserRouter,
  } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import { bounce } from 'react-animations';
import PublicIcon from '@mui/icons-material/Public';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import InfoIcon from '@mui/icons-material/Info';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <ContainerHeader>
      <Grid><H2><Bounce><h2>CTF</h2></Bounce></H2></Grid>
      <Grid><Link to="/" className="StyledIcons"><WavingHandIcon fontSize="large" /></Link></Grid>
      <Grid><Link to="/main-page/#flag_point" className="StyledIcons"><AssistantPhotoIcon fontSize="large" /></Link></Grid>
      <Grid><Link to="/main-page/#games_format" className="StyledIcons"><PublicIcon fontSize="large" /></Link></Grid>
      <Grid><Link to="/" className="StyledIcons"><InfoIcon fontSize="large" /></Link></Grid>
    </ContainerHeader>    
  );
}
  


export default Header