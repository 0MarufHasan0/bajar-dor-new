
"use client";

import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff } from "lucide-react";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


;

export default function SignUp() {
    const [isVisible, setIsVisible] = useState(false);
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);
    const router = useRouter();

// google login

   const handleSignGoogle = async() => {
   const data = await authClient.signIn.social({
    provider: "google",
  
});

 toast.success("গুগল দিয়ে সফলভাবে লগইন হয়েছে!");
    }

   



    
    const onSubmit = async(e)=>{
         e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const user = Object.fromEntries(formData.entries())
      
      if (user.password !== user.confirmPassword) {
          toast.error("দুইটি পাসওয়ার্ড মিলছে না!");
         return;
        }

    const { data, error } = await authClient.signUp.email({
          name: user.name,
          email: user.email,
          password: user.password,
          callbackURL: "/",
       });

        //  console.log('data' , data)

        
             if (error) {
             const message = error.message;

           if (message.includes("already exists")) {
             toast.error("এই ইমেইল দিয়ে আগে থেকেই অ্যাকাউন্ট আছে।");
           } else if (message.includes("Invalid email")) {
             toast.error("সঠিক ইমেইল ঠিকানা লিখুন।");
           } else if (message.includes("password")) {
             toast.error("পাসওয়ার্ডটি সঠিক নয় অথবা গ্রহণযোগ্য নয়।");
           } else {
             toast.error("অ্যাকাউন্ট তৈরি করা যায়নি। আবার চেষ্টা করুন।");
           }
         
           return;
         }

    if(data){
    
        toast.success('অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!', {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: false,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
       
         });
         
         router.replace('/')
             }

}

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden  px-4 py-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-green-600/15 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-600/15 blur-[130px]" />

      {/* Signup Card */}
   
<div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-[#10251b] via-[#0d1914] to-[#101713] p-6 shadow-[0_25px_100px_rgba(0,0,0,0.5)] sm:p-9">

  {/* Decorative Glow */}
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
          d="M5 12.5l4.5 4.5L19 7"
        />
      </svg>
    </div>

    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
      অ্যাকাউন্ট তৈরি করুন
    </h1>

    <p className="mt-3 text-sm leading-6 text-emerald-100/60">
      বিনামূল্যে সাইন আপ করুন এবং সব পণ্যের
      <br className="hidden sm:block" />
      বিস্তারিত দাম দেখে নিন।
    </p>
  </div>

  {/* Signup Form */}
  <Form onSubmit={onSubmit} className="relative flex w-full flex-col gap-5">

    {/* Name */}
    <TextField
      isRequired
      name="name"
      validate={(value) =>
        value.trim().length < 2
          ? "নাম কমপক্ষে ২ অক্ষরের হতে হবে।"
          : null
      }
    >
      <Label className="mb-2 text-sm font-medium text-emerald-50">
        আপনার নাম
      </Label>

      <Input
        placeholder="যেমন: রহিম উদ্দিন"
        autoComplete="name"
        className="w-full rounded-xl border border-emerald-900/80 bg-[#09120d] px-4 py-3 text-sm text-white outline-none transition placeholder:text-emerald-100/30 hover:border-emerald-700 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10"
      />

      <FieldError className="mt-1 text-xs text-red-400" />
    </TextField>

    {/* Email */}
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

    {/* Password */}
    <TextField
      isRequired
      name="password"
      type="password"
      validate={(value) =>
        value.length < 4
          ? "পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে।"
          : null
      }
    >
      <Label className="mb-2 text-sm font-medium text-emerald-50">
        পাসওয়ার্ড
      </Label>

      {/* <Input
        placeholder="কমপক্ষে ৪ অক্ষর লিখুন"
        autoComplete="new-password"
        className="w-full rounded-xl border border-emerald-900/80 bg-[#09120d] px-4 py-3 text-sm text-white outline-none transition placeholder:text-emerald-100/30 hover:border-emerald-700 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10"
      /> */}

       <InputGroup>
      <InputGroup.Input
       name="password"
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

    {/* Password confirm */}
    <TextField
      isRequired
      name="confirmPassword"
      type="password"
      validate={(value) =>
        value.length < 4
          ? "পাসওয়ার্ড মিলছে না"
          : null
      }
    >
      <Label className="mb-2 text-sm font-medium text-emerald-50">
       পাসওয়ার্ড নিশ্চিত করুন
      </Label>

      {/* <Input
        placeholder="কমপক্ষে ৪ অক্ষর লিখুন"
        autoComplete="new-password"
        className="w-full rounded-xl border border-emerald-900/80 bg-[#09120d] px-4 py-3 text-sm text-white outline-none transition placeholder:text-emerald-100/30 hover:border-emerald-700 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10"
      /> */}

       <InputGroup>
      <InputGroup.Input
        type={isConfirmVisible ? "text" : "password"}
        placeholder="আপনার পাসওয়ার্ড লিখুন"
      />
      <InputGroup.Suffix>
        <button
          type="button"
          onClick={() => setIsConfirmVisible(!isConfirmVisible)}
          aria-label={isConfirmVisible ? "Hide password" : "Show password"}
          className="text-muted hover:text-foreground p-1 focus:outline-none"
        >
          {isConfirmVisible ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </InputGroup.Suffix>
    </InputGroup>

      <FieldError className="mt-1 text-xs text-red-400" />
    </TextField>

    

    {/* Signup Button */}
    <Button
      type="submit"
      className="mt-1 w-full rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-lime-500 py-3.5 font-semibold text-[#06120a] shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
    >
      অ্যাকাউন্ট তৈরি করুন
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

  {/* Google & GitHub Login */}
  <div className="grid gap-3">

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

  {/* Sign In Link */}
  <p className="mt-7 text-center text-sm text-emerald-100/60">
    আগে থেকেই অ্যাকাউন্ট আছে?{" "}
    <Link
      href="/sign-in"
      className="font-semibold text-emerald-400 transition hover:text-emerald-300 hover:underline"
    >
      সাইন ইন করুন
    </Link>
  </p>

  {/* Terms */}
  <p className="mt-6 text-center text-xs leading-5 text-emerald-100/35">
    সাইন আপ করার মাধ্যমে আপনি আমাদের শর্তাবলি ও
    গোপনীয়তা নীতিতে সম্মত হচ্ছেন।
  </p>
</div>
    </main>
  );
    }
