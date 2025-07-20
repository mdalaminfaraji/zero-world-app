"use client";
import React from "react";

function ProgressCircle({ percent }: { percent: number }) {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className="block mx-auto">
      <circle
        stroke="#E5E7EB"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#276749"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset, transition: "stroke-dashoffset 0.5s" }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="1.5rem"
        fontWeight={700}
        fill="#222"
      >
        {percent}%
      </text>
    </svg>
  );
}

export default function DashboardPage() {
  return (
    <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      {/* <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
        <h1 className="text-3xl font-bold text-green-800">ZerO World</h1>
        <button className="text-lg font-medium text-green-900 hover:underline">
          Log out
        </button>
      </header> */}

      {/* Greeting */}
      <section className="mb-10">
        <h2 className="text-4xl font-extrabold mb-2">Welcome back!</h2>
        <p className="text-gray-600 text-lg">
          Let&apos;s continue your learning journey.
        </p>
      </section>

      {/* Progress Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center gap-6">
          <ProgressCircle percent={60} />
          <div>
            <div className="text-xl font-bold">Your Progress</div>
            <p className="text-gray-600">6 out of 10 modules completed</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h4 className="text-lg font-semibold mb-2">Daily Tip</h4>
          <p className="text-gray-600">
            Consistency is key. Spend at least 20 minutes learning every day!
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h4 className="text-lg font-semibold mb-2">Achievements</h4>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Completed 3 Certifications</li>
            <li>Active 15 Days in a Row</li>
          </ul>
        </div>
      </section>

      {/* Learning Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Resume Learning */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Resume Learning</h3>
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-3 mb-6">
            <div className="text-lg font-medium">Sustainable Energy</div>
            <button className="bg-green-700 text-white py-2 px-6 rounded-lg shadow hover:bg-green-800 transition font-semibold">
              Continue
            </button>
          </div>
          <button className="bg-green-700 text-white py-3 px-6 rounded-lg shadow hover:bg-green-800 transition font-semibold w-full md:w-auto">
            View All Courses
          </button>
        </div>

        {/* Recommended Courses */}
        <div className="col-span-1 lg:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Recommended For You</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Circular Economy",
                desc: "Understand how to design waste out of the system.",
              },
              {
                title: "Green Building",
                desc: "Learn sustainable construction practices.",
              },
              {
                title: "Carbon Footprint",
                desc: "Reduce emissions through smarter decisions.",
              },
              {
                title: "Climate Policy",
                desc: "Get insights into environmental regulations.",
              },
              {
                title: "Renewable Energy",
                desc: "Explore solar, wind, and beyond.",
              },
              {
                title: "Urban Sustainability",
                desc: "Make cities more eco-friendly.",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-3"
              >
                <div className="text-lg font-medium">{course.title}</div>
                <p className="text-gray-600">{course.desc}</p>
                <button className="bg-green-700 text-white py-2 px-6 rounded-lg shadow hover:bg-green-800 transition font-semibold w-full">
                  Start Course
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="text-center text-gray-500 text-sm mt-10">
        <p>© 2025 ZerO World. All rights reserved.</p>
      </footer>
    </div>
  );
}
