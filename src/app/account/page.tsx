"use client";
import { checkUserAuth } from "@/lib/auth";
import { User as UserType } from "@/types/user";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const Account = () => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await checkUserAuth();
      setUser(user);

      if (!user) {
        redirect("/login");
      }
    };
    fetchUser();
  }, []);

  return <div>Account</div>;
};

export default Account;
