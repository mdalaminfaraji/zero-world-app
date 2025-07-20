"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const signupSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  function onSubmit(data: SignupFormValues) {
    console.log(data);
    // Demo: just alert the data
    alert(`Signed up!\nName: ${data.fullName}\nEmail: ${data.email}`);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcfbf7] px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-transparent rounded-xl flex flex-col gap-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
          Create an account
        </h1>
        <div>
          <input
            {...register("fullName")}
            type="text"
            placeholder="Full name"
            className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-green-700 mb-1 bg-white"
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">
              {errors.fullName.message}
            </span>
          )}
        </div>
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
        <div>
          <input
            type="text"
            placeholder="At least 8 characters"
            className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg bg-white cursor-not-allowed opacity-70"
            disabled
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 text-white text-xl font-semibold py-4 rounded-lg shadow hover:bg-green-800 transition"
          // disabled={isSubmitting}
        >
          Sign Up
        </button>
        <p className="text-center text-gray-600 text-base mt-2">
          By signing up, you agree to the{" "}
          <a href="#" className="underline font-medium text-gray-900">
            Terms of Service
          </a>
        </p>
        <p className="text-center text-gray-700 text-lg mt-2">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="font-bold text-green-900 hover:underline"
          >
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}
