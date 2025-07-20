"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Top Nav */}
      <nav className="flex justify-between items-center px-8 md:px-20 py-8">
        <div className="text-2xl font-bold tracking-tight text-gray-900">
          ZerO World
        </div>
        <Link
          href="/auth/login"
          className="text-lg font-medium text-gray-900 hover:underline hover:underline-offset-4 transition"
        >
          Sign In
        </Link>
      </nav>

      {/* Main Section */}
      <main className="flex flex-1 flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 gap-8 md:gap-0">
        {/* Left: Text & CTA */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Make sustainability <br /> everyone’s <br /> responsibility
          </h1>
          <button className="px-10 py-4 rounded-md bg-green-700 text-white text-xl font-semibold shadow hover:bg-green-800 transition mb-8">
            <Link href="/auth/signup">Sign Up</Link>
          </button>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex items-center justify-center w-full max-w-lg">
          <DotLottieReact
            src="https://lottie.host/020db42f-4804-4f0c-bc4b-9d68034f6997/S737oajjBW.lottie"
            width={500}
            height={500}
            loop
            autoplay
          />
        </div>
      </main>
    </div>
  );
}
