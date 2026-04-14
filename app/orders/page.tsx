import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Package } from "lucide-react";

export default async function OrdersPage() {
  // 1. Check if user is logged in
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // 2. Fetch only the orders belonging to this user
  const orders = await prisma.order.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 min-h-[70vh]">
      <div className="mb-10 border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-light text-gray-900 tracking-wide mb-2" style={{ fontFamily: "var(--font-serif)" }}>
          My <span className="text-[#C9A84C]">Orders</span>
        </h1>
        <p className="text-gray-500 text-sm">View and track your previous purchases.</p>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 border border-gray-100 rounded-lg">
          <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-medium text-gray-900 mb-2">No orders found</h2>
          <p className="text-gray-500 mb-6 text-sm">You haven't placed any B2B orders yet.</p>
          <Link href="/collections" className="bg-[#C9A84C] text-white px-6 py-3 text-xs tracking-widest uppercase hover:bg-[#b5953e] transition-colors rounded-sm">
            Explore Collections
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border border-gray-200 p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Order #{order.id.slice(-8).toUpperCase()}</p>
                <p className="font-medium text-gray-900">₹{order.totalAmount.toLocaleString()}</p>
                <p className="text-xs text-gray-400 mt-1">{order.createdAt.toLocaleDateString()}</p>
              </div>
              <span className="px-3 py-1 text-[10px] uppercase tracking-wider bg-gray-100 text-gray-600 rounded-full">
                {order.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}