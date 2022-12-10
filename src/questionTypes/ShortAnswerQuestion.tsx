import * as React from "react";
import { SAQuestion } from "../App";

type Props = {
  question: SAQuestion;
  setNumberofCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  currentQuestion: number;
  numberOfCorrectAnswers: number;
};

const ShortAnswerQuestion = (props: Props): JSX.Element => {
  const [answer, setAnswer] = React.useState<string>("");
  const mouseOver = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    button.setAttribute(
      "style",
      "background-color: lightgrey; margin: 5px;width: 20%;height: 40px;fontSize: 18px;border-radius: 12px;color: white;color:black"
    );
  };
  const mouseOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    button.setAttribute(
      "style",
      "background-color: #202124; margin: 5px;width: 20%;height: 40px;fontSize: 18px;border-radius: 12px;color: white;color:white"
    );
  };

  return (
    <div
      style={{
        width: 800,
        border: "1px solid black",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#303134",
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <textarea
          style={{ width: "97%", height: 90, fontSize:22,padding:8 }}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 10,
          marginRight: 8,
          flexDirection: "row-reverse",
        }}
      >
        <button
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          style={{
            margin: 5,
            width: "20%",
            height: 40,
            fontSize: 18,
            borderRadius: 12,
            backgroundColor: "#303134",
            color: "white",
          }}
          onClick={() => {
            console.log(props.question.answers);
            let includesAllTerms = true;
            for (const term of props.question.answers) {
              if (!answer.includes(term)) {
                includesAllTerms = false;
              }
            }
            if (includesAllTerms) {
              props.setNumberofCorrectAnswers(props.numberOfCorrectAnswers + 1);
              props.setCurrentQuestion(props.currentQuestion + 1);
            } else {
              props.setCurrentQuestion(props.currentQuestion + 1);
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ShortAnswerQuestion;
