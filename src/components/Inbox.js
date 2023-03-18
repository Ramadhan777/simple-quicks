import React from "react";
import Loading from "../components/Loading";
import InboxCard from "./InboxCard";

import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import personWhite from "../assets/images/person_white.svg";
import person from "../assets/images/person.svg";
import loadingColor from "../assets/images/loadingColor.svg";

const dataGroupMessage = [
  {
    id: 1,
    message: "No worries, it will be completed ASAP. I've asked him yesterday.",
    sender: "You",
    time: null,
    reply: "",
    to: ''
  },
  {
    id: 2,
    message: "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytume. Thanks.",
    sender: "Mary Hilda",
    time: null,
    reply: "",
    to: ''
  },
  {
    id: 3,
    message: "Please contact Mary for qustions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
    sender: "You",
    time: null,
    reply: "",
    to: ''
  },
  {
    id: 4,
    message: "Sure thing, Claren",
    sender: "Mary Hilda",
    time: null,
    reply: "",
    to: ''
  },
  {
    id: 5,
    message: "Morning, I'll try to do them, Thanks",
    sender: "Obaidullah Amarkhill",
    time: null,
    reply: "",
    to: ''
  },
];

const dataPrivateMessage = [
  {
    id: 1,
    message: "Hey There, Welcome to your inbox! Contact us for more information and help about anything! we'll send you a response as soon as possible",
    sender: "FastVisa support",
    time: null,
    reply: "",
    to: ''
  },
  {
    id: 2,
    message: "Hi, I need help with something, can you help me ?",
    sender: "You",
    time: null,
    reply: "",
    to: ''
  },
];

