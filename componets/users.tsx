"use client"
import { userProps } from "@/app/page"


function User({id,first_name,last_name,avatar,email}:userProps) {
  return (
    <li key={id} className="bg-slate-400 mb-2 p-4 rounded-md text-black" onClick={()=>{alert()}}>
          <div className="flex justify-between items-center">
            <h5 className="font-bold">{id}-{first_name} {last_name}</h5>
            <p>{email}</p>
            <img className="rounded-full w-22" src={avatar}/>
          </div>
         </li> 
  )
}

export default User