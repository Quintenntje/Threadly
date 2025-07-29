"use client";

import { checkUserAuth } from "@/lib/auth";
import { useEffect, useState } from "react";
import { User as UserType } from "@/types/user";
import { redirect } from "next/navigation";
import Container from "@/components/Container";

const Address = () => {
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

  return (
    <div>
      <h1>Address</h1>
      <Container className="flex items-center justify-center flex-col max-w-[400px] gap-4 p-8 border border-gray-200">
        <p className="text-lg font-medium">
          {user?.firstName} {user?.lastName}
        </p>
      </Container>
    </div>
  );
};

export default Address;
