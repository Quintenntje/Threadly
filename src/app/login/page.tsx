"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setIsLoading(true);

    setEmail(email.toLowerCase());

    if (email.length === 0) {
      setEmailError("Please fill in email");
      setIsLoading(false);
      return;
    }

    if (password.length === 0) {
      setPasswordError("Please fill in password");
      setIsLoading(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email");
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");

      setIsLoading(false);
      return;
    }

    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      setIsLoading(false);
      setEmailError(errorData.message);
      return;
    }

    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-full max-w-md mx-auto"
      >
        <Input
          type="text"
          placeholder="Email"
          value={email}
          className={`${emailError ? "border-red-500" : ""}`}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

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
        <Button isLoading={isLoading} disabled={isLoading} variant="primary">
          Login
        </Button>
      </form>
      <p className="text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
