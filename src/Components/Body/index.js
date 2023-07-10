import React, {useState, useEffect, PureComponent} from "react";
import {ContainerBody, Text, BigInfoBlock, BlackTheme, SmallInfoBlock, Meloch, Solved, StyledDiv} from "./style.js"
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GiPointySword } from "react-icons/gi";
import "./style.css"
import Avatar from '@mui/material/Avatar';

const Body = ({}) =>{

      
    const [UserInput, setUserInput] = useState("")
    const handleClick = () => {settaskSolved2(!taskSolved2);};
  

    const [taskSolved1, settaskSolved1] = useState(false)
    const [taskSolved2, settaskSolved2] = useState(false)

    useEffect(() => {
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            setUserInput(storedName);
        }
      }, []);

      const data = [
        {
          name: '10:00',
          master: 0,
          hacker: 0,
          baddy: 0,
          you: 0,
        },
        {
          name: '12:00',
          master: 2000,
          hacker: 1398,
          baddy: 500,
          you: 1666,
        },
        {
          name: '14:00',
          master: 2500,
          hacker: 5000,
          baddy: 700,
          you: 3332
        },
        {
          name: '16:00',
          master: 2800,
          hacker: 4500,
          baddy: 6000,
          you: 5000,
        },
        {
          name: '18:00',
          master: 3500,
          hacker: 4500,
          baddy: 8000,
          you: 6666,
        },
        {
          name: '20:00',
          master: 4000,
          hacker: 4500,
          you: 8332,
        },
        {
          name: '23:59',
          master: 4900,
          hacker: 7000,
          you: 10000,
        },
      ];
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
                    
                        <p>{UserInput}, давай теперь познакомимся с форматами игр.</p>
                        <p>
                            CTF соревнования обычно рассчитаны для команд 3-5 человек для широкого спектора возрастов, также есть 2 основных формата
                            проведения. Еще существует так называемый Pentest, но его почти не используют на соревнованиях
                        </p>
            </BigInfoBlock>
            </BlackTheme>
            <BlackTheme>
                <Grid>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="hacker" stroke="#8884d8" />
                    <Line type="monotone" dataKey="master" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="baddy" stroke="#d88512" />
                    {taskSolved1 === true &&<Line type="monotone" dataKey="you" stroke="#D90368" />}
                    </LineChart>

                        {taskSolved1 === true && <Fade><Solved><Alert variant="outlined" severity="success"><span className="GreenText">Ты нашел флаг! Поздравляю, {UserInput}</span></Alert></Solved></Fade>}                        
                        <button className="Button1" onClick={() => {settaskSolved1(!taskSolved1)}}> Решить задачу</button>

                        <Text>
                          <ul>
                        <li>Решение задач из разных категорий, где подтверждением успешного прохождения задания есть флаг</li>
                        <br></br>
                        <li>Продолжительность: от часа до нескольких дней</li>
                        <br></br>
                        <li>Легко организовать</li>
                        </ul>
                        </Text>
                    
                    </Grid>
                    
                    
                    <Grid>
                    <StyledDiv>                                    
                    {taskSolved2 ? 
                      <GiPointySword size={170}  className="sword" /> : 
                      <GiPointySword size={170} />
                    }                      
                    </StyledDiv>

                        {taskSolved2 === true && <Fade><Solved><Alert variant="outlined" severity="success"><span className="GreenText">Атака прошла успешно! Вы получили очки</span></Alert></Solved></Fade>}
                        <button className="Button1"  onClick={() => {settaskSolved2(!taskSolved2)}}> Атаковать </button>
                        <Text>
                        <ul>
                        <li>Командам выдается сервер, который на протяжении всего соревнования 
                        участники должны корректно поддерживать его работу и захватывать флаги чужых команд</li>
                        <br></br>
                        <li>Совсем не подходит для начинающих</li>
                        <br></br>
                        <li>Продолжительность: от 4 часов до нескольких дней</li>
                        <br></br>
                        <li>Сложно организовать</li>
                        </ul>
                        </Text>
                    </Grid>
            </BlackTheme>
            </Fade>
            <Fade right>
            <BigInfoBlock>
              <Text>Есть крупные конференции, посвященные новостям и активностям, связанными с CTF и самое интересное,
                что их количество увеличивается в геометрической прогрессии. Про мероприятия вы найдете информацию чуть ниже,
                а здесь покажем крупные соревнования в России  </Text>
            </BigInfoBlock>
            
            <Grid className="f">
            <Avatar alt="RuCTF" src="https://yarsec.ru/upload/iblock/7f0/7f03c3f4923ce6a020343be7095d9514.jpg" sx={{ width: 200, height: 200 }}/>
            <p sx = {{fontSize: 10}}>Очень крупное соревнование, организованное Хакердомом с 2008</p>
            </Grid>
            <Grid className="f">
            <Avatar alt="M*CTF" src="https://ctftime.org/media/events/MCTF_blue.jpg" sx={{ width: 200, height: 200 }}/>
            <p>Соревнования проходят для сутдентов и школьников, сделанные МТУСИ</p>
            </Grid>
            </Fade>
        </ContainerBody>
        
        </>
    )
}
export default Body;