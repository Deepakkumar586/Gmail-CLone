import React, { useEffect, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "./redux/appSlice";
import { SiTrendmicro } from "react-icons/si";

const Messages = () => {

  const dispatch = useDispatch();
  
  const emails = useSelector(store=>store.appSlice.emails)
  const searchText = useSelector(store=>store.appSlice.searchText)

  // make temperory mails
  const [tempEmails,setTempEmails] = useState(emails)
  useEffect(()=>{
        const q = query(collection(db,"emails"),orderBy('createdAt','desc'))
        const unsubscribe = onSnapshot(q,(snapshot)=>{
          const allEmails = snapshot.docs.map((doc)=>({
            ...doc.data(),id:doc.id
          }));
          console.log('Allemails:',allEmails)
          dispatch(setEmails(allEmails))
        })
        // cleanup
        return()=> unsubscribe();
  },[])

  // we search the data here 
  useEffect(()=>{
    const filterEmail = emails?.filter((email)=>{
      return email?.subject?.toLowerCase().includes(searchText.toLowerCase()) || email?.to?.toLowerCase().includes(searchText.toLowerCase())
      || email?.message?.toLowerCase().includes(searchText.toLowerCase())
    })
    setTempEmails(filterEmail)

  },[searchText,emails])
  return (
    <div>
    {
      tempEmails && tempEmails?.map((email,key)=>{
        return <Message key={key} email={email}/> 
      })
    }
      
    </div>
  );
};

export default Messages;
