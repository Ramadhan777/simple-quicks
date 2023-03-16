import task from "../assets/images/task.svg";

const Task = (props) => {
  return (
    <div className="flex flex-col items-center gap-2" onClick={() => props.setAction(props.purposeAction)}>
      {props.desc && <div className="text-sm">{props.desc}</div>}
      <button className={`flex justify-center items-center ${props.bg ? props.bg : 'bg-white'} h-[50px] w-[50px] rounded-full z-10`}>
        <img src={props.image} alt="task"/>
      </button>
    </div>
  );
};

export default Task;
