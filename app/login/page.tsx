"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // 1. Added Link import

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    const session = await fetch("/api/auth/session").then((r) => r.json());

    if (session?.user?.role === "ADMIN") {
      router.push("/admin");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="max-w-md mx-auto py-20 px-4">
      <h1 
        className="text-3xl font-light mb-8 text-center" 
        style={{ fontFamily: "var(--font-serif)", color: "#1a1a1a" }}
      >
        Login
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors"
        />

        {error && <p className="text-sm text-red-600 text-center">{error}</p>}

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-[#C9A84C] text-white font-medium tracking-widest uppercase py-3 hover:bg-[#b5953f] transition-colors disabled:opacity-70"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* 2. Added Signup Link Section */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#C9A84C] hover:underline font-medium ml-1">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}