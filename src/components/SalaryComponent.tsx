import { useState } from "react";

const SalaryComponent = () => {
  const [salary, setSalary] = useState<number>(50000);
  const [isFiler, setIsFiler] = useState<boolean>(false);

  const handleToggle = () => {
    setIsFiler((prev) => {
      const newFiler = !prev;
      setSalary((prevSalary) =>
        prevSalary >= 50000
          ? newFiler
            ? prevSalary - prevSalary * 0.1 
            : prevSalary - prevSalary * 0.2 
          : prevSalary
      );
      return newFiler;
    });
  };

  return (
    <div className="bg-white p-6 shadow-lg w-80 rounded-2xl text-center mx-auto mt-10">
      <h1 className="font-bold text-2xl mb-6">
        Salary: {salary.toFixed(0)}
      </h1>

      
      <div
        onClick={handleToggle}
        className={`w-20 h-10 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
          isFiler ? "bg-green-500" : "bg-red-500"
        }`}
      >
        <div
          className={`bg-white w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 ${
            isFiler ? "translate-x-10" : "translate-x-1"
          }`}
        />
      </div>
    </div>
  );
};

export default SalaryComponent;
