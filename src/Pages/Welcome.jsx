import React from "react"
import styled from "styled-components"

//Image Imports
import blueBlob from "../Images/blobs (1).png"
import yellowBlob from "../Images/blobs.png"

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Karla:wght@700&display=swap');

font-family: 'Karla', sans-serif;
font-family: 'Inter', sans-serif;

background: #F5F7FB;
min-height: 100vh;
min-width: 100vw;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const BlueBlob = styled.div`
background-image: url(${blueBlob});
width: 297px;
height: 235px;
background-repeat: no-repeat;

position: absolute;
left: 0px;
bottom: -120px;
`
const YellowBlob = styled.div`
background-image: url(${yellowBlob});
width: 297px;
height: 235px;
background-repeat: no-repeat;

position: absolute;
right: -110px;
top: 0px;    
`
const Title = styled.h1`
font-family: 'Karla';
font-style: normal;
font-weight: 700;
font-size: 31.25px;
line-height: 37px;
text-align: center;

color: #293264;
`
const Description = styled.h3`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;

margin: 10px;

color: #293264;
`
const Label = styled.label`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;

margin-top: 5px;

color: #293264;
`
const Select = styled.select`
  display: inline-block;
  width: 160px;
  height: 34px;
  line-height: 30px;
  text-align: center;
  border-radius: 15px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;

  color: #293264;
`

const Start = styled.button`
height: 50px;
width: 200px;
border: none;
border-radius: 10px;
background-color: #4D5B9E;;
color: white;
font-size: 1.2rem;
font-family: 'Karla', sans-serif;
cursor: pointer;

margin: 20px;

&:focus{
  outline: none;
}
&:active{
  box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
}
`
export default function Welcome(props) {

  return (
    <Container>
        <Title>Quizzical</Title>
        <Description>Can you guess them all?</Description>
        <br/>
        <Label htmlFor="quizLength">Select Quiz Length</Label>
        <br />
        <Select
          id = "quizLength"
          value= {props.quizLength}
          onChange={props.handleQuizLength}
          name="quizLength"
        >
          <option value={1}>1 Question</option>
          <option value={3}>3 Questions</option>
          <option value={6}>6 Questions</option>
        </Select>
        <Start onClick={props.quizToggle}>Start Quiz</Start>

        <BlueBlob/>
        <YellowBlob/>
    </Container>
  );
}