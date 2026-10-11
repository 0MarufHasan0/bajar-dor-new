"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Skeleton } from "@heroui/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const UserInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session , isPending} = authClient.useSession();

//   console.log(session)

  const user = session?.user;
  const router = useRouter();


  const signOUt = async()=> {
   const logout = await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      toast.success("সফলভাবে লগআউট হয়েছে!");
      router.push("/sign-in"); // redirect to login page
    },
  },
});
  }

  const handleToggle = ()=>{
    setIsOpen(!isOpen)
  }


  if (isPending) {
  return   <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full bg-gray-200" />

        <Skeleton className="h-6 w-28 rounded-md bg-gray-200" />

        <Skeleton className="h-9 w-20 rounded-lg bg-gray-200" />
      </div>
}

  return (
   <div className="flex items-center gap-3">
  {user ? (
    <>
      <Avatar>
        <Avatar.Image
          alt={user.name || "User"}
          src={
            user.image ||
            "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
          }
        />
      </Avatar>
      <p className="text-2xl font-bold">{user.name}
        
       <Link href="/profile"> <small onClick={handleToggle} className='text-green-400'> {isOpen ? "▲" : "▼"}</small></Link></p>

      <div>
        <Button onClick={signOUt} className='bg-red-400'>
          Sign Out
        </Button>
      </div>
    </>
  ) : (
    <>
      <Link href="/sign-in">Sign In</Link>

      <Button className={"bg-gradient-to-r from-emerald-500 via-green-500 to-lime-500"} as={Link} href="/sign-up">
        Sign Up
      </Button>
    </>
  )}
</div>
    
  );
};

export default UserInfo;