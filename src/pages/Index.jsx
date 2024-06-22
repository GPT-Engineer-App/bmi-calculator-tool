import { useState } from "react";

const Index = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      setError("Please enter both weight and height.");
      return;
    }

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum)) {
      setError("Please enter valid numbers for weight and height.");
      return;
    }

    const bmiValue = (weightNum / (heightNum * heightNum)).toFixed(2);
    setBmi(bmiValue);
    setError("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">BMI Calculator</h1>
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Enter weight in kg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type="number"
        />
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Enter height in meters"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          type="number"
        />
        <button
          className="w-full p-2 mb-4 bg-teal-500 text-white rounded hover:bg-teal-600"
          onClick={calculateBMI}
        >
          Calculate BMI
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {bmi && (
          <div className="mt-4 p-4 border border-gray-300 rounded text-center">
            <p className="text-xl">Your BMI is: {bmi}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;