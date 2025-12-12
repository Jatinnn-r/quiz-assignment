import { useState } from "react";
import { questions } from "../utils/questions";

export default function Quiz({ onFinish }: { onFinish: (score: number) => void }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const q = questions[index];

  const handleNext = () => {
    let score = selected === q.answer ? 1 : 0;
    onFinish(score);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e7f4fa]">
      <div className="w-[450px] bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-2xl font-serif mb-6 text-[#164863]">
          Test Your Knowledge
        </h2>

        <p className="mb-4">{q.question}</p>

        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className={`border p-2 rounded cursor-pointer hover:bg-blue-100 ${selected === i ? "bg-blue-200" : ""}`}
            >
              {opt}
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="mt-6 w-full bg-[#ff6b6b] text-white py-2 rounded hover:bg-[#e15c5c] transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
