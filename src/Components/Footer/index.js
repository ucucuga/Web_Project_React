import React, { useState, useContext } from "react";
import { ContainerFooter } from "./style.js"
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChatIcon from '@mui/icons-material/Chat';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SchoolIcon from '@mui/icons-material/School';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import useSound from 'use-sound';
import rickroll from './never-gonna-give-u-up.mp3';

const Footer = () => {
  const [play] = useSound(rickroll);
  const [value, setValue] = React.useState(0);

  return (
    <Box >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{background: '#131516'}}
      >
        <BottomNavigationAction onClick={play} label="Stepik CTF" icon={<SchoolIcon />} sx={{ color: '#fdf7f7' }} />
        <BottomNavigationAction label="Обратная связь" icon={<MailOutlineIcon />} sx={{ color: '#fdf7f7' }} />
        <BottomNavigationAction label="Оставить отзыв на курс" icon={<ChatIcon />} sx={{ color: '#fdf7f7' }} />
        <BottomNavigation>
          {/* <TypeAnimation
            sequence={['Be stronger', 1000, 'Be smarter', 1000, 'Be better', 1000]}
            style={{ fontSize: '1em', width: 200, marginLeft: 20, background: 'rgba(135, 135, 152, 0.955)'}}
            cursor={true}
            repeat={Infinity}
          /> */}
        </BottomNavigation>
      </BottomNavigation>
    </Box>

  )
}

export default Footer;