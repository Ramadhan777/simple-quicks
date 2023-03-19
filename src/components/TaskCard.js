import React from "react";

import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import scheduleColor from "../assets/images/schedule_color.svg";
import schedule from "../assets/images/schedule.svg";
import editColor from "../assets/images/edit_color.svg";
import edit from "../assets/images/edit.svg";
import checkBox from "../assets/images/check_box.svg";
import checkedBox from "../assets/images/checked_box.svg";
import saved from "../assets/images/saved.svg";
import savedColor from "../assets/images/savedColor.svg";

const TaskCard = ({ id, date, title, completed, bookmark, desc, openTask, setOpenTask, dayLeft, deleteTask, editTask }) => {
  const [onEdit, setOnEdit] = React.useState(false);
  const [onBookmark, setOnBookmark] = React.useState(false);

  const dataBookmark = [
    {
      id: 1,
      name: "Important ASAP",
      backgroundColor: "bg-[#E5F1FF]",
    },
    {
      id: 2,
      name: "Offline Meeting",
      backgroundColor: "bg-[#FDCFA4]",
    },
    {
      id: 3,
      name: "Virtual Meeting",
      backgroundColor: "bg-[#F9E9C3]",
    },
    {
      id: 4,
      name: "ASAP",
      backgroundColor: "bg-[#AFEBDB]",
    },
    {
      id: 5,
      name: "Client Related",
      backgroundColor: "bg-[#CBF1C2]",
    },
    {
      id: 6,
      name: "Self Task",
      backgroundColor: "bg-[#CFCEF9]",
    },
    {
      id: 7,
      name: "Appointments",
      backgroundColor: "bg-[#F9E0FD]",
    },
    {
      id: 8,
      name: "Court Related",
      backgroundColor: "bg-[#9DD0ED]",
    },
  ];

  const taskOpen = (numTask) => {
    if (openTask.includes(numTask)) {
      return setOpenTask(openTask.filter((task) => task !== numTask));
    }
    setOpenTask([...openTask, numTask]);
  };

  const submitEditTask = (e) => {
    if (e.key === "Enter") {
      editTask(id, e.target.value, date, completed, title, bookmark);
      setOnEdit(false);
    } else {
      e.target.value += e.key;
    }
  };

  const editTitleTaskState = (e) => {
    if (e.key === "Enter") {
      editTask(id, desc, date, completed, e.target.value, bookmark);
    } else {
      e.target.value += e.key;
    }
  };

  return (
    <div className="border-b-[1px] border-[#828282] py-3">
      <div className="flex flex-col min-[420px]:flex-row gap-3 min-[420px]:items-center">
        <div className='flex gap-3'>

        <div>
          {completed ? (
            <img src={checkedBox} onClick={() => title && editTask(id, desc, date, false, title, bookmark)} alt="checkBox" className="hover:cursor-pointer" />
            ) : (
            <img src={checkBox} onClick={() => title && editTask(id, desc, date, true, title, bookmark)} alt="checkBox" className="hover:cursor-pointer" />
          )}
        </div>
        {completed ? (
          <s className="text-sm pl-2 font-bold text-[#828282] min-[425px]:w-[145px] sm:w-[150px] lg:w-[275px]">{title}</s>
        ) : title ? (
          <div className="text-sm pl-2 font-bold text-[#4F4F4F] min-[425px]:w-[145px] sm:w-[150px] lg:w-[275px]">{title}</div>
        ) : (
          <input onKeyPress={editTitleTaskState} className="text-sm pl-2 py-1  text-[#4F4F4F] min-[425px]:w-[145px] sm:w-[150px] lg:w-[275px] border-2 rounded focus:outline-none" placeholder="Type Task Title" />
        )}
            </div>
        <div className='flex gap-3'>

        <div className="hidden sm:block text-sm text-[#EB5757] w-[78px]">{dayLeft >= 1 ? `${`${dayLeft} ${dayLeft === 1 ? "Day" : "Days"} Left`}` : null}</div>
        <div className="text-sm w-[65px]">{date ? new Date(date).toLocaleDateString("id-ID") : null}</div>
        {openTask.includes(id) ? <BiChevronUp onClick={() => taskOpen(id)} className="hover:cursor-pointer" /> : <BiChevronDown onClick={() => taskOpen(id)} className="hover:cursor-pointer" />}
        <div className="group relative">
          <div className="mt-[-10px] text-lg text-[#828282]  hover:cursor-default">...</div>

          <div onClick={() => deleteTask(id)} className="hidden group-hover:block absolute right-0 w-[100px] bg-white border-[1px] border-[#BDBDBD] rounded z-10">
            <div className="px-2 py-1 text-[#EB5757] hover:cursor-pointer">Delete</div>
          </div>
        </div>
        </div>
      </div>

      {openTask.includes(id) && (
        <div className="flex flex-col gap-3 ml-2 sm:ml-6 mt-2">
          <div className="flex items-center gap-3 ml-2">
            <label for="date">{date ? <img src={scheduleColor} className="w-5 hover:cursor-pointer" alt="schedule" /> : <img src={schedule} className="w-5 hover:cursor-pointer" alt="schedule" />}</label>
            <div>
              <input
                defaultValue={
                  date
                    ? `${new Date(date).getYear() + 1900}-${new Date(date).getMonth().toString().length === 1 ? `0${new Date(date).getMonth() + 1}` : `${new Date(date).getMonth() + 1}`}-${
                        new Date(date).getDate().toString().length === 1 ? `0${new Date(date).getDate()}` : `${new Date(date).getDate()}`
                      }`
                    : null
                }
                onChange={(e) => {editTask(id, desc, new Date(e.target.value), completed, title, bookmark)
               }}
                type="date"
                name="date"
                id="date"
                className="border-[1px] border-[#828282] rounded py-1 px-3"
              />
            </div>
          </div>

          <div className="flex items-start gap-3 ml-2">
            <div onClick={() => setOnEdit(!onEdit)}>{desc ? <img src={editColor} className="w-4 hover:cursor-pointer" alt="edit" /> : <img src={edit} className="w-4 hover:cursor-pointer" alt="edit" />}</div>

            {onEdit ? (
              <form>
                <textarea onKeyPress={submitEditTask} defaultValue={desc} className="text-sm pl-2 py-1 ml-1 w-[300px] sm:w-[450px] h-[40px] border-[1px] border-[#828282] rounded" type="text" />
                <button type="submit"></button>
              </form>
            ) : (
              <div className="text-sm pl-1 w-[300px] sm:w-[450px]">{desc ? desc : "No description"}</div>
            )}
          </div>

          <div className="flex items-start gap-3 bg-[#F9F9F9] px-2 py-2 relative">
            <div onClick={() => setOnBookmark(!onBookmark)}>
              {bookmark.length > 0 ? 
              <img src={savedColor} className="w-5 h-5 hover:cursor-pointer" alt="edit" /> :
              <img src={saved} className="w-5 h-5 hover:cursor-pointer" alt="edit" /> 
              }
            </div>
            {onBookmark && (
              <div className="bg-white border-[1px] border-[#828282] p-2 flex flex-col gap-2 rounded  w-[230px] absolute top-[30px] z-20">
                {dataBookmark.map((data, i) => (
                  <div
                    onClick={() => editTask(id, desc, date, completed, title, data.id)}
                    key={i}
                    className={`hover:cursor-pointer w-full rounded py-1 pl-4 text-xs text-[#4F4F4F] font-bold ${data.backgroundColor} ${bookmark.includes(data.id) && 'border-[1px] border-[#2F80ED]'}`}
                  >
                    {data.name}
                  </div>
                ))}
              </div>
            )}
            <div className="flex gap-2 flex-wrap max-w-[500px]">
              {bookmark.length > 0 && bookmark.map((bookmark, i) => (
                // eslint-disable-next-line array-callback-return
                dataBookmark.map((dataBookmark, j) => {
                  if (bookmark === dataBookmark.id) {
                    return (
                      <div key={i} className={`hover:cursor-pointer rounded py-2 px-2 text-xs text-[#4F4F4F] font-bold ${dataBookmark.backgroundColor}`}>
                      {dataBookmark.name}
                      </div>
                      );
                    }
                    
                  })
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
