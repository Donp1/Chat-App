"use client";
import React, { useLayoutEffect } from "react";
import { useSession } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useStore } from "@/lib/store";
const CheckAuth = () => {
  const { isLoaded, isSignedIn, session } = useSession();
  const router = useRouter();
  const store = useStore();

  useLayoutEffect(() => {
    (async () => {
      if (isLoaded) {
        if (!isSignedIn) {
          router.replace("/");
        } else {
          store.setUser(session?.user);
          router.replace("/dashboard");
        }
      }
    })();
  }, [isSignedIn]);
  return <></>;
};

export default CheckAuth;
