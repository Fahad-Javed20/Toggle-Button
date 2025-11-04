interface SalaryComponentProps {
    isFiler:boolean;
}

import { useState } from "react";

const SalaryComponent = ({isFiler}:SalaryComponentProps) => {

    const [salary,setSalary] = useState<number>(50000)

    const handelSalary = (num:number)=>{
        if(num>=50000){
            setSalary((prev)=> prev-(0.2*prev))
        }
        else{
            setSalary((prev)=> prev)
        }
    }
  return (
    <div className="bg-white h-1/3 shadow-lg/30 w-1/4">
      <h1 className="font-bold text-2xl">Salary: {salary}</h1>
      <button onClick={()=>{handelSalary(salary)}} className="bg-blue-600 text-white font-semibold px-4 py-1 rounded-xl my-6">Is Filer</button>
    </div>
  );
};

export default SalaryComponent;
