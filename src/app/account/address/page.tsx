"use client";

import { checkUserAuth } from "@/lib/auth";
import { useEffect, useState } from "react";
import { User as UserType } from "@/types/user";
import { redirect } from "next/navigation";
import Container from "@/components/Container";
import Button from "@/components/Button";
import AccountNavLink from "@/components/accountNav/AccountNavLink";
import AccountTitle from "@/components/AccountTitle";

interface AddressType {
  id: string;
  userId: string;
  address: string;
  city: string;
  postalCode: string;
  number: string;
}

const Address = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [address, setAddress] = useState<AddressType[]>([]);

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

  useEffect(() => {
    const fetchAddress = async () => {
      if (!user) return;

      try {
        const response = await fetch(`/api/address/${user.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setAddress(data);
        } else {
          console.error("Failed to fetch address");
        }
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    };

    if (user) {
      fetchAddress();
    }
  }, [user]);

  return (
    <div>
      <AccountTitle>Address</AccountTitle>
      <Container className="flex items-center justify-center flex-col max-w-[400px] gap-4 p-8 border border-gray-200">
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium">
            {user?.firstName} {user?.lastName}
          </p>
          {address.length > 0 ? (
            <>
              {address.map((address) => (
                <div key={address.id}>
                  <p>{address.address}</p>
                  <p>{address.city}</p>
                  <p>{address.postalCode}</p>
                </div>
              ))}
            </>
          ) : (
            <p>No address found</p>
          )}
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
