import React, {useState} from "react";
import {ContainerBody, Text, BigInfoBlock, BlackTheme, SmallInfoBlock, Meloch, Solved} from "./style.js"
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { imageListItemBarClasses } from "@mui/material";
import Alert from '@mui/material/Alert';

const Resources_1 = () =>{
    return(
        <>
        <ContainerBody>
           <h1>База знаний для CTF'еров</h1>

           <BigInfoBlock>
           <Text><p>Этот сайт изачально был создан для учеников нашего курса на Stepik, 
            но будет полезен к ознакомлению всем, кто когда-либо интересовался игровой информационной безопасностью. 
            Здесь собраны различные ссылки на ресурсы и другая полезная  информация.</p>
            <p>Укажи, пожалуйста, как к тебе обращаться?</p></Text>

            </BigInfoBlock>   
            
        </ContainerBody>   
        </>
    )
}
export default Resources_1;