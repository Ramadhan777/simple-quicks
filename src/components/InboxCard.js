import React from "react";

const InboxCard = ({ image1, image2, image3, name, desc, subname, date, setInboxState, inboxState, setLoading }) => {
  return (
    <div
      className="flex w-full gap-5 pb-4 border-b-[1px] border-black hover:cursor-pointer"
      onClick={() => {
        setInboxState(inboxState);
        if (setLoading) {
          setLoading(true);
        }
      }}
    >
      {image3 ? (
        <div className="flex relative w-[40px] justify-center items-center">
          <div className="w-[30px] h-[30px] bg-[#2F80ED] rounded-full flex justify-center items-center text-white">{image3}</div>
        </div>
      ) : (
        <div className="flex relative w-[40px]">
          <div className="w-[30px] h-[30px] bg-[#E0E0E0] rounded-full flex justify-center items-center">
            <img src={image1} alt="" />
          </div>
          <div className="w-[30px] h-[30px] bg-[#2F80ED] rounded-full flex justify-center items-center absolute left-4">
            <img src={image2} alt="" />
          </div>
        </div>
      )}

      <div className="flex flex-col">
        <div className="text-[#2F80ED] text-sm font-bold max-w-[300px]">{name}</div>
        {subname && <div className="text-sm text-[#4F4F4F] font-bold">{subname}</div>}
        <div className="text-sm text-[#4F4F4F]">{desc}</div>
      </div>

      <div>
        <div className="text-sm text-[#4F4F4F]">{date}</div>
      </div>
    </div>
  );
};

export default InboxCard;
