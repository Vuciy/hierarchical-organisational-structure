import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { rolesData } from "../../api/mock_data/roles";
import { IRole } from "../../interface/IRole";
import { useEmployeeContext } from "../../context/employee_context";

export default function AddEmployeeComponent({
  managerId,
}: {
  managerId: number;
}) {
  const { employees, setEmployees } = useEmployeeContext();
  const [role, setRole] = useState<IRole | null>(null);
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");

  const random_number = Math.floor(Math.random() * 9999) + 1;

  const addEmployee = () => {
    if (!role) {
      alert("Please select employee role");
      return;
    }

    if (!employeeName) {
      alert("Please enter employee name");
      return;
    }

    if (!employeeEmail) {
      alert("Please enter employeee  email");
      return;
    }
    const _employee = {
      role: role.role,
      id: random_number,
      email: employeeEmail,
      image: null,
      full_name: employeeName,
      manager_id: managerId,
    };

    console.log(_employee);
    setEmployees([...employees, _employee]);
  };

  return (
    <div className="flex items-center  mx-auto">
      <div className="flex items-center gap-2 ps-3 m-auto">
        <div className="border border-gray rounded-md">
          <select
            className="border-none active:border-none focus:border-none p-2"
            value={role?.id}
            onChange={(e) => {
              const _id = Number(e.target.value);
              const _selecteRole = rolesData.find(
                (role: IRole) => role.id === _id
              );

              if (_selecteRole) setRole(_selecteRole);
            }}
          >
            <option>Select Role</option>
            {rolesData.map((role: IRole) => (
              <option key={role.id} value={role.id}>
                {role.role}
              </option>
            ))}
          </select>
        </div>
        <div className="border border-gray rounded-md">
          <input
            value={employeeName}
            onChange={(e) => {
              setEmployeeName(e.target.value);
            }}
            type="text"
            className="border-none active:border-none text-darkgray text-sm focus:border-none block w-full  p-2.5"
            placeholder="Employee Full Name"
          />
        </div>
        <div className="border border-gray rounded-md">
          <input
            value={employeeEmail}
            onChange={(e) => {
              setEmployeeEmail(e.target.value);
            }}
            type="text"
            className="border-none active:border-none text-darkgray text-sm focus:border-none block w-full  p-2.5"
            placeholder="Employee email"
          />
        </div>
        <button
          onClick={addEmployee}
          className="p-2.5 ms-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
