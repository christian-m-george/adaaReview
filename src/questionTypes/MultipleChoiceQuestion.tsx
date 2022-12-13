import * as React from "react";
import { MCQuestion } from "../App";

type Props = {
  question: MCQuestion;
  setNumberofCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  currentQuestion: number;
  numberOfCorrectAnswers: number;
  answers: string[];
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
};

const MultipleChoiceQuestion = (props: Props): JSX.Element => {
  const mouseOver = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    button.setAttribute(
      "style",
      "background-color: lightgrey; margin: 5px;width: 20%;height: 40px;fontSize: .8em;border-radius: 12px;color: white;color:black"
    );
  };
  const mouseOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    button.setAttribute(
      "style",
      "background-color: #202124; margin: 5px;width: 20%;height: 40px;fontSize: .8em;border-radius: 12px;color: white;color:white"
    );
  };
  return (
    <div
      style={{
        width: 800,
        // border: "1px solid black",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#303134",
        boxShadow: "2px white",
      }}
    >
      <div
        style={{
          textAlign: "left",
          marginLeft: 10,
          marginBottom: 30,
          color: "white",
          fontSize: 30,
        }}
      >
        {props.question.question}
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        {props.question.answers.map((sq, i) => {
          return (
            <button
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
              key={i}
              style={{
                margin: 5,
                width: "20%",
                height: 40,
                fontSize: ".8em",
                borderRadius: 12,
                backgroundColor: "#202124",
                color: "white",
              }}
              onClick={() => {
                if (sq.correct) {
                  const newAnswerArray = props.answers;
                  newAnswerArray[props.currentQuestion] = 'correct'
                  props.setAnswers(newAnswerArray)
                  props.setNumberofCorrectAnswers(
                    props.numberOfCorrectAnswers + 1
                  );
                  props.setCurrentQuestion(props.currentQuestion + 1);
                } else {
                  const newAnswerArray = props.answers;
                  newAnswerArray[props.currentQuestion] = 'wrong'
                  props.setAnswers(newAnswerArray)
                  props.setCurrentQuestion(props.currentQuestion + 1);
                }
              }}
            >
              {sq.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MultipleChoiceQuestion;
