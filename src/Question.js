import React, { useState } from "react";

const Question = ({ element }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="accordion-element">
      <div className="question-container">
        <h2>{element.title}</h2>
        <div
          className="button-background"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "-" : "+"}
        </div>
      </div>
      {isVisible && <p>{element.info}</p>}
    </div>
  );
};

export default Question;
