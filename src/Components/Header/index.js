import React, {useState} from "react";
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

const Header = () => {
  return (
    <ContainerHeader>
      <Grid><H2><Bounce><h2>CTF</h2></Bounce></H2></Grid>
      <Grid><StyledIcons href="https://mui.com/material-ui/icons/"> <WavingHandIcon fontSize="large" /></StyledIcons></Grid>
      <Grid><StyledIcons href="https://mui.com/material-ui/icons/"> <AssistantPhotoIcon fontSize="large" /></StyledIcons></Grid>
      <Grid><StyledIcons href="https://mui.com/material-ui/icons/"> <PublicIcon fontSize="large" /></StyledIcons></Grid>
      <Grid><StyledIcons href="https://mui.com/material-ui/icons/"> <InfoIcon fontSize="large" /></StyledIcons></Grid>
    </ContainerHeader>    
  );
}
  


export default Header