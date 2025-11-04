import { useState } from "react";

const SalaryComponent = () => {
  const [salary, setSalary] = useState<number>(50000);
  const [isFiler, setIsFiler] = useState<boolean>(false);

  const handleToggleFiler = () => {
    setIsFiler((prev) => !prev);
  };

  const handleSalary = () => {
    if (isFiler) {
      // Deduct 10% if filer
      setSalary((prev) => prev>=50000? prev - prev * 0.1:prev);
    } else {
      // Deduct 20% if not filer
      setSalary((prev) =>prev>=50000? prev - prev * 0.2:prev);
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg w-1/3 rounded-xl text-center">
      <h1 className="font-bold text-2xl mb-4">Salary: {salary.toFixed(0)}</h1>
      <button
        onClick={handleToggleFiler}
        className={`px-4 py-2 rounded-xl font-semibold ${
          isFiler ? "bg-green-600 text-white" : "bg-red-600 text-white"
        }`}
      >
        {isFiler ? "Filer ✅" : "Non-Filer ❌"}
      </button>

      <button
        onClick={handleSalary}
        className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-xl my-6 block mx-auto"
      >
        Deduct Tax
      </button>
    </div>
  );
};

export default SalaryComponent;
