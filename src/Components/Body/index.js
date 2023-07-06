import React, {useState} from "react";
import {ContainerBody, H1} from "./style.js"




const Body = ({hBody}) =>{

    const [stateBody, setStateBody] = useState(true)

    const buttonClick = () =>{
        console.log("Linux");
        setStateBody(!stateBody);
    }

    return(
        <>
        <ContainerBody>
           <H1>База знаний для CTF'еров</H1>
        </ContainerBody>
        
        </>
    )
}
export default Body;