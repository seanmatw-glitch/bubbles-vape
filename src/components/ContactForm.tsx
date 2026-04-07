"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setSubmitted(false);
    }, 2500);
  }

  return (
    <>
      <section id="contact" className="py-20 px-6 bg-soft-periwinkle/20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/drip-mark.png"
              alt=""
              width={80}
              height={100}
              className="w-[35px] sm:w-[45px] h-auto opacity-30 mix-blend-multiply"
            />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-periwinkle mb-8">
            Contact Us
          </h2>
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 rounded-xl bg-periwinkle text-white font-bold text-lg hover:bg-soft-periwinkle hover:text-gray-800 transition-colors shadow-md hover:shadow-lg cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* Contact modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-[slideUp_0.4s_ease-out]">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 cursor-pointer"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="bg-gradient-to-r from-sunrise via-coral to-periwinkle h-2" />

            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="text-5xl mb-4 text-jade">&#10003;</div>
                  <p className="font-[family-name:var(--font-display)] text-2xl text-periwinkle font-bold">
                    Thank you!
                  </p>
                  <p className="text-gray-600 mt-2">
                    We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-periwinkle mb-6 text-center">
                    Contact Us
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="c-firstName" className="block text-sm font-semibold text-gray-700 mb-1">
                          First Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="c-firstName"
                          name="firstName"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="c-lastName" className="block text-sm font-semibold text-gray-700 mb-1">
                          Last Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="c-lastName"
                          name="lastName"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="c-email" className="block text-sm font-semibold text-gray-700 mb-1">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="c-email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="c-subject" className="block text-sm font-semibold text-gray-700 mb-1">
                        Subject <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="c-subject"
                        name="subject"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="c-message" className="block text-sm font-semibold text-gray-700 mb-1">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="c-message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 outline-none transition-colors resize-none text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-periwinkle text-white font-bold text-base hover:bg-soft-periwinkle hover:text-gray-800 transition-colors shadow-md cursor-pointer"
                    >
                      Submit
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
