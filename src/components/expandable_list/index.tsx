import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IManager } from "../../interface/IManager";
import { IEmployee } from "../../interface/IEmployee";
import ListComponent from "../list";
import { employeesData } from "../../api/mock_data/employees";
import AddEmployeeComponent from "../add_employee";
import { useEmployeeContext } from "../../context/employee_context";

export default function ExpandableListComponent({
  id,
  full_name,
  image,
}: IManager) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const { employees, setEmployees } = useEmployeeContext();

  const removeEmployee = (id: number) => {
    setEmployees([...employees.filter((x: IEmployee) => x.id !== id)]);
  };

  return (
    <div>
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-darkgray border border-b-0 border-gray focus:ring-4 focus:ring-gray gap-3 rounded-md"
          onClick={() => {
            setExpanded((prev: boolean) => !prev);
          }}
        >
          <span>{full_name}</span>

          <span>{expanded ? <FaChevronUp /> : <FaChevronDown />}</span>
        </button>
      </h2>

      {expanded && (
        <div className="flex flex-col gap-4 container m-auto p-4">
          <div className="">Employees</div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-center">
              <ul className="w-full divide-y divide-gray 0">
                {employees
                  .filter((x: IEmployee) => x.manager_id === id)
                  .map((x: IEmployee, i: number) => (
                    <ListComponent
                      key={x.id}
                      {...{
                        employee: x,
                        onRemoveEmployee: () => {
                          removeEmployee(x.id);
                        },
                      }}
                    />
                  ))}
              </ul>
            </div>

            <div className="">
              <AddEmployeeComponent managerId={id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