const Inbox = ({ setAction }) => {
  const [loading, setLoading] = React.useState(true);
  const [inboxState, setInboxState] = React.useState("");
  const [groupMessages, setGroupMessages] = React.useState(dataGroupMessage);
  const [privateMessages, setPrivateMessages] = React.useState(dataPrivateMessage);
  const [groupMessageOnEdit, setGroupMessageOnEdit] = React.useState(null);
  const [replyMessage, setReplyMessage] = React.useState({});
  const month = ["January", "February", "March", "April", "Mei", "June", "July", "August", "September", "October", "November", "December"];

  const sendGroupMessage = (e) => {
    e.preventDefault();

    const data = {
      id: Math.random() * 1000000000,
      message: e.target.message.value,
      sender: "You",
      time: new Date(),
      reply: replyMessage.message,
      to: replyMessage.to,
    };

    setGroupMessages([...groupMessages, data]);
    setReplyMessage({})
  };

  const sendPrivateMessage = (e) => {
    e.preventDefault();

    const data = {
      id: Math.random() * 1000000000,
      message: e.target.message.value,
      sender: "You",
      time: new Date(),
      reply: replyMessage.message,
      to: replyMessage.to,
    };
    setPrivateMessages([...privateMessages, data]);
    setReplyMessage({})
  };

  const deleteMessage = (id) => {
    setGroupMessages(groupMessages.filter((message) => message.id !== id));
  };

  const editMessageGroup = (e, id) => {
    if (e.key === "Enter") {
      setGroupMessages(
        groupMessages.map((groupMessage) =>
          groupMessage.id !== id
            ? groupMessage
            : {
                id: groupMessage.id,
                message: e.target.value,
                sender: groupMessage.sender,
                time: groupMessage.time,
                reply: "",
                to: ''
              }
        )
      );
      setGroupMessageOnEdit(null);
    } else {
      e.target.value += e.key;
    }
  };

  const editMessagePrivate = (e, id) => {
    if (e.key === "Enter") {
      setPrivateMessages(
        privateMessages.map((groupMessage) =>
          groupMessage.id !== id
            ? groupMessage
            : {
                id: groupMessage.id,
                message: e.target.value,
                sender: groupMessage.sender,
                time: groupMessage.time,
                reply: "",
                to: ''
              }
        )
      );
      setGroupMessageOnEdit(null);
     
    } else {
      e.target.value += e.key;
    }
  };

  const replyingMessage = (to, message) => {
    setReplyMessage({
      to,
      message,
    });
  };

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <>
      {inboxState === "" && (
        <div className="w-[50%] h-[450px] bg-white rounded-md">
          <div className="flex items-center px-4 mt-3 relative">
            <input type="text" className="w-full border-[1px] border-black focus:outline-none ml-2 text-black text-sm pl-10 pr-14 py-1" placeholder="Search" />
            <AiOutlineSearch className="text-black text-sm text-2xl absolute right-14" />
          </div>

          <div className="w-full h-[400px] mt-5 flex text-black gap-2 px-4">
            {loading ? (
              <Loading desc="Loading Chats ..." />
            ) : (
              <div className="px-2 flex flex-col w-full gap-3">
                <InboxCard image1={person} image2={personWhite} name="109220-Naturalization" subname="Cameron Philips:" desc="Please check this out!" date="January 1, 2021 19:10" setInboxState={setInboxState} inboxState="group" />
                <InboxCard
                  image1={person}
                  image2={personWhite}
                  name="Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service"
                  subname="Ellen:"
                  desc="Hey, please read."
                  date="02/06/2021 10:45"
                  setInboxState={setInboxState}
                  inboxState="group"
                />
                <InboxCard
                  image1={person}
                  image2={personWhite}
                  name="8045-Diana SALAZAR MUNGUIA"
                  subname="Cameron Philips:"
                  desc="I understand your initial concerns..."
                  date="01/06/2021 12:19"
                  setInboxState={setInboxState}
                  inboxState="group"
                />
                <InboxCard image3="F" name="FastVisa Support" desc="I understand your initial concerns..." date="01/06/2021 12:19" setInboxState={setInboxState} inboxState="private" setLoading={setLoading} />
              </div>
            )}
          </div>
        </div>
      )}

      {inboxState === "group" && (
        <>
          <div className="w-[50%] h-[450px] bg-white rounded-md ">
            <div className="flex items-center px-5 mt-3 pb-3 relative text-black gap-4 border-b-[1px] border-[#BDBDBD]">
              <div className="hover:cursor-pointer">
                <AiOutlineArrowLeft className="text-xl" onClick={() => setInboxState("")} />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="text-[#2F80ED] font-bold">109220-Naturalization</div>
                <div className="text-sm text-[#4F4F4F]">3 participants</div>
              </div>
              <div className="hover:cursor-pointer" onClick={() => setAction("")}>
                <RxCross2 className="text-xl" />
              </div>
            </div>

            <div className="w-full h-[330px] py-3 flex flex-col text-black gap-3 px-5 overflow-y-auto">
              {groupMessages?.map((message, i) =>
                message.sender === "You" ? (
                  <>
                    {message.time ? (
                      message.time.getDate() === (i === 0 ? 0 : groupMessages[i - 1].time ? groupMessages[i - 1].time.getDate() : 0) ? null : (
                        <div className="border-t-[1px] border-black mt-4 relative">
                          <div className="absolute top-[-13px] left-[33%] bg-white px-5 font-bold text-sm">
                            {message.time.getDate() === new Date().getDate() && "Today"}{" "}
                            {`${month[message.time.getMonth()]} ${message.time.getDate().toString().length === 1 ? `0${message.time.getDate()}` : `${message.time.getDate()}`}, ${message.time.getYear() + 1900}`}
                          </div>
                        </div>
                      )
                    ) : null}

                    <div key={i} className="w-full flex flex-col items-end">
                      <div className="text-[#9B51E0] text-sm font-bold">{message.sender}</div>
                      {message.reply && (
                        <div className="w-[400px] text-sm p-2 bg-[#F2F2F2] rounded my-1 border-[1px] text-black">
                          <div className="text-sm">{message.reply}</div>
                        </div>
                      )}
                      <div className="w-full flex justify-end gap-2">
                        <div className="group relative">
                          <div className="flex relative text-lg font-bold mt-[-13px] hover:cursor-pointer">...</div>
                          <div className="hidden group-hover:block absolute w-[100px] bg-white border-[1px] border-[#BDBDBD] rounded z-10 right-0">
                            <div onClick={() => setGroupMessageOnEdit(message.id)} className="border-b-[1px] border-[#BDBDBD] px-2 py-1 text-[#2F80ED] hover:cursor-pointer">
                              Edit
                            </div>
                            <div onClick={() => deleteMessage(message.id)} className="px-2 py-1 border-b-[1px] border-[#BDBDBD] text-[#EB5757] hover:cursor-pointer">
                              Delete
                            </div>
                            <div className="border-b-[1px] border-[#BDBDBD] px-2 py-1 text-[#2F80ED] hover:cursor-pointer">Share</div>
                            <div onClick={() => replyingMessage(message.sender, message.message)} className="px-2 py-1 text-[#2F80ED] hover:cursor-pointer">
                              Reply
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col text-sm p-2 bg-[#EEDCFF] rounded gap-1">
                          {groupMessageOnEdit === message.id ? (
                            <textarea onKeyPress={(e) => editMessageGroup(e, message.id)} type="text" defaultValue={message.message} className="focus:outline-none w-[300px]" />
                          ) : (
                            <div className="max-w-[400px]">{message.message}</div>
                          )}
                          <div>{message.time ? `${message.time.getHours()}.${message.time.getMinutes()}` : "19.32"}</div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {message.id === 2 && (
                      <div className="border-t-[1px] border-black mt-4 relative">
                        <div className="absolute top-[-13px] left-[33%] bg-white px-5 font-bold text-sm">June 09, 2021</div>
                      </div>
                    )}
                    {message.id === 5 && (
                      <div className="border-t-[1px] border-[#EB5757] mt-4 relative">
                        <div className="absolute top-[-12px] left-[33%] bg-white px-5 font-bold text-sm text-[#EB5757]">New Message</div>
                      </div>
                    )}
                    <div className="w-full flex flex-col ">
                      <div className={`${message.sender === "Mary Hilda" ? "text-[#E5A443]" : "text-[#43B78D]"} text-sm font-bold`}>{message.sender}</div>
                      <div className="w-full flex gap-2">
                        <div className={`flex flex-col text-sm p-2 ${message.sender === "Mary Hilda" ? "bg-[#FCEED3]" : "bg-[#D2F2EA]"} rounded gap-1`}>
                          {groupMessageOnEdit === message.id ? (
                            <textarea onKeyPress={(e) => editMessageGroup(e, message.id)} type="text" defaultValue={message.message} className="focus:outline-none w-[300px]" />
                          ) : (
                            <div>{message.message}</div>
                          )}
                          <div>{message.time ? `${message.time.getHours()}.${message.time.getMinutes()}` : "19.32"}</div>
                        </div>
                        <div className="group relative">
                          <div className="flex relative text-lg font-bold mt-[-13px] hover:cursor-pointer">...</div>
                          <div className="hidden group-hover:block absolute right-0 w-[100px] bg-white border-[1px] border-[#BDBDBD] rounded z-20">
                            <div onClick={() => setGroupMessageOnEdit(message.id)} className="border-b-[1px] border-[#BDBDBD] px-2 py-1 text-[#2F80ED] hover:cursor-pointer">
                              Edit
                            </div>
                            <div onClick={() => deleteMessage(message.id)} className="px-2 py-1 border-b-[1px] border-[#BDBDBD] text-[#EB5757] hover:cursor-pointer">
                              Delete
                            </div>
                            <div className="border-b-[1px] border-[#BDBDBD] px-2 py-1 text-[#2F80ED] hover:cursor-pointer">Share</div>
                            <div onClick={() => replyingMessage(message.sender, message.message)} className="px-2 py-1 text-[#2F80ED] hover:cursor-pointer">
                              Reply
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              )}
            </div>

            <form onSubmit={sendGroupMessage} className="w-full flex gap-3 pr-5 pl-3 py-2">
              <div className="flex flex-col flex-grow relative">
                {replyMessage.message && (
                  <div className="w-full ml-2 flex flex-col text-sm p-2 bg-[#F2F2F2] rounded-t gap-1 absolute bottom-[36px] z-10 border-[1px] border-[#828282] text-black">
                    <div className="flex">
                      <div className="flex grow text-[#4F4F4F] text-sm">Replying to {replyMessage.to}</div>
                      <div className="hover:cursor-pointer" onClick={() => setReplyMessage({})}>
                        <RxCross2 className="text-xl" />
                      </div>
                    </div>
                    <div className="text-sm">{replyMessage.message}</div>
                  </div>
                )}
                <input name="message" type="text" className="w-full border-[1px] border-[#828282] rounded focus:outline-none text-sm ml-2 text-black pl-3 py-2" placeholder="Type a new message" />
              </div>
              <div>
                <button type="submit" className="bg-[#2F80ED] px-3 py-2 w-[70px] rounded text-sm">
                  Send
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      {inboxState === "private" && (
        <div className="w-[50%] h-[450px] bg-white rounded-md ">
          <div className="flex items-center px-5 mt-3 pb-3 relative text-black gap-4 border-b-[1px] border-[#BDBDBD]">
            <div className="hover:cursor-pointer">
              <AiOutlineArrowLeft className="text-xl" onClick={() => setInboxState("")} />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-[#2F80ED] font-bold">FastVisa Support</div>
            </div>
            <div className="hover:cursor-pointer" onClick={() => setAction("")}>
              <RxCross2 className="text-xl" />
            </div>
          </div>

          <div className="w-full h-[350px] py-3 flex flex-col text-black gap-3 px-5 overflow-y-auto relative">
            {privateMessages?.map((message, i) =>
              message.sender === "You" ? (
                <>
                  {message.time ? (
                    message.time.getDate() === (i === 0 ? 0 : groupMessages[i - 1].time ? groupMessages[i - 1].time.getDate() : 0) ? null : (
                      <div className="border-t-[1px] border-black mt-4 relative">
                        <div className="absolute top-[-13px] left-[33%] bg-white px-5 font-bold text-sm">
                          {message.time.getDate() === new Date().getDate() && "Today"}{" "}
                          {`${month[message.time.getMonth()]} ${message.time.getDate().toString().length === 1 ? `0${message.time.getDate()}` : `${message.time.getDate()}`}, ${message.time.getYear() + 1900}`}
                        </div>
                      </div>
                    )
                  ) : null}

                  <div key={i} className="w-full flex flex-col items-end">
                    <div className="text-[#9B51E0] text-sm font-bold">{message.sender}</div>
                    {message.reply && (
                        <div className="w-[300px] text-sm p-2 bg-[#F2F2F2] rounded my-1 border-[1px] text-black">
                          <div className="text-sm">{message.reply}</div>
                        </div>
                      )}
                    <div className="w-full flex justify-end gap-2">
                      <div className="group relative">
                        <div className="flex relative text-lg font-bold mt-[-13px] hover:cursor-pointer">...</div>
                        <div className="hidden group-hover:block absolute w-[100px] bg-white border-[1px] border-[#BDBDBD] rounded z-10 right-0">
                          <div onClick={() => setGroupMessageOnEdit(message.id)} className="border-b-[1px] border-[#BDBDBD] px-2 py-1 text-[#2F80ED] hover:cursor-pointer">
                            Edit
                          </div>
                          <div onClick={() => deleteMessage(message.id)} className="px-2 py-1 text-[#EB5757] hover:cursor-pointer">
                            Delete
                          </div>
                          <div className="border-b-[1px] border-[#BDBDBD] px-2 py-1 text-[#2F80ED] hover:cursor-pointer">Share</div>
                          <div onClick={() => replyingMessage(message.sender, message.message)} className="px-2 py-1 text-[#2F80ED] hover:cursor-pointer">Reply</div>
                        </div>
                      </div>
                      <div className="flex flex-col text-sm p-2 bg-[#EEDCFF] rounded gap-1">
                        {groupMessageOnEdit === message.id ? (
                          <textarea onKeyPress={(e) => editMessagePrivate(e, message.id)} type="text" defaultValue={message.message} className="focus:outline-none w-[300px]" />
                        ) : (
                          <div className="max-w-[400px]">{message.message}</div>
                        )}
                        <div>{message.time ? `${message.time.getHours()}.${message.time.getMinutes()}` : "19.32"}</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full flex flex-col ">
                    <div className={`${message.sender === "Mary Hilda" ? "text-[#E5A443]" : "text-[#43B78D]"} text-sm font-bold`}>{message.sender}</div>
                    <div className="w-full flex gap-2">
                      <div className={`flex flex-col text-sm p-2 ${message.sender === "Mary Hilda" ? "bg-[#FCEED3]" : "bg-[#D2F2EA]"} rounded gap-1`}>
                        {groupMessageOnEdit === message.id ? (
                          <textarea onKeyPress={(e) => editMessagePrivate(e, message.id)} type="text" defaultValue={message.message} className="focus:outline-none w-[300px]" />
                        ) : (
                          <div>{message.message}</div>
                        )}
                        <div>{message.time ? `${message.time.getHours()}.${message.time.getMinutes()}` : "19.32"}</div>
                      </div>
                      <div className="group relative">
                        <div className="flex relative text-lg font-bold mt-[-13px] hover:cursor-pointer">...</div>
                        <div className="hidden group-hover:block absolute right-0 w-[100px] bg-white border-[1px] border-[#BDBDBD] rounded z-20">
                          <div onClick={() => setGroupMessageOnEdit(message.id)} className="border-b-[1px] border-[#BDBDBD] px-2 py-1 text-[#2F80ED] hover:cursor-pointer">
                            Edit
                          </div>
                          <div onClick={() => deleteMessage(message.id)} className="px-2 py-1 text-[#EB5757] hover:cursor-pointer">
                            Delete
                          </div>
                          <div className="border-b-[1px] border-[#BDBDBD] px-2 py-1 text-[#2F80ED] hover:cursor-pointer">Share</div>
                          <div onClick={() => replyingMessage(message.sender, message.message)} className="px-2 py-1 text-[#2F80ED] hover:cursor-pointer">Reply</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            )}
            {loading && (
              <div className="flex w-[93%] items-center bg-[#E9F3FF] rounded absolute bottom-2 text-black py-1 pl-3 gap-2">
                <div className="animate-spin">
                  <img src={loadingColor} alt="loading" />
                </div>
                <div>Please wait while we connect you with one of our team</div>
              </div>
            )}
          </div>

          <form onSubmit={sendPrivateMessage} className="w-full flex gap-3 pr-5 pl-3 py-1">
            <div className="flex flex-col flex-grow relative">
                {replyMessage.message && (
                  <div className="w-full ml-2 flex flex-col text-sm p-2 bg-[#F2F2F2] rounded-t gap-1 absolute bottom-[36px] z-10 border-[1px] border-[#828282] text-black">
                    <div className="flex">
                      <div className="flex grow text-[#4F4F4F] text-sm">Replying to {replyMessage.to}</div>
                      <div className="hover:cursor-pointer" onClick={() => setReplyMessage({})}>
                        <RxCross2 className="text-xl" />
                      </div>
                    </div>
                    <div className="text-sm">{replyMessage.message}</div>
                  </div>
                )}
                <input name="message" type="text" className="w-full border-[1px] border-[#828282] rounded focus:outline-none text-sm ml-2 text-black pl-3 py-2" placeholder="Type a new message" />
              </div>
            <div>
              <button type="submit" className="bg-[#2F80ED] px-3 py-2 w-[70px] rounded text-sm">
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Inbox;
