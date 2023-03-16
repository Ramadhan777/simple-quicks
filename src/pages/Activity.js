import React from "react";
import Button from "../components/Button";
import Inbox from "../components/Inbox";
import Task from "../components/Task";

import { AiOutlineSearch } from "react-icons/ai";
import shape from "../assets/images/shape.svg";
import task from "../assets/images/task.svg";
import taskWhite from "../assets/images/task-white.svg";
import inbox from "../assets/images/inbox.svg";
import inboxWhite from "../assets/images/inbox-white.svg";

const Activity = () => {
  const [action, setAction] = React.useState("");

  return (
    <div className="h-screen w-screen bg-[#262626] flex justify-end">
      <div className="w-[85%] text-white h-full border-l-[1px] border-white">
        <div className="bg-[#4F4F4F] h-[60px] flex items-center px-7">
          <label for="search" className="hover:cursor-pointer">
            <AiOutlineSearch className="text-2xl" />
          </label>
          <input name="search" id="search" type="text" className="w-full bg-[#4F4F4F] focus:outline-none ml-2" />
        </div>

        <div className="h-[570px] flex justify-end items-end pr-7 gap-5">
          {action === "active" ? (
            <>
              <Button desc="Task" image={task} setAction={setAction} purposeAction="task" />
              <Button desc="Inbox" image={inbox} setAction={setAction} purposeAction="inbox" />
            </>
          ) : null}

          {action === "inbox" || action === "task" ? null : <Button image={shape} bg="bg-blue-400" setAction={setAction} purposeAction={action ? "" : "active"} />}

          {action === "inbox" ? (
            <div className="flex w-full flex-col justify-end items-end gap-3">
              <Inbox setAction={setAction} />
              <div className="relative flex gap-6">
                <Button image={task} setAction={setAction} purposeAction="task" />
                <div className={`bg-[#4F4F4F] h-[50px] w-[50px] rounded-full absolute right-3`}></div>
                <Button image={inboxWhite} bg="bg-indigo-500" setAction={setAction} purposeAction="inbox" />
              </div>
            </div>
          ) : null}

          {action === "task" ? (
            <div className="flex w-full flex-col justify-end items-end gap-3">
              <Task />
              <div className="relative flex gap-6">
                <Button image={inbox} setAction={setAction} purposeAction="inbox" />
                <div className={`bg-[#4F4F4F] h-[50px] w-[50px] rounded-full absolute right-3`}></div>
                <Button image={taskWhite} bg="bg-orange-300" setAction={setAction} purposeAction="task" />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Activity;
