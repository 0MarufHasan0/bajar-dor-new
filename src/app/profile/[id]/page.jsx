
"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  TextField,
  Form,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const EditPage = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const name = String(userData.name ?? "").trim();

    if (userData.name.length < 3) {
      toast.error("নাম কমপক্ষে ৩ অক্ষরের হতে হবে।");
      return;
    }

    const { error } = await authClient.updateUser({
      name,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("নাম সফলভাবে আপডেট হয়েছে!");
    router.push("/");
  };

  return (
    <div className="mx-auto w-full max-w-md px-4 py-10">
      <div className="rounded-3xl border border-emerald-900/50 bg-gradient-to-br from-[#10251b] via-[#0d1914] to-[#101713] p-6 shadow-xl sm:p-8">
        <h1 className="text-2xl font-bold text-white">
          নাম পরিবর্তন করুন
        </h1>

        <p className="mt-2 text-sm text-emerald-100/60">
          আপনার প্রোফাইলের নাম আপডেট করুন।
        </p>

        <Form
          onSubmit={onSubmit}
          className="mt-6 flex w-full flex-col gap-5"
        >
          <TextField
            isRequired
            name="name"
            defaultValue={user?.name}

          >
            <Label className="mb-2 text-sm font-medium text-emerald-50">
              আপনার নাম
            </Label>

            <Input
              name="name"
               placeholder={user?.name}
              
              autoComplete="name"
              className="w-full rounded-xl border border-emerald-900/80 bg-[#09120d] px-4 py-3 text-sm text-white outline-none placeholder:text-emerald-100/30 focus:border-emerald-400"
            />

            <FieldError className="mt-1 text-xs text-red-400" />
          </TextField>

          <Button
            type="submit"
            className="mt-1 w-full rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-lime-500 py-3.5 font-semibold text-[#06120a] shadow-lg transition hover:brightness-110"
          >
            নাম আপডেট করুন
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditPage;