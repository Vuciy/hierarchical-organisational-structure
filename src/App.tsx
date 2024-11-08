import React, { useEffect, useState } from "react";
import ListComponent from "./components/list";
import { IEmployee } from "./interface/IEmployee";
import { employeesData } from "./api/mock_data/employees";
import { managersData } from "./api/mock_data/managers";
import { IManager } from "./interface/IManager";
import ExpandableListComponent from "./components/expandable_list";
import EmpployeeContextProvider from "./context/employee_context";
function App() {
  const [managers, setManagers] = useState<IManager[]>([]);

  useEffect(() => {
    if (managersData && managersData.length > 0) {
      setManagers(managersData);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 container m-auto">
      <h1 className="text-center text-3xl">
        Hierarchical Organisational Structure
      </h1>
      <div className="flex flex-col gap-4 p-4 shadow-md rounded-md">
        <h4>Managers</h4>
        <EmpployeeContextProvider>
          <div>
            {managers.map((manager: IManager) => (
              <ExpandableListComponent {...manager} />
            ))}
          </div>
        </EmpployeeContextProvider>
      </div>
    </div>
  );
}

export default App;
