"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const router = useRouter();

  // State to toggle between Login and Register tabs
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  // Form States
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessType: "Retailer", // Default matching the screenshot
    password: "",
  });

  // UI States
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // Handlers to update state when typing
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  const handleRegisterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });

  // ----------------------------------------
  // SUBMIT LOGIN
  // ----------------------------------------
  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMsg("");

    const res = await signIn("credentials", {
      redirect: false,
      email: loginForm.email,
      password: loginForm.password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    // Fetch session to check role
    const sessionRes = await fetch("/api/auth/session");
    const session = await sessionRes.json();

    if (session?.user?.role === "ADMIN") {
      router.push("/admin");
    } else {
      router.push("/");
    }
  };

  // ----------------------------------------
  // SUBMIT REGISTER
  // ----------------------------------------
  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMsg("");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: registerForm.contactPerson, // Map to DB 'name'
        email: registerForm.email,
        password: registerForm.password,
        companyName: registerForm.companyName,
        phone: registerForm.phone,
        businessType: registerForm.businessType,
      }),
    });

    if (res.ok) {
      setMsg("Registration successful! Please login.");
      // Auto-switch to the login tab after a delay
      setTimeout(() => setActiveTab("login"), 2000);
    } else {
      const errorText = await res.text();
      setError(
        errorText || "Registration failed. Email might already be in use.",
      );
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4 sm:px-6">
      {/* Optional: Add a subtle background accent or remove if you want pure white */}
      {/* <div className="absolute top-1/4 left-0 w-full h-64 bg-gray-50 -z-10" /> */}

      <div className="w-full max-w-md bg-white">
        {/* ==================== TAB HEADER ==================== */}
        <div className="flex border-b border-gray-100 mb-8">
          <button
            type="button"
            onClick={() => {
              setActiveTab("login");
              setError("");
              setMsg("");
            }}
            className={cn(
              "flex-1 py-4 text-sm tracking-widest transition-all duration-300 ease-in-out uppercase",
              activeTab === "login"
                ? "text-[#C9A84C] font-bold border-b-2 border-gray-900 -mb-[1px]" // Active: Dark text, underline
                : "text-gray-400 font-medium hover:text-gray-700", // Inactive
            )}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("register");
              setError("");
              setMsg("");
            }}
            className={cn(
              "flex-1 py-4 text-sm tracking-widest transition-all duration-300 ease-in-out uppercase",
              activeTab === "register"
                ? "text-[#C9A84C] font-bold border-b-2 border-gray-900 -mb-[1px]" // Active: Dark text, underline
                : "text-gray-400 font-medium hover:text-gray-700", // Inactive
            )}
          >
            Register
          </button>
        </div>

        {/* ==================== FORM CONTAINER ==================== */}
        <div className="px-2">
          {/* Status Messages */}
          {error && (
            <div className="mb-6 p-3 bg-red-50 text-red-600 text-[11px] tracking-wide text-center border border-red-100 rounded-sm uppercase">
              {error}
            </div>
          )}
          {msg && (
            <div className="mb-6 p-3 bg-green-50 text-green-700 text-[11px] tracking-wide text-center border border-green-100 rounded-sm uppercase">
              {msg}
            </div>
          )}

          {/* ==================== LOGIN TAB ==================== */}
          {activeTab === "login" && (
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email@company.com"
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  required
                  className="w-full border border-gray-200 px-4 py-3.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  required
                  className="w-full border border-gray-200 px-4 py-3.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm"
                />
              </div>

              {/* Forgot Password Link (Optional but good UX) */}
              <div className="flex justify-end mt-1">
                <button
                  type="button"
                  className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-[#C9A84C] transition-colors"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C9A84C] text-white font-bold tracking-widest uppercase py-4 hover:bg-[#b5953e] transition-colors disabled:opacity-70 mt-4 text-xs rounded-sm"
              >
                {loading ? "Logging in..." : "Sign In"}
              </button>
            </form>
          )}

          {/* ==================== REGISTER TAB ==================== */}
          {activeTab === "register" && (
            <form onSubmit={handleRegisterSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Company Name
                </label>
                <input
                  name="companyName"
                  type="text"
                  placeholder="Your Company Name"
                  value={registerForm.companyName}
                  onChange={handleRegisterChange}
                  required
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Contact Person
                </label>
                <input
                  name="contactPerson"
                  type="text"
                  placeholder="Your Full Name"
                  value={registerForm.contactPerson}
                  onChange={handleRegisterChange}
                  required
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email@company.com"
                  value={registerForm.email}
                  onChange={handleRegisterChange}
                  required
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Phone
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={registerForm.phone}
                  onChange={handleRegisterChange}
                  required
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Business Type
                </label>
                <select
                  name="businessType"
                  value={registerForm.businessType}
                  onChange={handleRegisterChange}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm bg-white"
                >
                  <option value="Retailer">Retailer</option>
                  <option value="Wholesaler">Wholesaler</option>
                  <option value="Distributor">Distributor</option>
                  <option value="Corporate">Corporate Buyer</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Create Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={registerForm.password}
                  onChange={handleRegisterChange}
                  required
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C9A84C] text-white font-bold tracking-widest uppercase py-4 hover:bg-[#b5953e] transition-colors disabled:opacity-70 mt-4 text-xs rounded-sm"
              >
                {loading ? "Processing..." : "Create Account"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
