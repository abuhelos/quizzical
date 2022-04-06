import React, {useState, useEffect} from "react"
import Welcome from "../src/Pages/Welcome"
import Quiz from "../src/Pages/Quiz"
import Blob from "./Pages/Blob"
import Button from "../src/Pages/Button"
import styled from "styled-components"

const Margin = styled.div`
margin-top: 15px;
`

function App() {
  const [quizStart,setQuizStart] = useState(false)
  const [checkAnswer, setCheckAnswer] = useState(false)
  const [selection, setSelection] = useState({})
  const [quizData, setQuizData] = useState([])
  const [score, setScore] = useState()
  const [gameCount, setGameCount] = useState(0)

  useEffect(function () {
    const fetchData = async () => {
      const res = await fetch('https://opentdb.com/api.php?amount=6');
      const data = await res.json();
      setQuizData(processData(data));
    }
    fetchData()
      .catch(console.error)
  }, [gameCount])

  function processData(obj) {
    let results = obj.results
    for (let i=0; i < results.length; i++) {
      let ans = (results[i].incorrect_answers).concat(results[i].correct_answer)
      shuffle(ans)
      results[i].options = ans
    }
    return results;
  }

  function shuffle(answers) {
    //Fisher Yates Shuffle Algorithm
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      const temp = answers[i];
      answers[i] = answers[j];
      answers[j] = temp;
    }
    return answers;
  }

  function quizToggle() {
    setQuizStart(!quizStart)
  }

  function handleChange(event) {
    const {name, value} = event.target
    setSelection(prevFormData => {
      return {...prevFormData,
      [name]: value
    }
    })
  }

  function gradeQuiz() {
    let points = 0
    for (let i = 0; i < quizData.length; i++) {
      if (quizData[i].correct_answer == selection[quizData[i].question]) {
        points++
      }
    }
    setScore(points)
    setCheckAnswer(true)
  }

  function newGame() {
    setQuizStart(false)
    setCheckAnswer(false)
    setSelection({})
    setScore(0)
    setGameCount(prevGameCount => prevGameCount + 1)
  }

  const quizElements = quizData.length > 0 ? quizData.map(quiz => {
  return(
    <Quiz
      key = {quiz.question}
      question = {quiz.question}
      options = {quiz.options}
      correct = {quiz.correct_answer}
      selection = {selection}
      handleChange = {handleChange}
      checkAnswer = {checkAnswer} 
    />
    )
  }) : <p>Retrieving Questions...</p>

  return (
    quizStart === false 
      ? <div>
          <Welcome
          quizToggle = {quizToggle}
          /> 
          <Blob/>
        </div> 
      : <div>
          <Margin>{quizElements}</Margin>
          <Blob/>
          <Button
            gradeQuiz = {gradeQuiz}
            checkAnswer = {checkAnswer}
            score = {score}
            quizData = {quizData}
            newGame = {newGame}
          />
        </div> 
  );
}

export default App;
