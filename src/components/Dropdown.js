import React from "react";
import { BiChevronDown } from "react-icons/bi";

const Dropdown = () => {
  const [taskToggle, setTaskToggle] = React.useState("");
  const [taskType, setTaskType] = React.useState("My Task");

  return (
    <div className="group border-[1px] border-black flex py-1 px-2 gap-2 text-sm items-center rounded hover:cursor-pointer ml-16" onClick={() => setTaskToggle(!taskToggle)}>
      <div className="text-[#4F4F4F]">{taskType}</div>
      <BiChevronDown />
      {taskToggle && (
        <div className="flex-col absolute left-0 top-9 w-[230px] z-10 border-[1px] border-black rounded bg-white">
          <div className="border-b-[1px] border-black flex py-1 px-2 gap-2 text-sm items-center hover:cursor-pointer" onClick={() => setTaskType("Personal Errands")}>
            Personal Errands
          </div>
          <div className="flex py-1 px-2 gap-2 text-sm items-center hover:cursor-pointer" onClick={() => setTaskType("Urgent To-Do")}>
            Urgent To-Do
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown