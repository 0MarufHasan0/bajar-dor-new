"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Skeleton } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UserInfo = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;
  const router = useRouter();

  const signOUt = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.error("সফলভাবে লগআউট হয়েছে!");
          router.push("/sign-in");
        },
      },
    });
  };

  if (isPending) {
    return (
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full bg-gray-200" />
        <Skeleton className="h-6 w-28 rounded-md bg-gray-200" />
        <Skeleton className="h-9 w-20 rounded-lg bg-gray-200" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {user ? (
        <>
          <div className="flex items-center gap-3">
            <Avatar>
              <Avatar.Image
                alt={user.name || "User"}
                src={
                  user.image ||
                  "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
                }
              />
            </Avatar>

            <div className="flex flex-col">
              <p className="text-lg font-bold">
                {user.name}
              </p>

              <Link
                href="/profile"
                className="text-sm text-green-400 hover:text-green-500"
              >
                ▼ Visit Profile
              </Link>
            </div>
          </div>

          <Button onClick={signOUt} className="bg-red-400">
            Sign Out
          </Button>
        </>
      ) : (
        <>
          <Link href="/sign-in">Sign In</Link>

        <Link href="/sign-up">
          <Button
            className="bg-gradient-to-r from-emerald-500 via-green-500 to-lime-500"
            >
            Sign Up
          </Button>
        
        </Link>
        </>
      )}
    </div>
  );
};

export default UserInfo;