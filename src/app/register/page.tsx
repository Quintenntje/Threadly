"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setFirstNameError("");
    setLastNameError("");

    if (firstName.length === 0) {
      setFirstNameError("Please fill in first name");
      setIsLoading(false);
      return;
    }

    if (lastName.length === 0) {
      setLastNameError("Please fill in last name");
      setIsLoading(false);
      return;
    }

    if (email.length === 0) {
      setEmailError("Please fill in email");
      setIsLoading(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email");
      setIsLoading(false);
      return;
    }

    if (password.length === 0) {
      setPasswordError("Please fill in password");
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      setIsLoading(false);
      return;
    }

    if (confirmPassword.length === 0) {
      setConfirmPasswordError("Please confirm your password");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, firstName, lastName }),
    });

    console.log(response);

    if (!response.ok) {
      const errorData = await response.json();
      setIsLoading(false);
      setEmailError(errorData.message);
      return;
    }

    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
      <h1 className="text-4xl font-bold mb-4">Register</h1>
      <form
        method="POST"
        onSubmit={handleRegister}
        className="flex flex-col gap-4 w-full max-w-md mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              className={`${firstNameError ? "border-red-500" : ""}`}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {firstNameError && (
              <p className="text-red-500 text-sm">{firstNameError}</p>
            )}
          </div>
          <div>
            <Input
              type="text"
              placeholder="Last Name"
              value={lastName}
              className={`${lastNameError ? "border-red-500" : ""}`}
              onChange={(e) => setLastName(e.target.value)}
            />
            {lastNameError && (
              <p className="text-red-500 text-sm">{lastNameError}</p>
            )}
          </div>
        </div>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          className={`${emailError ? "border-red-500" : ""}`}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

        <Input
          type="password"
          placeholder="Password"
          value={password}
          className={`${passwordError ? "border-red-500" : ""}`}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <p className="text-red-500 text-sm">{passwordError}</p>
        )}

        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          className={`${confirmPasswordError ? "border-red-500" : ""}`}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {confirmPasswordError && (
          <p className="text-red-500 text-sm">{confirmPasswordError}</p>
        )}

        <Button isLoading={isLoading} disabled={isLoading} variant="primary">
          Register
        </Button>
      </form>
      <p className="text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
