import React from "react";
import QuestionMap from "./questionMap/QuestionMap";
import questions from "./questions/questions.json";
import MultipleChoiceQuestion from "./questionTypes/MultipleChoiceQuestion";
import ShortAnswerQuestion from "./questionTypes/ShortAnswerQuestion";
import { shuffleArray } from "./utils/shuffle";

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
  const [shuffle, setShuffle] = React.useState<boolean>(false);
  const quizQuestions: Question[] = React.useMemo(() => {
    return shuffleArray([...questions.questions]);
  }, [shuffle]);
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] =
    React.useState<number>(0);
  const [answers, setAnswers] = React.useState<string[]>(
    new Array(quizQuestions.length).fill("")
  );

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
      <QuestionMap
        answers={answers}
        setQuestion={setCurrentQuestion}
      ></QuestionMap>
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
            Questions Correct:{" "}
            {answers.filter((answer) => {
              return answer === "correct";
            }).length + `/${quizQuestions.length}`}
          </h1>
        ) : null}
      </div>
      {currentQuestion === quizQuestions.length ? (
        <button
          onClick={() => {
            setShuffle(!shuffle);
            setCurrentQuestion(0);
            setAnswers(new Array(quizQuestions.length).fill(""));
          }}
        >
          Click here to start over
        </button>
      ) : quizQuestions[currentQuestion].type ===
        QuestionType.MultipleChoice ? (
        <MultipleChoiceQuestion
          setNumberofCorrectAnswers={setNumberOfCorrectAnswers}
          setCurrentQuestion={setCurrentQuestion}
          question={quizQuestions[currentQuestion] as MCQuestion}
          currentQuestion={currentQuestion}
          numberOfCorrectAnswers={numberOfCorrectAnswers}
          answers={answers}
          setAnswers={setAnswers}
        />
      ) : (
        <ShortAnswerQuestion
          setNumberofCorrectAnswers={setNumberOfCorrectAnswers}
          setCurrentQuestion={setCurrentQuestion}
          question={quizQuestions[currentQuestion] as SAQuestion}
          currentQuestion={currentQuestion}
          numberOfCorrectAnswers={numberOfCorrectAnswers}
          answers={answers}
          setAnswers={setAnswers}
        />
      )}
      <div
        style={{
          bottom: 30,
          position: "absolute",
          width: "50%",
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{ width: 150, height: 80, margin: 20, borderRadius: 10 }}
          disabled={currentQuestion === 0}
          onClick={() => {
            setCurrentQuestion(currentQuestion - 1);
          }}
        >
          Previous Question
        </button>
        <button
          style={{ width: 150, height: 80, margin: 20, borderRadius: 10 }}
          disabled={currentQuestion === quizQuestions.length - 1}
          onClick={() => {
            setCurrentQuestion(currentQuestion + 1);
          }}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default App;
