import Image from "next/image";

export default function StoreLocator() {
  return (
    <section
      id="find-us"
      className="py-20 px-6 bg-gradient-to-b from-soft-jade/40 to-soft-periwinkle/30"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-periwinkle mb-6">
          Find Us at a Dispensary Near You!
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Bubbles is available at select dispensaries. Use the locator below to
          find your nearest retailer.
        </p>

        {/* Hoodie embed placeholder */}
        <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[300px] flex items-center justify-center">
          <div className="text-center text-gray-400">
            <svg
              className="mx-auto mb-4 w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="font-semibold text-lg">Store Locator</p>
            <p className="text-sm mt-1">
              Hoodie embed or custom map goes here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
