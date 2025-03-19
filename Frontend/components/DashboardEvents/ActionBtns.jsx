"use client"
import React from 'react'
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import axios from "axios"
import { useRouter } from 'next/navigation';

export const Status = {
  PENDING: "PENDING",
  VERIFIED: "VERIFIED",
  CANCELLED: "CANCELLED",
}
const api_url = process.env.NEXT_PUBLIC_API_URL;
const ActionBtns = ({id}) => {
     const router = useRouter();
    const handleUpdate =  async(status)=>{
    try{
      const res = await axios({
        url: `${api_url}/v1/events/${id}`,
        method: "PUT",
        data: {
            status
        }
      })

      if(res){
         router.refresh();
      }
  
      } catch (err) {
        console.log(err);
      }
  }

  return (
    <div className='actionBtns'>
        <div className='accept'>
            <button onClick={() => handleUpdate(Status.VERIFIED)}>
            <FaCheck />
            </button>
        </div>
        <div className='reject'>
            <button onClick={() => handleUpdate(Status.CANCELLED)} >
            <ImCross />
            </button>
        </div>
    </div>
  )
}

export default ActionBtns