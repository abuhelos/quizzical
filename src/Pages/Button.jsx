import React from "react"
import styled from "styled-components"

const CheckAnswers = styled.button`
height: 50px;
width: 200px;
border: none;
background: #4D5B9E;
border-radius: 10px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 15.24px;
line-height: 12px;
text-align: center;

color: #F5F7FB;

cursor: pointer;
margin-top: 40px;
margin-left: 40%;

&:focus{
  outline: none;
}
&:active{
  box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
}
`
const FinalDiv= styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
`
const PlayAgain = styled.button`
height: 40px;
width: 120px;
border: none;
background: #4D5B9E;
border-radius: 10px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 15.24px;
line-height: 12px;
text-align: center;

color: #F5F7FB;

cursor: pointer;


&:focus{
  outline: none;
}
&:active{
  box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
}
`
const Score = styled.h3`
height: 15px;
margin-right: 25px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16.8px;
line-height: 15px;
text-align: center;

color: #293264;

`

export default function Button(props) {
    return (
        props.checkAnswer == true 
        ?
        <FinalDiv>
            <Score>You scored {`${props.score}/${props.quizData.length}`} correct answers!</Score>
            <PlayAgain onClick={props.newGame}>Play Again</PlayAgain>
        </FinalDiv>
        :
            <CheckAnswers onClick={props.gradeQuiz}>Check Answers</CheckAnswers>
    )
}