import React, {useState, useEffect} from "react";
import {ContainerBody, Text, BigInfoBlock, BlackTheme, SmallInfoBlock, Meloch, Solved, ni} from "./style.js"
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { imageListItemBarClasses } from "@mui/material";
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

const Body = ({}) =>{
    const [UserInput, setUserInput] = useState("")

    const [taskSolved1, settaskSolved1] = useState(false)
    const [taskSolved2, settaskSolved2] = useState(false)

    useEffect(() => {
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            setUserInput(storedName);
        }
      }, []);

    return(
        <>
        <ContainerBody>
            <Fade>
            <BlackTheme>
                <a name ="flag_point"></a>
                <Fade left big><SmallInfoBlock><img src={"https://png.pngtree.com/png-clipart/20230221/ourmid/pngtree-free-transparent-blank-waving-flag-png-image_6611961.png"}/></SmallInfoBlock></Fade>
                <Fade left big>
                <SmallInfoBlock>
                    <Text>
                        <p>Ну смотри, {UserInput}</p>
                        <p>CTF — <span className="GreenText">Capture The Flag</span>, также известный под русифицированным вариантом — Захват флага, это игровая информационная безопасность, набирающая
                        большую популярность за последние годы. За основу взяты инструменты и приемы реальных безопасников, но на работе как правило нет таких <span className="GreenText">"уцуцуг"</span>, как в CTF. 
                        И нет, {UserInput}, это не означает, что после нескольких занятий <span className="GreenText">ты сможешь взломать</span> бабушкин чайник или профиль Одноклассника. Вас познакомят с уязвимостями 
                        и многим другим, чтобы в том числе не <span className="GreenText">стать жертвой злоумышленников</span>. CTF разделен на несколько разделов, так что каждый найдет что-то для себя!
                        </p>
                    </Text>
                </SmallInfoBlock>
                </Fade>
            </BlackTheme>
            <Bounce><Meloch><p><span className="GreenText">Играя в CTF, ты не становишься инфобез специалистом!</span></p></Meloch></Bounce>
            </Fade>
            <Fade>
            <BlackTheme>
            <BigInfoBlock>
                    <a name ="games_format"></a>
                    <Text>
                        <p>{UserInput}, давай теперь познакомимся с форматами игр.</p>
                        <p>
                            CTF соревнования обычно рассчитаны для команд 3-5 человек для широкого спектора возрастов, также есть 2 основных формата
                            проведения. Еще существует так называемый Pentest, но его почти не используют.
                        </p>
                    </Text>
            </BigInfoBlock>
            </BlackTheme>
            <BlackTheme>
                    
                    <Grid><ni>
                        <button className="Button1" onClick={() => {settaskSolved1(!taskSolved1)}}> Решить задачу</button>
                        {taskSolved1 === true && <Fade><Solved><Alert variant="outlined" severity="success"><span className="GreenText">Ты нашел флаг! Поздравляю, {UserInput}</span></Alert></Solved></Fade>}

                        <Text>
                        <p>Решение задач из разных категорий, где подтверждением успешного прохождения задания есть флаг</p>
                        <p>Продолжительность: от часа до нескольких дней</p>
                        <p>Легко организовать</p>
                        </Text>
                    </ni>
                    </Grid>
                    
                    
                    <Grid><ni>
                        <button className="Button1" onClick={() => {settaskSolved2(!taskSolved2)}}> Решить задачу</button>
                        
                        {taskSolved2 === true && <Fade><Solved><Alert variant="outlined" severity="success"><span className="GreenText">Атака прошла успешно! Вы получили очки</span></Alert></Solved></Fade>}
                        <Text>
                        <p>Командам выдается сервер, который на протяжении всего соревнования участники должны корректно поддерживать его работу и захватывать флаги чужых команд</p>
                        <p>Совсем не подходит для начинающих</p>
                        <p>Продолжительность: от 4 часов до нескольких дней</p>
                        <p>Сложно организовать</p>
                        </Text></ni>
                    </Grid>
                    
            
            </BlackTheme>
            </Fade>
        </ContainerBody>
        
        </>
    )
}
export default Body;