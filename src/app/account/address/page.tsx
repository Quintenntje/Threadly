"use client";

import { checkUserAuth } from "@/lib/auth";
import { useEffect, useState } from "react";
import { User as UserType } from "@/types/user";
import { redirect } from "next/navigation";
import Container from "@/components/Container";
import Button from "@/components/Button";
import AccountNavLink from "@/components/accountNav/AccountNavLink";

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
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium">
            {user?.firstName} {user?.lastName}
          </p>
          <div className="flex gap-2 text-sm">
            <AccountNavLink href="/account/address/edit" isActive={true}>
              Edit
            </AccountNavLink>
            <AccountNavLink href="/account/address/delete" isActive={true}>
              Delete
            </AccountNavLink>
          </div>
        </div>
      </Container>

      <Container className="flex items-center justify-center">
        <Button>Add Address</Button>
      </Container>
    </div>
  );
};

export default Address;
