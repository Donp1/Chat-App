"use client";

import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { SignInButton, SignedOut } from "@clerk/nextjs";

const LoginButton = () => {
  return (
    <SignedOut>
      <SignInButton mode="modal">
        <div className="bg-black text-white flex items-center gap-2 px-3 py-2 rounded-md font-medium hover:cursor-pointer">
          <FaGoogle size={30} className="text-red-600" />
          <span>Log in With Google</span>
        </div>
      </SignInButton>
    </SignedOut>
  );
};

export default LoginButton;
