"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 px-6 bg-soft-periwinkle/20">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-periwinkle mb-10 text-center">
          Contact Us
        </h2>

        {submitted ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-5xl mb-4">&#10003;</div>
            <p className="font-[family-name:var(--font-display)] text-2xl text-periwinkle font-bold">
              Thank you!
            </p>
            <p className="text-gray-600 mt-2">
              We&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  First Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Last Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Subject <span className="text-red-400">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-periwinkle text-white font-bold text-lg hover:bg-soft-periwinkle transition-colors shadow-md hover:shadow-lg cursor-pointer"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
