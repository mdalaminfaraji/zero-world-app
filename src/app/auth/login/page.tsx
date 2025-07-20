"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormValues) {
    // Demo: just alert the data
    alert(`Logged in!\nEmail: ${data.email}`);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcfbf7] px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-transparent rounded-xl flex flex-col gap-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
          Sign in
        </h1>
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-green-700 mb-1 bg-white"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-green-700 mb-1 bg-white"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 text-white text-xl font-semibold py-4 rounded-lg shadow hover:bg-green-800 transition"
          disabled={isSubmitting}
        >
          Sign In
        </button>
        <p className="text-center text-gray-700 text-lg mt-2">
          Don&apos;t have an account?{" "}
          <a
            href="/auth/signup"
            className="font-bold text-green-900 hover:underline"
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
