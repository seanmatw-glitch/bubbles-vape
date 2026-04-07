"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="join-us" className="py-20 px-6 bg-gradient-to-b from-soft-sunrise/30 to-ivory">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-periwinkle mb-4">
          Join the Bubbs Crew
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Sign up for exclusive drops, flavor announcements, and special offers.
        </p>

        {submitted ? (
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="text-5xl mb-4 text-jade">&#10003;</div>
            <p className="font-[family-name:var(--font-display)] text-2xl text-periwinkle font-bold">
              You&apos;re in!
            </p>
            <p className="text-gray-600 mt-2">
              Welcome to the Bubbs Crew. Stay tuned for updates.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="nl-firstName"
                  className="block text-sm font-semibold text-gray-700 mb-2 text-left"
                >
                  First Name <span className="text-coral">*</span>
                </label>
                <input
                  id="nl-firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="nl-lastName"
                  className="block text-sm font-semibold text-gray-700 mb-2 text-left"
                >
                  Last Name
                </label>
                <input
                  id="nl-lastName"
                  name="lastName"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="nl-email"
                className="block text-sm font-semibold text-gray-700 mb-2 text-left"
              >
                Email <span className="text-coral">*</span>
              </label>
              <input
                id="nl-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="nl-birthday"
                className="block text-sm font-semibold text-gray-700 mb-2 text-left"
              >
                Birthday <span className="text-gray-400 font-normal">(optional — for special offers)</span>
              </label>
              <input
                id="nl-birthday"
                name="birthday"
                type="date"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-sunrise text-white font-bold text-lg hover:bg-soft-sunrise hover:text-gray-800 transition-colors shadow-md hover:shadow-lg cursor-pointer"
            >
              Sign Me Up
            </button>

            <p className="text-xs text-gray-400 mt-2">
              No spam, ever. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
