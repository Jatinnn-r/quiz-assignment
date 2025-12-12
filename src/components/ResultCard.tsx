import React from "react";

interface Props {
  score: number;
  total: number;
}

const ResultCard: React.FC<Props> = ({ score, total }) => {
  return (
    <div>
      <h2>Your Score: {score} / {total}</h2>
    </div>
  );
};

export default ResultCard;

// This makes the file a module for TypeScript
export {};
