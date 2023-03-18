import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addTaskList } from "../redux/reducers/task";

import TaskCard from "./TaskCard";
import Loading from "../components/Loading";
import Dropdown from "./Dropdown";

const Task = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(true);
  const [openTask, setOpenTask] = React.useState([]);
  const [dataTaskAPI, setDataTaskAPI] = React.useState([]);
  const taskList = useSelector((state) => state.task.list);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) =>
      setDataTaskAPI([
        {
          ...res.data[0],
          desc: "Tiga data awal ini adalah data yang saya ambil dari API yang telah disediakan, tetapi untuk sisa dari task yang akan dibuat saya menggunakan redux untuk menyimpan datanya.",
          date: new Date("03-25-2023"),
          bookmark: [],
        },
        {
          ...res.data[1],
          desc: "Tiga data awal ini adalah data yang saya ambil dari API yang telah disediakan, tetapi untuk sisa dari task yang akan dibuat saya menggunakan redux untuk menyimpan datanya.",
          date: new Date("03-25-2023"),
          bookmark: [],
        },
        {
          ...res.data[2],
          desc: "Tiga data awal ini adalah data yang saya ambil dari API yang telah disediakan, tetapi untuk sisa dari task yang akan dibuat saya menggunakan redux untuk menyimpan datanya.",
          date: new Date("03-25-2023"),
          bookmark: [],
        },
      ])
    );
  }, []);

  const addTask = () => {
    const list = {
      id: new Date(),
      title: "",
      desc: "",
      date: null,
      completed: false,
      bookmark: [],
    };

    dispatch(addTaskList([...taskList, list]));
  };

  const editTaskState = (id, desc, date, completed, title, bookmarkId) => {
    dispatch(
      addTaskList(
        taskList.map((task) => {
          if (task.id === id) {
            if(!task.bookmark.includes(bookmarkId)){
              if(typeof bookmarkId === 'number'){
                return {
                  id,
                  title,
                  desc,
                  date,
                  completed,
                  bookmark: [...task.bookmark, bookmarkId],
                };
              } else {
                return {
                  id,
                  title,
                  desc,
                  date,
                  completed,
                  bookmark: [...task.bookmark],
                }
              }
            } else {
              return {
                id,
                title,
                desc,
                date,
                completed,
                bookmark: task.bookmark
              };
            }
          } else {
            return task;
          }
        })
      )
    );
  };

  const deleteTaskState = (id) => {
    dispatch(addTaskList(taskList.filter((task) => task.id !== id)));
  };

  const deleteTask = (id) => {
    setDataTaskAPI(dataTaskAPI.filter((task) => task.id !== id));
  };

  const editTask = (id, desc, date, completed, title, bookmarkId) => {
    setDataTaskAPI(
      // eslint-disable-next-line array-callback-return
      dataTaskAPI.map((task) => {
        if (task.id === id) {
          if(!task.bookmark.includes(bookmarkId)){
            if(typeof bookmarkId === 'number'){
              return {
                id,
              title,
              desc,
              date,
              completed,
              bookmark: [...task.bookmark, bookmarkId],
            };
          }
          } else {
            return {
              id,
              title,
              desc,
              date,
              completed,
              bookmark: task.bookmark
            };
          }
        } else {
          return task;
        }
      }
      )
    );
  };

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <>
      <div className="w-[50%] h-[450px] bg-white rounded-md text-black">
        <div className="flex items-center px-4 mt-3 className='text-sm' ">
          <div className="flex flex-grow relative">
            <Dropdown />
          </div>
          <div>
            <button onClick={() => addTask()} className="bg-[#2F80ED] px-3 py-2 text-white rounded text-sm">
              New Task
            </button>
          </div>
        </div>

        <div className="w-full h-[400px] flex text-black gap-2 px-5 pb-3 overflow-y-auto">
          {loading ? (
            <Loading desc="Loading Task List ..." />
          ) : (
            <div className="flex flex-col">
              {dataTaskAPI.map((task, i) => (
                <TaskCard
                  id={task.id}
                  date={task.date}
                  title={task.title}
                  completed={task.completed}
                  bookmark={task.bookmark}
                  desc={task.desc}
                  key={i}
                  openTask={openTask}
                  setOpenTask={setOpenTask}
                  dayLeft={task.date.getDate() - new Date().getDate()}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
              ))}

              {taskList?.map((task, i) => (
                <TaskCard
                  id={task.id}
                  date={task.date}
                  title={task.title}
                  completed={task.completed}
                  bookmark={task.bookmark}
                  desc={task.desc}
                  key={i}
                  openTask={openTask}
                  setOpenTask={setOpenTask}
                  dayLeft={task.date ? task.date.getDate() - new Date().getDate() : 0}
                  deleteTask={deleteTaskState}
                  editTask={editTaskState}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Task;
