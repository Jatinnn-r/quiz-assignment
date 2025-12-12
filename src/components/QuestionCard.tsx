import React from "react";

interface Props {
  question: string;
  options: string[];
  onSelect: (option: string) => void;
}

const QuestionCard: React.FC<Props> = ({ question, options, onSelect }) => {
  return (
    <div>
      <h2>{question}</h2>
      {options.map((opt, index) => (
        <button key={index} onClick={() => onSelect(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;

export {};
