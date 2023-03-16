import React from "react";
import Loading from "../components/Loading";
import ChatCard from "./ChatCards";

import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import personWhite from "../assets/images/person_white.svg";
import person from "../assets/images/person.svg";
import loadingColor from "../assets/images/loadingColor.svg";

const Inbox = ({ setAction }) => {
  const [loading, setLoading] = React.useState(true);
  const [inboxState, setInboxState] = React.useState("");

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
              <Loading desc='Loading Chats ...'/>
            ) : (
              <div className="px-2 flex flex-col w-full gap-3">
                <ChatCard image1={person} image2={personWhite} name="109220-Naturalization" subname="Cameron Philips:" desc="Please check this out!" date="January 1, 2021 19:10" setInboxState={setInboxState} inboxState="group" />
                <ChatCard
                  image1={person}
                  image2={personWhite}
                  name="Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service"
                  subname="Ellen:"
                  desc="Hey, please read."
                  date="02/06/2021 10:45"
                  setInboxState={setInboxState}
                  inboxState="group"
                />
                <ChatCard
                  image1={person}
                  image2={personWhite}
                  name="8045-Diana SALAZAR MUNGUIA"
                  subname="Cameron Philips:"
                  desc="I understand your initial concerns..."
                  date="01/06/2021 12:19"
                  setInboxState={setInboxState}
                  inboxState="group"
                />
                <ChatCard image3="F" name="FastVisa Support" desc="I understand your initial concerns..." date="01/06/2021 12:19" setInboxState={setInboxState} inboxState="private" setLoading={setLoading} />
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
              <div className="w-full flex flex-col items-end">
                <div className="text-[#9B51E0] text-sm font-bold">You</div>
                <div className="w-full flex justify-end gap-2">
                  <div className="group relative">
                    <div className="flex relative text-lg font-bold mt-[-13px] hover:cursor-pointer">...</div>
                    <div className="hidden group-hover:block absolute w-[100px] bg-white border-[1px] border-[#BDBDBD] rounded z-10">
                      <div className="border-b-[1px] border-[#BDBDBD] px-2 py-1 text-[#2F80ED] hover:cursor-pointer">Edit</div>
                      <div className="px-2 py-1 text-[#EB5757] hover:cursor-pointer">Delete</div>
                    </div>
                  </div>
                  <div className="flex flex-col text-sm p-2 bg-[#EEDCFF] rounded gap-1">
                    <div>No worries, it will be completed ASAP. I've asked him yesterday.</div>
                    <div>19:32</div>
                  </div>
                </div>
              </div>

              <div className="border-t-[1px] border-black mt-4 relative">
                <div className="absolute top-[-13px] left-[33%] bg-white px-5 font-bold text-sm">Today June 09, 2021</div>
              </div>

              <div className="w-full flex flex-col ">
                <div className="text-[#E5A443] text-sm font-bold">Mary Hilda</div>
                <div className="w-full flex gap-2">
                  <div className="flex flex-col text-sm p-2 bg-[#FCEED3] rounded gap-1">
                    <div>
                      Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homewrodk for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytume. Thanks.
                    </div>
                    <div>19:32</div>
                  </div>
                  <div className="group relative">
                    <div className="flex relative text-lg font-bold mt-[-13px] hover:cursor-pointer">...</div>
                    <div className="hidden group-hover:block absolute right-0 w-[100px] bg-white border-[1px] border-[#BDBDBD] rounded z-10">
                      <div className="border-b-[1px] border-[#BDBDBD] px-2 py-1 text-[#2F80ED] hover:cursor-pointer">Edit</div>
                      <div className="px-2 py-1 text-[#EB5757] hover:cursor-pointer">Delete</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-end">
                <div className="text-[#9B51E0] text-sm font-bold">You</div>
                <div className="w-full flex justify-end gap-2">
                  <div className="group relative">
                    <div className="flex relative text-lg font-bold mt-[-13px] hover:cursor-pointer">...</div>
                    <div className="hidden group-hover:block absolute w-[100px] bg-white border-[1px] border-[#BDBDBD] rounded z-10">
                      <div className="border-b-[1px] border-[#BDBDBD] px-2 py-1 text-[#2F80ED] hover:cursor-pointer">Edit</div>
                      <div className="px-2 py-1 text-[#EB5757] hover:cursor-pointer">Delete</div>
                    </div>
                  </div>
                  <div className="flex flex-col text-sm p-2 bg-[#EEDCFF] rounded gap-1">
                    <div>Please contact Mary for qustions regarding the case bcs she will be managing your forms from now on! Thanks Mary.</div>
                    <div>19:32</div>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col ">
                <div className="text-[#E5A443] text-sm font-bold">Mary Hilda</div>
                <div className="w-full flex gap-2">
                  <div className="flex flex-col text-sm p-2 bg-[#FCEED3] rounded gap-1">
                    <div>Sure thing, Claren</div>
                    <div>19:32</div>
                  </div>
                  <div className="group relative">
                    <div className="flex relative text-lg font-bold mt-[-13px] hover:cursor-pointer">...</div>
                    <div className="hidden group-hover:block absolute w-[100px] bg-white border-[1px] border-[#BDBDBD] rounded z-10">
                      <div className="border-b-[1px] border-[#BDBDBD] px-2 py-1 text-[#2F80ED] hover:cursor-pointer">Edit</div>
                      <div className="px-2 py-1 text-[#EB5757] hover:cursor-pointer">Delete</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t-[1px] border-[#EB5757] mt-4 relative">
                <div className="absolute top-[-13px] left-[33%] bg-white px-5 font-bold text-sm text-[#EB5757]">New Message</div>
              </div>

              <div className="w-full flex flex-col ">
                <div className="text-[#43B78D] text-sm font-bold">Obaidullah Amarkhill</div>
                <div className="w-full flex gap-2">
                  <div className="flex flex-col text-sm p-2 bg-[#D2F2EA] rounded gap-1">
                    <div>Morning, I'll try to do them, Thanks</div>
                    <div>19:32</div>
                  </div>
                  <div className="group relative">
                    <div className="flex relative text-lg font-bold mt-[-13px] hover:cursor-pointer">...</div>
                    <div className="hidden group-hover:block absolute w-[100px] bg-white border-[1px] border-[#BDBDBD] rounded z-10">
                      <div className="border-b-[1px] border-[#BDBDBD] px-2 py-1 text-[#2F80ED] hover:cursor-pointer">Edit</div>
                      <div className="px-2 py-1 text-[#EB5757] hover:cursor-pointer">Delete</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex gap-3 pr-5 pl-3 py-1">
              <div className="flex flex-grow">
                <input type="text" className="w-full border-[1px] border-[#828282] rounded focus:outline-none text-sm ml-2 text-black pl-3" placeholder="Type a new message" />
              </div>
              <div>
                <button className="bg-[#2F80ED] px-3 py-2 w-[70px] rounded text-sm">Send</button>
              </div>
            </div>
          </div>
        </>
      )}

      {inboxState === "private" && (
        <div className="w-[50%] h-[450px] bg-white rounded-md ">
          <div className="flex items-center px-5 mt-3 pb-3 relative text-black gap-4 border-b-[1px] border-[#BDBDBD]">
            <div className="hover:cursor-pointer">
              <AiOutlineArrowLeft className="text-xl" />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-[#2F80ED] font-bold">FastVisa Support</div>
            </div>
            <div className="hover:cursor-pointer" onClick={() => setAction("")}>
              <RxCross2 className="text-xl" />
            </div>
          </div>

          <div className="w-full h-[350px] py-3 flex flex-col text-black gap-3 px-5 overflow-y-auto relative">
            <div className="w-full flex flex-col ">
              <div className="text-[#2F80ED] text-sm font-bold">FastVisa Support</div>
              <div className="w-full flex gap-2">
                <div className="flex flex-col text-sm p-2 bg-[#F8F8F8] rounded gap-1">
                  <div>Hey There, Welcome to your inbox! Contact us for more information and help about anything! we'll send you a response as soon as possible</div>
                  <div>19:32</div>
                </div>
                <div className="group relative">
                  <div className="flex relative text-lg font-bold mt-[-13px] hover:cursor-pointer">...</div>
                  <div className="hidden group-hover:block absolute right-0 w-[100px] bg-white border-[1px] border-[#BDBDBD] rounded z-10">
                    <div className="border-b-[1px] border-[#BDBDBD] px-2 py-1 text-[#2F80ED] hover:cursor-pointer">Edit</div>
                    <div className="px-2 py-1 text-[#EB5757] hover:cursor-pointer">Delete</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col items-end">
              <div className="text-[#9B51E0] text-sm font-bold">You</div>
              <div className="w-full flex justify-end gap-2">
                <div className="group relative">
                  <div className="flex relative text-lg font-bold mt-[-13px] hover:cursor-pointer">...</div>
                  <div className="hidden group-hover:block absolute w-[100px] bg-white border-[1px] border-[#BDBDBD] rounded z-10">
                    <div className="border-b-[1px] border-[#BDBDBD] px-2 py-1 text-[#2F80ED] hover:cursor-pointer">Edit</div>
                    <div className="px-2 py-1 text-[#EB5757] hover:cursor-pointer">Delete</div>
                  </div>
                </div>
                <div className="flex flex-col text-sm p-2 bg-[#EEDCFF] rounded gap-1">
                  <div>Hi, I need help with something, can you help me ?</div>
                  <div>19:32</div>
                </div>
              </div>
            </div>
            {loading && (
              <div className="flex w-[93%] items-center bg-[#E9F3FF] rounded absolute bottom-2 text-black py-1 pl-3 gap-2">
                <div className="animate-spin">
                  <img src={loadingColor} alt="loading" />
                </div>
                <div>Please wait while we connect you with one of our team</div>
              </div>
            )}
          </div>

          <div className="w-full flex gap-3 pr-5 pl-3 py-1 relative">
            <div className="flex flex-grow">
              <input type="text" className="w-full border-[1px] border-[#828282] rounded focus:outline-none text-sm ml-2 text-black pl-3" placeholder="Type a new message" />
            </div>
            <div>
              <button className="bg-[#2F80ED] px-3 py-2 w-[70px] rounded text-sm">Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Inbox;
