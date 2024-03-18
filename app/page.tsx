import Navbar from "@/componets/Navbar"
import User from "@/componets/users"
import Link from "next/link"

async function fetchUser() {
  const rest = await fetch("https://reqres.in/api/users?page=1")
  const {data} = await rest.json()
 
  
  return data
  
}
export interface userProps {
  id:string
  email:string
  first_name:string
  last_name:string
  avatar:string
}
export default async function Home() {
const users:userProps[] = await fetchUser()

  return (
    <div className="">
     
      <ul>
       {users.map((user)=>(
        <Link key={user.id} href={`/user/${user.id}`}><User {...user}/> </Link>
        

      ))} 
      </ul>
      
    </div>
  );
}
