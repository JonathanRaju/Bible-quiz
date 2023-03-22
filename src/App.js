import { useState } from "react";
import Questions from "./Questions";
export default function App() {
  const [showAns, setShowAns] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [disabled, setDisaabled] = useState(false);
  const HandleAns = (i, a) => {
    if (a === i.correct_answer) {
      setCorrect(correct + 1);
    } else {
      setCorrect(correct);
    }
  };
  const checkResults = () => {
    setDisaabled(true);
    setShowAns(true);
  };
  return (
    <div className="App">
      <h1>Bible Quiz</h1>
      {Questions.map((ques, index) => (
        <div key={index}>
          <p>
            {ques.number}.{ques.question}
          </p>
          <p>
            {ques.answers.map((i) => (
              <div style={{ textAlign: "left" }} key={i}>
                <input
                  name={`options${index}`}
                  type="radio"
                  value={i}
                  onChange={() => HandleAns(ques, i)}
                  disabled={disabled}
                  required
                />
                <label
                  style={{
                    color: i === ques.correct_answer && showAns ? "red" : null
                  }}
                >
                  {i}
                </label>
              </div>
            ))}
          </p>
        </div>
      ))}
      {showAns ? (
        <div>
          {" "}
          <p>
            {" "}
            మీ స్కోరు{" "}
            <span style={{ fontWeight: "bolder" }}>
              {correct} / {Questions.length}
            </span>
          </p>
        </div>
      ) : null}
      <button onClick={checkResults}>Check Results</button>
    </div>
  );
}
