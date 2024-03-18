import { userProps } from "@/app/page";

interface paramsProps {
    params: {
        id: string;
    };
}

async function getUser(id:string) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const {data} = await res.json()
    return data
}
async function UserPage({params}:paramsProps) {
   const user:userProps = await getUser(params.id)
    console.log(user);
    
  return (
    <div>
       
        <div className="bg-gray-300 p-10 rounded-none">
            <h1 className="text-3xl font-bold">{user.first_name} {user.last_name}</h1>
            <img className="rounded-full w-22"  src={user.avatar}/>
            <p>{user.email}</p>
        </div>
    </div>
  )
}

export default UserPage