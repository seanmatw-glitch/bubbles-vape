"use client";

import { useState, useEffect, type FormEvent } from "react";
import Image from "next/image";

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [smsOptIn, setSmsOptIn] = useState(false);

  useEffect(() => {
    function startTimer() {
      setTimeout(() => setVisible(true), 5000);
    }
    window.addEventListener("ageVerified", startTimer);
    return () => window.removeEventListener("ageVerified", startTimer);
  }, []);

  function handleClose() {
    setVisible(false);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setVisible(false);
    }, 2500);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-[slideUp_0.4s_ease-out]">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 cursor-pointer"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Header accent */}
        <div className="bg-gradient-to-r from-sunrise via-coral to-periwinkle h-2" />

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="text-5xl mb-4 text-jade">&#10003;</div>
              <p className="font-[family-name:var(--font-display)] text-2xl text-periwinkle font-bold">
                You&apos;re in!
              </p>
              <p className="text-gray-600 mt-2">
                Welcome to the Bubbs Crew.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <Image
                  src="/images/logo-sunrise.png"
                  alt="BUBBLES"
                  width={120}
                  height={40}
                  className="h-10 w-auto mx-auto mb-4"
                />
                <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-periwinkle">
                  Join the Bubbs Crew
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Get exclusive drops, flavor news, and special offers delivered to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone number (for SMS updates)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors text-sm"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={smsOptIn}
                    onChange={(e) => setSmsOptIn(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 text-periwinkle focus:ring-periwinkle accent-periwinkle"
                  />
                  <span className="text-xs text-gray-500 leading-relaxed">
                    Yes, I&apos;d like to receive SMS updates about new flavors, drops, and promotions. Message &amp; data rates may apply. Reply STOP to unsubscribe.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-sunrise text-white font-bold text-base hover:bg-soft-sunrise hover:text-gray-800 transition-colors shadow-md cursor-pointer"
                >
                  Sign Me Up
                </button>

                <p className="text-center text-xs text-gray-400">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
