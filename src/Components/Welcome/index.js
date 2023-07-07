import React, {useState} from "react";
import {ContainerBody, Text, BigInfoBlock, BlackTheme, SmallInfoBlock, Meloch, Solved} from "./style.js"
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { imageListItemBarClasses } from "@mui/material";
import Alert from '@mui/material/Alert';

const Welcome = () =>{
    const [UserInput, setUserInput] = useState("")
    const [aboba, setAboba] = useState(false)

    const [taskSolved1, settaskSolved1] = useState(false)
    const [taskSolved2, settaskSolved2] = useState(false)

    const handlerOnChangeInput = (event) => {
        setUserInput(event.target.value)
        console.log(event)
     }

     const [stateBody, setStateBody] = useState(true)

     const buttonClick = () => {
        console.log(stateBody);
        setStateBody(!stateBody);
    }

    return(
        <>
        <ContainerBody>
           <h1>База знаний для CTF'еров</h1>

           <BigInfoBlock>
           <Text><p>Этот сайт изачально был создан для учеников нашего курса на Stepik, 
            но будет полезен к ознакомлению всем, кто когда-либо интересовался игровой информационной безопасностью. 
            Здесь собраны различные ссылки на ресурсы и другая полезная  информация.</p>
            <p>Укажи, пожалуйста, как к тебе обращаться?</p></Text>
            

            <input value={UserInput} onChange={handlerOnChangeInput}/>
            <button onClick={() => {setAboba(!aboba)}}>Change</button>
            {aboba === true && <h1>{UserInput}</h1>} 
            </BigInfoBlock>   
            
        </ContainerBody>   
        </>
    )
}
export default Welcome;