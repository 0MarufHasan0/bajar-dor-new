
"use client";

import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { redirect } from "next/navigation";

import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

export default function SignIn() {
  const [isVisible, setIsVisible] = useState(false);
      const handleSignGoogle = async() => {
  const data = await authClient.signIn.social({
    provider: "google",
  
});
    }

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password ,
      callbackURL: "/",
    });

    if (data) {
    toast.success("সফলভাবে লগইন হয়েছে!");
      redirect("/");
    }

    if (error) {
      toast.error("ইমেইল অথবা পাসওয়ার্ড সঠিক নয়!");
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-green-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-600/15 blur-[130px]" />

      {/* Login Card */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-[#10251b] via-[#0d1914] to-[#101713] p-6 shadow-[0_25px_100px_rgba(0,0,0,0.5)] sm:p-9">
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-400/10 blur-[80px]" />

        {/* Heading */}
        <div className="relative mb-8 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5m5 5H3"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            স্বাগতম!
          </h1>

          <p className="mt-3 text-sm leading-6 text-emerald-100/60">
            আপনার অ্যাকাউন্টে লগইন করুন এবং সব পণ্যের
            <br className="hidden sm:block" /> বিস্তারিত দাম দেখে নিন।
          </p>
        </div>

        {/* Login Form */}
        <Form
          onSubmit={onSubmit}
          className="relative flex w-full flex-col gap-5"
        >
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) =>
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                ? null
                : "সঠিক ইমেইল ঠিকানা লিখুন।"
            }
          >
            <Label className="mb-2 text-sm font-medium text-emerald-50">
              ইমেইল ঠিকানা
            </Label>

            <Input
              placeholder="you@example.com"
              autoComplete="email"
              className="w-full rounded-xl border border-emerald-900/80 bg-[#09120d] px-4 py-3 text-sm text-white outline-none transition placeholder:text-emerald-100/30 hover:border-emerald-700 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10"
            />

            <FieldError className="mt-1 text-xs text-red-400" />
          </TextField>

          <TextField
            isRequired
            name="password"
            validate={(value) =>
              value.length > 0 ? null : "পাসওয়ার্ড লিখুন।"
            }
          >
            <div className="mb-2 flex items-center justify-between">
              <Label className="text-sm font-medium text-emerald-50">
                পাসওয়ার্ড
              </Label>

            </div>

            <InputGroup>
              <InputGroup.Input
                type={isVisible ? "text" : "password"}
                placeholder="আপনার পাসওয়ার্ড লিখুন"
              />

              <InputGroup.Suffix>
                <button
                  type="button"
                  onClick={() => setIsVisible(!isVisible)}
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  className="text-muted hover:text-foreground p-1 focus:outline-none"
                >
                  {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </InputGroup.Suffix>
            </InputGroup>

            <FieldError className="mt-1 text-xs text-red-400" />
          </TextField>

            <Button
      type="submit"
      className="mt-1 w-full rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-lime-500 py-3.5 font-semibold text-[#06120a] shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
    >
      লগইন করুন 
    </Button>

        </Form>

        {/* Divider */}
        <div className="my-7 flex items-center gap-4">
          <div className="h-px flex-1 bg-emerald-900/80" />
          <span className="text-xs font-medium text-emerald-100/50">
            অথবা, অন্যভাবে চালিয়ে যান
          </span>
          <div className="h-px flex-1 bg-emerald-900/80" />
        </div>

        {/* Social Login */}
        <div className="grid  gap-3">
          {/* Google */}
          <Button
            type="button"
            variant="secondary"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-900/80 bg-emerald-950/40 py-3 text-sm font-medium text-white transition hover:border-emerald-500/50 hover:bg-emerald-900/40"
           onClick={handleSignGoogle}
          >
            <svg
              viewBox="0 0 48 48"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 3.1 13.22l7.98 6.19C13 13.72 18.1 9.5 24 9.5Z"
                transform="translate(0 4)"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 38.04 46.98 31.89 46.98 24.55Z"
              />
              <path
                fill="#FBBC05"
                d="M10.08 28.59A14.4 14.4 0 0 1 9.3 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.53 2.58 10.78l7.5-6.19Z"
                transform="translate(1 0)"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.73-6c-2.14 1.44-4.88 2.3-8.17 2.3-5.9 0-10.9-4.22-12.7-9.91l-7.98 6.19C6.7 42.62 14.62 48 24 48Z"
              />
            </svg>
            Google
          </Button>

        </div>

        {/* Sign Up Link */}
        <p className="mt-7 text-center text-sm text-emerald-100/60">
          নতুন অ্যাকাউন্ট নেই?{" "}
          <a
            href="/sign-up"
            className="font-semibold text-emerald-400 transition hover:text-emerald-300 hover:underline"
          >
            সাইন আপ করুন
          </a>
        </p>

        <p className="mt-6 text-center text-xs leading-5 text-emerald-100/35">
          নিরাপদে লগইন করুন এবং আপনার কেনাকাটা চালিয়ে যান।
        </p>
      </div>
    </main>
  );
}
