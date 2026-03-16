"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Package, Heart, Calendar, LogOut, ShieldCheck, UserCircle } from "lucide-react";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // 1. Protect the route - if not logged in, kick them to the login page
  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  // 2. Show a clean loading state while checking the session
  if (status === "loading") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-pulse text-[#C9A84C] tracking-widest uppercase text-sm">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 min-h-[70vh]">
      
      {/* Header Section */}
      <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6 gap-4">
        <div>
          <h1 className="text-3xl font-light text-gray-900 tracking-wide mb-2" style={{ fontFamily: "var(--font-serif)" }}>
            My <span className="text-[#C9A84C]">Account</span>
          </h1>
          <p className="text-gray-500 text-sm">
            Welcome back, {session?.user?.name || "Guest"}
          </p>
        </div>
        
        {/* Logout Button */}
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="inline-flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-red-600 transition-colors px-4 py-2 border border-gray-200 rounded-md hover:border-red-100 hover:bg-red-50"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Profile Info Card */}
        <div className="bg-white p-6 border border-gray-100 shadow-sm rounded-lg flex flex-col">
          <div className="flex items-center gap-3 mb-4 text-[#C9A84C]">
            <UserCircle className="w-6 h-6" />
            <h2 className="text-lg font-medium text-gray-900">Profile Details</h2>
          </div>
          <div className="space-y-2 text-sm text-gray-600 flex-grow">
            <p><span className="font-medium text-gray-900">Name:</span> {session?.user?.name}</p>
            <p><span className="font-medium text-gray-900">Email:</span> {session?.user?.email}</p>
          </div>
        </div>

        {/* Orders Link */}
        <Link href="/account/orders" className="bg-white p-6 border border-gray-100 shadow-sm rounded-lg flex flex-col hover:border-[#C9A84C] transition-colors group">
          <div className="flex items-center gap-3 mb-4 text-gray-400 group-hover:text-[#C9A84C] transition-colors">
            <Package className="w-6 h-6" />
            <h2 className="text-lg font-medium text-gray-900">My Orders</h2>
          </div>
          <p className="text-sm text-gray-500">Track your purchases, returns, or buy things again.</p>
        </Link>

        {/* Appointments Link */}
        <Link href="/account/appointments" className="bg-white p-6 border border-gray-100 shadow-sm rounded-lg flex flex-col hover:border-[#C9A84C] transition-colors group">
          <div className="flex items-center gap-3 mb-4 text-gray-400 group-hover:text-[#C9A84C] transition-colors">
            <Calendar className="w-6 h-6" />
            <h2 className="text-lg font-medium text-gray-900">Appointments</h2>
          </div>
          <p className="text-sm text-gray-500">Manage your store visits and video consultations.</p>
        </Link>

        {/* Wishlist Link */}
        <Link href="/account/wishlist" className="bg-white p-6 border border-gray-100 shadow-sm rounded-lg flex flex-col hover:border-[#C9A84C] transition-colors group">
          <div className="flex items-center gap-3 mb-4 text-gray-400 group-hover:text-[#C9A84C] transition-colors">
            <Heart className="w-6 h-6" />
            <h2 className="text-lg font-medium text-gray-900">Wishlist</h2>
          </div>
          <p className="text-sm text-gray-500">View and manage your saved and favorite items.</p>
        </Link>

        {/* 👑 Admin Panel Link (ONLY shows up if the user is an Admin) */}
        {session?.user?.role === "ADMIN" && (
          <Link href="/admin" className="bg-[#fdf8ec] p-6 border border-[#f2d98a] shadow-sm rounded-lg flex flex-col hover:bg-[#fcefc7] transition-colors group">
            <div className="flex items-center gap-3 mb-4 text-[#C9A84C]">
              <ShieldCheck className="w-6 h-6" />
              <h2 className="text-lg font-medium text-gray-900">Admin Dashboard</h2>
            </div>
            <p className="text-sm text-gray-700">Access user data, inventory, and export reports.</p>
          </Link>
        )}

      </div>
    </div>
  );
}