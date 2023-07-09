import React, {useState} from "react";
import {ContainerFooter} from "./style.js"
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChatIcon from '@mui/icons-material/Chat';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SchoolIcon from '@mui/icons-material/School';

const Footer = () =>{
    const [value, setValue] = React.useState(0);
    return(
      <ContainerFooter>
      <BottomNavigation sx={{bgcolor: '#131516'}}showLabels value={value} onChange={(event, newValue) => {setValue(newValue);}}>
      <BottomNavigationAction label="Stepik CTF" icon={<SchoolIcon />} sx={{color: '#fdf7f7'}} />
        <BottomNavigationAction label="Обратная связь" icon={<MailOutlineIcon />} sx={{color: '#fdf7f7'}} />
        <BottomNavigationAction label="Оставить отзыв на курс" icon={<ChatIcon />} sx={{color: '#fdf7f7'}}/>
      </BottomNavigation>
    </ContainerFooter>
    )
}

export default Footer;