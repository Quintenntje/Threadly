"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setIsLoading(true);

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

    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
      <h1 className="text-4xl font-bold mb-4">Forgot Password</h1>
      <p className="text-gray-600 mb-4 text-center">
        Enter your email address and we'll send you a link to reset your
        password.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md mx-auto"
      >
        <Input
          type="email"
          placeholder="Email"
          value={email}
          className={`${emailError ? "border-red-500" : ""}`}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

        {isSubmitted && (
          <p className="text-green-500 text-sm">
            We've sent a password reset link to {email}
          </p>
        )}

        <Button isLoading={isLoading} disabled={isLoading} variant="primary">
          Send Reset Link
        </Button>
      </form>
      <p className="text-sm text-gray-500">
        Remember your password?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
