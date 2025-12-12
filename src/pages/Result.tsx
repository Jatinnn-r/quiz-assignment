export default function Result({ score }: { score: number }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#e7f4fa]">
        <div className="text-center">
          <p className="text-lg">Your final score is</p>
          <h1 className="text-6xl font-bold text-[#164863] mt-4">{score}</h1>
  
          <button
            onClick={() => window.location.reload()}
            className="mt-6 bg-[#164863] px-6 py-2 text-white rounded hover:bg-[#0f3348]"
          >
            Restart
          </button>
        </div>
      </div>
    );
  }
  