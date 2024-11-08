import React, { Dispatch, useState } from "react";
import { IEmployee } from "../interface/IEmployee";
import { employeesData } from "../api/mock_data/employees";

const initialState = {
  employees: employeesData,
  setEmployees: () => {},
};

interface IEmployeeContext {
  employees: IEmployee[];
  setEmployees: Dispatch<React.SetStateAction<IEmployee[]>>;
}

const employeeContext = React.createContext<IEmployeeContext>(initialState);

const EmployeeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [employees, setEmployees] = useState<IEmployee[]>(
    initialState.employees
  );

  return (
    <employeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </employeeContext.Provider>
  );
};

// hook for using context
export const useEmployeeContext = () => React.useContext(employeeContext);

export default EmployeeContextProvider;
