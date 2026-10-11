
"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import { CalendarDays, CheckCircle2, Mail, UserRound, Pencil } from "lucide-react";
import Link from "next/link";

export default function Profile() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const userID = session?.user?.id

  if (isPending) {
    return (
      <div className="mx-auto w-full max-w-2xl animate-pulse rounded-3xl border border-default-200 bg-content1 p-6 sm:p-8">
        <div className="flex items-center gap-4">
          <div className="size-20 rounded-full bg-default-200" />
          <div className="space-y-3">
            <div className="h-5 w-36 rounded bg-default-200" />
            <div className="h-4 w-48 rounded bg-default-200" />
          </div>
        </div>
        <div className="mt-8 h-28 rounded-2xl bg-default-100" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-default-200 p-8 text-center">
        <UserRound className="mx-auto mb-3 size-10 text-default-400" />
        <h2 className="text-xl font-bold">প্রোফাইল দেখতে সাইন ইন করুন</h2>
        <p className="mt-2 text-sm text-default-500">
          আপনার অ্যাকাউন্টের তথ্য দেখতে লগইন করতে হবে।
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-[80vh] bg-default-50 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto w-full max-w-2xl">
        {/* Page heading */}
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            My Account
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            আমার প্রোফাইল
          </h1>
          <p className="mt-2 text-sm text-default-500">
            আপনার ব্যক্তিগত তথ্য এবং অ্যাকাউন্টের বিবরণ।
          </p>
        </div>

        <Card className="overflow-hidden rounded-3xl border border-default-200 bg-content1 shadow-xl shadow-black/5">
          {/* Profile banner */}
          <div className="relative h-32 overflow-hidden bg-gradient-to-r from-emerald-700 via-green-600 to-lime-500">
            <div className="absolute -right-8 -top-16 size-48 rounded-full border-[24px] border-white/10" />
            <div className="absolute -bottom-20 left-16 size-40 rounded-full bg-white/10 blur-2xl" />
          </div>

          {/* User identity */}
          <div className="relative px-5 pb-6 sm:px-8">
            <div className="-mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-end gap-4">
                <Avatar className="size-24 shrink-0 border-4 border-content1 shadow-lg">
                  <Avatar.Image
                    alt={user.name || "User"}
                    src={
                      user.image ||
                      "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
                    }
                  />
                </Avatar>

                <div className="min-w-0 pb-1">
                  <h2 className="truncate text-xl font-bold text-foreground sm:text-2xl">
                    {user.name || "নাম দেওয়া হয়নি"}
                  </h2>
                  <p className="mt-1 truncate text-sm text-default-500">
                    {user.email || "ইমেইল পাওয়া যায়নি"}
                  </p>
                </div>
              </div>

             <Link href={`/profile/${userID}`}>
              <Button
                variant="bordered"
                className="w-full border-emerald-600 text-emerald-700 sm:w-auto"
               
              >
                <Pencil size={16} />
                Edit Name
              </Button>
             
             </Link>
            </div>

            {/* Account status */}
            <div className="mt-6 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
              <CheckCircle2 size={18} />
              <span className="font-medium">অ্যাকাউন্ট সক্রিয়</span>
            </div>

            {/* Account details */}
            <div className="mt-7">
              <h3 className="text-lg font-bold text-foreground">
                অ্যাকাউন্টের তথ্য
              </h3>
              <p className="mt-1 text-sm text-default-500">
                আপনার অ্যাকাউন্টের সঙ্গে যুক্ত তথ্য।
              </p>

              <div className="mt-5 space-y-3">
                <div className="flex items-start gap-4 rounded-2xl border border-default-200 bg-default-50/70 p-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    <UserRound size={21} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-default-500">পূর্ণ নাম</p>
                    <p className="mt-1 break-words font-semibold text-foreground">
                      {user.name || "—"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-default-200 bg-default-50/70 p-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    <Mail size={21} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-default-500">ইমেইল ঠিকানা</p>
                    <p className="mt-1 break-all font-semibold text-foreground">
                      {user.email || "—"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-default-200 bg-default-50/70 p-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                    <CalendarDays size={21} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-default-500">
                      অ্যাকাউন্ট তৈরির তারিখ
                    </p>
                    <p className="mt-1 font-semibold text-foreground">
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString("bn-BD", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "তথ্য নেই"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-default-400">
              আপনার অ্যাকাউন্টের তথ্য নিরাপদে রাখুন।
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
