"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
const router = useRouter();

useEffect(() => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if (!isAuthenticated) {
    router.push('/login');
  }
}, [router]);
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <h2 className="text-8xl font-bold text-center">User Dashboard</h2>
      <p className="text-gray-600 text-center mt-2">Welcome to the dashboard</p>
    </div>
  );
}