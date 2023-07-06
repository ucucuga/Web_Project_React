import React, {useState} from "react";
import {ContainerFooter} from "./style.js"
const Footer = ({hFooter}) =>{
    return(
        <ContainerFooter>
            <p>{hFooter}</p>
        </ContainerFooter>
    )
}
export default Footer;