# Quizzical | Click [Here](https://abuhelos.github.io/quizzical/) to Play

Quizzical is a multiple choice quiz game that pulls 6 questions from the [Open Trivia Database API](https://opentdb.com/). This app contains the following:

- Dependencies
  - Nano ID
  - Styled-Components
  - UseState and UseEffect
- Highlights
  - API Calls to Open Trivia Database
  - Conditional Rendering
    - Radio Buttons' background color dependent on answer selection/correctness
    - Toggles between home and quiz page
  - Calculates Game Score State
  - Shuffles Answer Choices
  - Play Again Feature
  - Adjustable quiz length


## Solution Summary

There were four components that were used and exported into the App file. They are Welcome.jsx, Quiz.jsx, Blob.jsx, and Button.jsx. A ternary was used to determine whether to display the home page or the quiz. Welcome was used for the home page while Button and Quiz were used for the functioning game. Blob is the blue and yellow splashes that are displayed in the background of both pages. Styled components was used for CSS and is located in the beginning portion of each file.

App Component:

- Uses a UseEffect to retrieve data from the API and shuffle the answer choices presented to the player using an array shuffle algorithm.
- Contains functions to update score, keep track of radio button selection, and check answers. These functions as well as state variables are passed into the Quiz and Button components through props as needed.
- Creates a variable quizElements which maps an array of question objects and sends its values into the quiz component which will create UI components for each question.

Quiz Component:

- The trivia database is encoded with HTML codes so a function to decode the questions/answers is used.
- A styles variable is created that changes the background color of the answer options depending on the situation. Purple if selected, green if correct, and red if incorrect. Additionally the opacity of the questions are reduced when the quiz is over.
- Created radio buttons for each of the answer choices. Nano ID was used to make id attribute unique.

Button:

- Beneath the questions, a check answers button or an end game prompt will be conditionally rendered depending on the state of checkAnswer.
- Clicking the Check Answers button calls a function from the App component that grades the quiz and changes the state of checkAnswers. checkAnswers is used to determine whether the Check Answers button or the final score should be displayed. 
- The play again button resets the state of all the variables. It increases the value of a state, gameCount, to trigger the useEffect function to pull new trivia questions from the Open Trivia Database.

## Challenges

### Radio Button Confusion

For the id attribute of the answer option radio buttons, I originally used the content of the answer option as a way to identify the button. However, if there were two answers with the same content like two true/false questions, then clicking on true or false would only change the input of the initial true/false question. To fix this I used the Nano ID dependency which creates a random and unique string.

### Shuffling The Answer Choices

The problem that I encountered while attempting to shuffle the answers had to do more with handling the array of objects from the database than actually shuffling the answers, to shuffle the answers I used the Fisher-Yates shuffle algorithm.

Each object of the array from the database contained the question, correct answer, and incorrect answer choices. However, I needed an element that grouped all of the answer choices together in a random manner so that I could use a map function to present the answer choices for each quiz question while still having access to the question, correct answer, and incorrect answers.

My initial solution was inefficient and caused organizational issues. I created an additional state array and put the contents of the trivia database object into it with the addition of a answer choice element. Keeping track of two states at the same time was difficult and trying to shuffle the answer choices in the quiz component was problematic becasue the answer choices would shuffle every time the state was updated.

Long story short, I found a much simpler solution. In my useEffect I fetch the trivia data and process it before setting the state of the trivia data. While processing the data I add a new element to each object that contains the shuffled answer choices for each question.

### Decoding the String Format from the Database

When pulling questions from the trivia database, the API returned an html encoded string. For example the sentence: "Don't forget that π = 3.14 & doesn't equal 3." would be returned as:

`Don&‌#039;t forget that &‌pi; = 3.14 &‌amp; doesn&‌#039;t equal 3.`

In the quiz component I added a function that utilized DOMParser to decode the string.

## Future Improvements

Possible improvements to this project:

- Add a category selection feature so that the user can choose a category of trivia that they prefer.
- Better usage of the Blob Component: The Blob component, which contained features for the page background was only used with the quiz feature. The Welcome Page was hard coded with the same code as the Blob component.
- Add an feature to choose the difficulty of the questions
- Make game compatible for mobile screens

## References

- [Styled Components](https://www.npmjs.com/package/styled-components/v/4.1.3)
- [Nano ID](https://www.npmjs.com/package/nanoid)
- [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)
- [GitHub Pages](https://pages.github.com/)
- [Figma Design File](https://www.figma.com/file/E9S5iPcm10f0RIHK8mCqKL/Quizzical-App?node-id=0%3A1)
