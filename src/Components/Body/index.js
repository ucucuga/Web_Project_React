import React, {useState, useEffect, PureComponent, Item} from "react";
import {ContainerBody, Text, BigInfoBlock, BlackTheme, SmallInfoBlock, Meloch, Solved, StyledDiv, Fle} from "./style.js"
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GiPointySword } from "react-icons/gi";
import "./style.css"
import Avatar from '@mui/material/Avatar';
import ImageGallery from 'react-image-gallery';

const Body = ({}) =>{
  const images = [
    {
      original: 'https://avatars.dzeninfra.ru/get-zen_doc/1722013/pub_5dfb64ce9515eef13079f27f_5dfb6ee9bc251400ac97e49a/scale_1200',
    },
    {
      original: 'https://isu.ifmo.ru/pls/apex/f?p=2143:0:0:DWNLD_F:NO::FILE:89261A543994539EB594F823B278066B',
    },
    {
      original: 'https://pbs.twimg.com/media/EqEbRp6XMAEUUvv.jpg',
    },
    {
      original: 'hhttps://i1.wp.com/apptractor.ru/wp-content/uploads/2017/12/DSC7607.jpg?fit=1400%2C749&ssl=1',
    },
    {
      original: 'https://techcrunch.com/wp-content/uploads/2018/04/image004.jpg',
    },
  ];
      
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
            <Bounce><Meloch><p id ={"games_format"}><span className="GreenText">Играя в CTF, ты не становишься инфобез специалистом!</span></p></Meloch></Bounce>
            </Fade>
            <Fade>
            <BlackTheme>
            <BigInfoBlock>                    
                        <p  >{UserInput}, давай теперь познакомимся с форматами игр.</p>
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
              <Text>Есть ежегодные конференции, посвященные новостям и активностям, связанным с CTF и самое интересное,
                что их количество увеличивается в геометрической прогрессии. Некоторые из них закрытые, а некоторые доступны для всех желающих.
                Про мероприятия вы найдете информацию чуть ниже, а здесь покажем крупные соревнования в России  </Text>
            </BigInfoBlock>

            <Fle>
                <Grid className="f">
                <Avatar alt="RuCTF" src="https://yarsec.ru/upload/iblock/7f0/7f03c3f4923ce6a020343be7095d9514.jpg" sx={{ width: 200, height: 200 }}/>           
                <p>Крупное соревнование по информационной безопасности, организованное Хакердомом с 2008</p>
                </Grid>
                <Grid className="f">
                <Avatar alt="RuCTF" src="https://sbergraduate.ru/wp-content/uploads/2020/11/CTF.jpg" sx={{ width: 200, height: 200 }}/>           
                <p>Ежегодное масштабное соревнование, где лучшая команда получит Кубок CTF России</p>
                </Grid>
                <Grid className="f" >
                <Avatar alt="M*CTF" src="https://static.tildacdn.com/tild6237-3436-4861-a165-353131306636/image_2022-03-15_19-.png" sx={{ width: 200, height: 200 }}/>
                <p>На базе Innopolis University проводятся InnoCTF Junior с 2018. Может давать дополнительные баллы при поступлении в ВУЗы </p>
                </Grid>
                <Grid className="f" >
                <Avatar alt="M*CTF" src="https://ctf.tinkoff.ru/assets/arts/hero-bg.svg" sx={{ width: 200, height: 200 }}/>
                <p > Летом 2023 прошло первое CTF соревнование от Tinkoff </p>
                </Grid>
            </Fle>   
            <Fle>
            
            <Grid className="f" >
                <Avatar alt="M*CTF" src="https://ctfnews.ru/uploads/files/cGWOsYyurS8.jpg" sx={{ width: 200, height: 200 }}/>
                <p >Популярное соревнование для всех возрастов, сделанное командой [team Team] </p>
            </Grid>
            <Grid className="f" >
            <Avatar alt="M*CTF" src="https://vtruda.ru/media/pictures/12357.jpg" sx={{ width: 200, height: 200 }}/>
            <p > С 2022 года на ВСЕРОСе в разделе "Технология" появился новый раздел — Информационная безопасность </p>
            </Grid>
            <Grid className="f" >
            <Avatar alt="M*CTF" src="https://sun6-22.userapi.com/s/v1/if1/7b3pTa3PLwxWTDNthutJL9Bt0-ASVzxoP0scAdMrCzRtX2uznJ2LUFvvPrH8kN9KzK0hFOF4.jpg?size=2101x2101&quality=96&crop=2,30,2101,2101&ava=1" sx={{ width: 200, height: 200 }}/>
            <p > Национальная технологическая олимпиада(НТО) рассчитана для школьников, и дает баллы при поступлении. Организовано НИЯУ МИФИ </p>
            </Grid>
            <Grid className="f" >
                <Avatar alt="M*CTF" src="https://ctftime.org/media/events/MCTF_blue.jpg" sx={{ width: 200, height: 200 }}/>
                <p >M*CTF Соревнования CTF от Московского Технического Университета Связи и Информатики(МТУСИ) для школьников и студентов </p>
                </Grid>
            </Fle>
           <ImageGallery items={images} width='560' height='315' />
            </Fade>
        </ContainerBody>
        
        </>
    )
}
export default Body;