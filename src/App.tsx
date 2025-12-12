import { useState } from "react";
import Welcome from "./pages/Welcome";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  const [step, setStep] = useState<"welcome" | "quiz" | "result">("welcome");
  const [score, setScore] = useState(0);

  if (step === "welcome")
    return <Welcome onStart={() => setStep("quiz")} />;

  if (step === "quiz")
    return <Quiz onFinish={(s) => { setScore(s); setStep("result"); }} />;

  return <Result score={score} />;
}

export default App;
