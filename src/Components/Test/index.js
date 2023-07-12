import React, { useState, useContext } from "react";
import { ContainerBody, Text } from "./style.js"
import flag from "./CTF_flag.png"

const Test = () => {
  const [answers, setAnswers] = useState([]);
  const [active, setActive] = useState(false);

  const questions = [
    {
      question: "Любишь работать с чем-нибудь красивым?",
      options: ["Да,внешний вид важен и стараюсь делать все покрасивше ", "Особо не играет роли", "Главное не внешний вид а суть!!!"]
    },
    {
      question: "Как относишься к Linux?",
      options: ["Нормально, могу использовать при необходимости", "Мне особо не хочется возиться с этим", "Непосредственно."]
    },
    {
      question: "Любишь ли математические алгоритмы?",
      options: ["Брух", "Да, прикольная вещь", "Не особо, но иногда приходится"]
    },
    {
      question: "Интересуешься уязвимостями",
      options: ["Да, даже попробовал бы на собственных сайтах", "Не особо", "Да, прикольно еще почитать статьи про то, как нашли новые"]
    },
    {
      question: "Интересно ли спрятать пасхалки в свои фотки в соц.сетях?",
      options: ["Не надо, спасибо", "Кайф имеет", "Трата времени"]
    }
  ];

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const getMostSelectedOption = () => {
    const optionCount = [0, 0, 0];
    answers.forEach((index) => {
      optionCount[index]++;
    });
    const mostSelectedIndex = optionCount.indexOf(Math.max(...optionCount));
    let ans = ""
    if (mostSelectedIndex === 0 ) {
      ans = "Первый"
    } else if (mostSelectedIndex === 1) {
      ans = "Второй"
    } else if (mostSelectedIndex === 2) {
      ans = "Третий"
    }
    return ans;
  };

  return (
    <ContainerBody style={{backgroundImage: `url(${flag})`}} >
      <h1>Кто ты в CTF?</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <Text>{question.question}</Text>

          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <input
                type="checkbox"
                checked={answers[index] === optionIndex}
                onChange={() => handleAnswerSelect(index, optionIndex)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ))}
      { /* {active === true && getMostSelectedOption() == 1 ? <p>хуй</p>:
        getMostSelectedOption() == 2 ? <p>второй</p>:
        <p>третий</p>
      } */ }
      {active === true && getMostSelectedOption()}
      <button onClick={() => {setActive(!active)}} className="Button2">
        Показать результаты
      </button>
{/*       
        ({getMostSelectedOption() === 1 && {active} === true}) {
          <p>первый</p>
        } else if ({getMostSelectedOption() === 2 && {active} === true}) {
          <p>второй</p>
        } else if ({getMostSelectedOption() === 3 && {active} === true}) {
          <p>третий</p>
        } */}
    </ContainerBody>
  );
};

export default Test;