"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";

const UserInfo = () => {
  const { data: session} = authClient.useSession();
//   console.log(session)

  const user = session?.user;



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

      <p>{user.name}</p>
    </>
  ) : (
    <>
      <Link href="/login">Login</Link>

      <Button as={Link} href="/signup">
        Sign Up
      </Button>
    </>
  )}
</div>
    
  );
};

export default UserInfo;