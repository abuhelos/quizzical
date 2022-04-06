import React from "react"
import styled from "styled-components"
import { nanoid } from 'nanoid'

const QuizContainer = styled.div`
margin-left: 75px;
margin-top: 25px;
`
const Question = styled.h2`
font-family: 'Karla';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #293264;
max-width: 700px;
`
const AnswerContainer = styled.div`
display: flex;
flex-direction: row;
`
const Answer = styled.input`
visibility: hidden;
`
const Label = styled.label`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 10.24px;
line-height: 12px;
text-align: center;
color: #293264;

height: max-content;
width: max-content;

padding: 5px;
margin: 5px;
margin-top: 17.5px;

border-radius: 7.94239px;
outline: 1px solid #4D5B9E;
cursor: pointer;
`
const Line = styled.div`
width: 80%;
margin-top: 15px;
margin-bottom: 0px;
height: 0px;
background-color: #DBDEF0;
border: 0.794239px solid #DBDEF0;
`

export default function Quiz(props) {
    function htmlDecode(input) {
        let doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }

    const styles = (option, question) => {
        if (props.checkAnswer) {
            if (option === props.correct) {
                return {background: "#94D7A2", border: "none"}
            } else if (option !== props.correct && option === props.selection[question]) {
                return {background: "#F8BCBC", border:"none", opacity: 0.5} 
            } else {
                return {opacity: 0.5} 
            }
        }
        if (props.checkAnswer == false) {
            if (props.selection[props.question] === option) {
                return {background: "#D6DBF5"}
            }
        }
    }

    const answerChoices = props.options.map(option => {
        let id = nanoid()
        return(<AnswerContainer key = {nanoid()}>
        <Answer
            type = "radio"
            id = {id}
            name = {props.question}
            value = {option}
            checked =  {props.selection[props.question] === option}
            onChange={(e) => props.handleChange(e)} 
        >
        </Answer>
        <Label htmlFor={id} style={styles(option, props.question)}>{htmlDecode(option)}</Label>
        </AnswerContainer>
        )
    })

  return (
        <QuizContainer>
            <Question>
                {htmlDecode(props.question)}
            </Question>

            <AnswerContainer>{answerChoices}</AnswerContainer>
            <Line/>
        </QuizContainer>
  );
}
