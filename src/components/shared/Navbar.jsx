import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setUser } from "../redux/appSlice";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Navbar = () => {
  const [inputText, setInputText] = useState("");
  const {user} = useSelector(store=>store.appSlice)

  console.log("EveryThing about user",user)
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const signOutHandler = ()=>{
    // sign out logic here
    signOut(auth).then(()=>{
      dispatch(setUser(null))
    }).catch(()=>{
      console.log("Error signing out");
    })
  }

  // search text
  useEffect(() => {
    dispatch(setSearchText(inputText));
  }, [inputText]);


  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <GiHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-8"
            src="https://i.pinimg.com/736x/ca/c7/f6/cac7f6edc4a990bc31773f9dac53baf4.jpg"
            alt="gmail-logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="rounded-full w-full bg-transparent outline-none px-1"
            placeholder="Search Mail"
          />
        </div>
      </div>
      <div className="md:block hidden ">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
            <FaRegQuestionCircle size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
            <MdSettings size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
            <TbGridDots size={"20px"} />
          </div>
          <div className="relative cursor-pointer">
            <Avatar
              onClick={() => setToggle(!toggle)}
              src={user.photoURL}
              size="40"
              round={true}
            />
            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.1 }}
                  className="absolute right-2 z-20 shadow-lg bg-white rounded-md"
                >
                <p onClick={signOutHandler} className="p-2 underline">LogOut </p>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
