import React, { useState } from "react";
import { IoHandLeft } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "./redux/appSlice";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const SentMail = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });
  const open = useSelector((store) => store.appSlice.open);
  const dispatch = useDispatch();

  const handleclose = () => {
    dispatch(setOpen(false));
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    // Add your code to send the email here
    // console.log(formData);

    await addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      createdAt: serverTimestamp(),
      // isRead: false,
      // isStarred: false,
      // isImportant: false,
      // isDraft: false,
      // sender: "Deepak Kumar", // Replace with the actual sender's name
      // receiver: "Your Email Address" // Replace with the actual receiver's email address
    });
    dispatch(setOpen(false));
    setFormData({
      to: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-md`}
    >
      <div className="flex px-3 py-2 bg-[#F2F6Fc] justify-between rounded-t-md">
        <h1>New Message</h1>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <RxCross2 onClick={handleclose} size={"10px"} />
        </div>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2">
        <input
          value={formData.to}
          onChange={changeHandler}
          name="to"
          type="text"
          placeholder="To"
          className="outline-none py-1"
        />
        <input
          value={formData.subject}
          type="text"
          onChange={changeHandler}
          name="subject"
          placeholder="Subject"
          className="outline-none py-1"
        />
        <textarea
          value={formData.message}
          placeholder="Type your message here"
          name="message"
          onChange={changeHandler}
          cols={30}
          rows={10}
          className="outline-none py-3"
        ></textarea>
        <button
          type="submit"
          className="bg-[#0B57D0] rounded-full w-fit px-4 text-white font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SentMail;
