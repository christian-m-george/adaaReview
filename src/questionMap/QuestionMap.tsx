import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  answers: string[];
  setQuestion: React.Dispatch<React.SetStateAction<number>>;
};

const QuestionMap = (props: Props): JSX.Element => {
  return (
    <div
      style={{
        position: "absolute",
        top: 200,
        left: 60,
        display: "flex",
        width: 320,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#5b5b5b",
        padding: 10,
        justifyContent: "left",
        borderRadius: 10,
        border: "1px solid grey",
      }}
    >
      {props.answers.map((answer, i) => {
        if (answer === "correct") {
          return (
            <button
              style={{ padding: 6 }}
              onClick={() => {
                props.setQuestion(i);
              }}
            >
              <FontAwesomeIcon icon={faCheck} color={"green"}></FontAwesomeIcon>
            </button>
          );
        } else if (answer === "wrong") {
          return (
            <button
              style={{ padding: 6 }}
              onClick={() => {
                props.setQuestion(i);
              }}
            >
              <FontAwesomeIcon icon={faXmark} color={"red"}></FontAwesomeIcon>
            </button>
          );
        } else {
          return (
            <div style={{ padding: 6 }}>
              <FontAwesomeIcon
                icon={faQuestion}
                color={"white"}
              ></FontAwesomeIcon>
            </div>
          );
        }
      })}
    </div>
  );
};

export default QuestionMap;
