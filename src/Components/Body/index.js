import React, {useState} from "react";
import {ContainerBody, Text} from "./style.js"

const Body = () =>{
    const [UserInput, setUserInput] = useState("")
    const [aboba, setAboba] = useState(false)
    const handlerOnChangeInput = (event) => {
        setUserInput(event.target.value)
        console.log(event)
     }

    return(
        <>
        <ContainerBody>
           <h1>База знаний для CTF'еров</h1>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <Text><p>Этот сайт изачально был создан для учеников нашего курса на Stepik, 
            но будет интересен к ознакомлению всем, кто когда-либо интересовался игровой информационной безопасностью. 
            Здесь собраны различные ссылки на ресурсы и другая полезная  информация.</p>
            <p>Укажите, пожалуйста, как к вам обращаться?</p>
            </Text>
            <br></br>
            <br></br>
            <br></br>
            <input value={UserInput} onChange={handlerOnChangeInput}/>
            <button onClick={()=>{setUserInput("")}}>Clear</button>
            <button onClick={() => {setAboba(!aboba)}}>Change</button>
            {aboba === true && <h1>{UserInput}</h1>}    
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </ContainerBody>
        
        </>
    )
}
export default Body;