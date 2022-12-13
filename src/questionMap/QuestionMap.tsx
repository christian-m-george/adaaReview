import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

type Props = { answers: string[] };

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
      {props.answers.map((answer) => {
        if (answer === "correct") {
          return (
            <div style={{ padding: 6 }}>
              <FontAwesomeIcon icon={faCheck} color={"green"}></FontAwesomeIcon>
            </div>
          );
        } else if (answer === "wrong") {
          return (
            <div style={{ padding: 6 }}>
              <FontAwesomeIcon icon={faXmark} color={"red"}></FontAwesomeIcon>
            </div>
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
