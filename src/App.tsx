import React from "react";
import questions from "./questions/questions.json";
import MultipleChoiceQuestion from "./questionTypes/MultipleChoiceQuestion";
import ShortAnswerQuestion from "./questionTypes/ShortAnswerQuestion";

export type Question = {
  type: string;
  question: string;
};

export type MCAnswer = {
  text: string;
  correct: boolean;
};

export interface MCQuestion extends Question {
  answers: MCAnswer[];
}

export interface SAQuestion extends Question {
  answers: string[];
}

export enum QuestionType {
  MultipleChoice = "mc",
  ShortAnswer = "sa",
}

const App = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] =
    React.useState<number>(0);

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const quizQuestions: Question[] = shuffleArray([...questions.questions]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#202124",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 150,
          backgroundColor: "#303134",
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          padding: 40,
        }}
      >
        <h1 style={{ color: "white" }}>ADAA Review</h1>
        {currentQuestion !== 0 ? (
          <h1 style={{ color: "white" }}>
            Questions Correct: {numberOfCorrectAnswers + `/${currentQuestion}`}
          </h1>
        ) : null}
      </div>
      {quizQuestions[currentQuestion].type === QuestionType.MultipleChoice ? (
        <MultipleChoiceQuestion
          setNumberofCorrectAnswers={setNumberOfCorrectAnswers}
          setCurrentQuestion={setCurrentQuestion}
          question={quizQuestions[currentQuestion] as MCQuestion}
          currentQuestion={currentQuestion}
          numberOfCorrectAnswers={numberOfCorrectAnswers}
        />
      ) : (
        <ShortAnswerQuestion
          setNumberofCorrectAnswers={setNumberOfCorrectAnswers}
          setCurrentQuestion={setCurrentQuestion}
          question={quizQuestions[currentQuestion] as SAQuestion}
          currentQuestion={currentQuestion}
          numberOfCorrectAnswers={numberOfCorrectAnswers}
        />
      )}
    </div>
  );
};

export default App;
