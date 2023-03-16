import React from "react";
import Loading from "../components/Loading";

import { BiChevronDown } from "react-icons/bi";

const Task = () => {
  const [loading, setLoading] = React.useState(true);
  const [taskToggle, setTaskToggle] = React.useState(false);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <>
      <div className="w-[50%] h-[450px] bg-white rounded-md text-black">
        <div className="flex items-center px-4 mt-3 ">
          <div className="flex flex-grow relative">
           
            <div tabIndex={0} className="group border-[1px] border-black flex py-1 px-2 gap-2 text-sm items-center rounded hover:cursor-pointer ml-16" onClick={() => setTaskToggle(!taskToggle)}>
              <div>My Task</div>
              <BiChevronDown />
              {taskToggle && <div className="flex-col absolute left-0 top-9 w-[230px] z-10 border-[1px] border-black rounded">
                <div className="border-b-[1px] border-black flex py-1 px-2 gap-2 text-sm items-center hover:cursor-pointer">Personal Errands</div>
                <div className="flex py-1 px-2 gap-2 text-sm items-center hover:cursor-pointer">Urgent To-Do</div>
              </div>}
            </div>
          </div>
          <div>
            <button className="bg-[#2F80ED] px-3 py-2 text-white rounded text-sm">New Task</button>
          </div>
        </div>

        <div className="w-full h-[400px] mt-5 flex text-black gap-2 px-4">{loading ? <Loading desc='Loading Task List ...'/> : null}</div>
      </div>
    </>
  );
};

export default Task;
