"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Courses", href: "/dashboard/courses" },
  { label: "Progress", href: "/dashboard/progress" },
  { label: "Profile", href: "/dashboard/profile" },
  { label: "Logout", href: "/auth/login" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fcfbf7] flex">
      {/* Sidebar for desktop & mobile */}
      <aside
        className={`fixed z-30 inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:w-56 md:flex md:flex-col  md:shadow-none`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200 md:justify-center">
          <span className="text-2xl font-bold text-green-800 tracking-tight">
            ZerO World
          </span>
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <span className="text-3xl">&times;</span>
          </button>
        </div>
        <nav className="flex flex-col gap-2 mt-8 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 px-4 rounded-lg text-lg font-medium text-gray-900 hover:bg-green-50 hover:text-green-800 transition"
              onClick={() => setSidebarOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Topbar for mobile */}
        <header className="flex items-center justify-between bg-white shadow-md px-4 py-4 md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-900 focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
          <span className="text-xl font-bold text-green-800 tracking-tight">
            ZerO World
          </span>
          <div className="w-8" /> {/* Spacer */}
        </header>
        <main className="flex-1 flex flex-col items-center px-4 py-6 md:px-10 md:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
