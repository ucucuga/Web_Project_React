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
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction label="Stepik CTF" icon={<SchoolIcon />} />
        <BottomNavigationAction label="Обратная связь" icon={<MailOutlineIcon />} />
        <BottomNavigationAction label="Оставить отзыв на курс" icon={<ChatIcon />} />
      </BottomNavigation>
    </ContainerFooter>
    )
}

export default Footer;