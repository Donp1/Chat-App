"use client";
import { useEffect } from "react";
import { db } from "@/lib/db";
import { useAuth, useUser } from "@clerk/nextjs";
const Dashboard = () => {
  const { isSignedIn, userId } = useAuth();
  const { user } = useUser();
  useEffect(() => {
    (async () => {
      if (isSignedIn) {
        const dbUser = (await db.get(`user:${user?.emailAddress}`)) || null;
        console.log("db user:", user);

        if (dbUser == null || dbUser == undefined) {
          const userInfo = {
            email: user?.emailAddress || "",
            name: user?.firstName || "",
            picture: user?.imageUrl || "",
            createdAt: new Date().toISOString(),
          };
          await db.set("user", JSON.stringify(userInfo));
        }
      }
    })();
  }, [isSignedIn, userId, user]);
  return <div>Dashboard</div>;
};

export default Dashboard;
