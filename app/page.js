import React from "react";
import Image from "next/image";
import LoginButton from "@/components/LoginButton";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Home = () => {
  console.log(process.env.UPSTASH_URL);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-10">
      <Image
        width={100}
        height={100}
        className="w-[200px] h-[100px]"
        src="/images/chatlogo.PNG"
        alt="logo"
      />
      <LoginButton />
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Home;
