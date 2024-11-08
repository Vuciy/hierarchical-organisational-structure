import React from "react";
import { FaTrash } from "react-icons/fa";
import { IEmployee } from "../../interface/IEmployee";

interface IListProps {
  employee: IEmployee;
  onRemoveEmployee: () => void;
}

export default function ListComponent({
  employee,
  onRemoveEmployee,
}: IListProps) {
  const { image, full_name, email, role } = employee;
  return (
    <li className="pb-3 sm:pb-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={image ?? "https://picsum.photos/200/300"}
            alt=""
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium ">{full_name}</p>
          <p className="text-sm text-darkgray truncate">{email}</p>
          <p className="text-sm text-darkgray truncate">{role}</p>
        </div>
        <div className="inline-flex items-center text-base font-semibold ">
          <div className="flex gap-4">
            <span onClick={onRemoveEmployee}>
              <FaTrash />
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
