"use client";

import { useState } from "react";
import Image from "next/image";

function FlavorAccordion({
  name,
  description,
  defaultOpen = false,
}: {
  name: string;
  description: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 cursor-pointer text-left"
      >
        <span className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900 uppercase">
          {name}
        </span>
        <svg
          className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${open ? "" : "rotate-180"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

const products = [
  {
    image: "/images/cart-sativa.jpg",
    category: "Sativa Flavors",
    strain: "Sativa Flavors",
    strainColor: "bg-sunrise text-white",
    flavors: [
      {
        name: "Atomic Burst",
        description:
          "The classic combo of Cherry, Blue Raspberry, and Lime take you straight into the heart of summer. Bright, tangy, and energizing, it's like a sparkler for your taste buds.",
      },
    ],
  },
  {
    image: "/images/cart-indica.jpg",
    category: "Indica Flavors",
    strain: "Indica Flavors",
    strainColor: "bg-periwinkle text-white",
    flavors: [
      {
        name: "Blue Raz",
        description:
          "A sweet, smooth wave of ripened raspberries with a tangy twist of citrus. Rich and mellow, it's the kind of flavor that lingers like the perfect summer sunset.",
      },
      {
        name: "Sweet Dreamz",
        description:
          "Smooth, fruity sweetness that glides on with mellow vibes and juicy notes.",
      },
    ],
  },
  {
    image: "/images/cart-hybrid.jpg",
    category: "Hybrid Flavors",
    strain: "Hybrid Flavors",
    strainColor: "bg-coral text-white",
    flavors: [
      {
        name: "Tiger's Blood",
        description:
          "Juicy watermelon and bright citrus join forces for a wild, tropical flavor mash-up.",
      },
      {
        name: "Watermelon Ice",
        description:
          "Fresh, juicy watermelon, cooled down and refreshing.",
      },
    ],
  },
  {
    image: "/images/cart-exotic.jpg",
    category: "Exotic Flavors",
    strain: "Exotic Flavors",
    strainColor: "bg-jade text-white",
    flavors: [
      {
        name: "Breezy Blast",
        description:
          "You'll feel the island breeze with every pull. Fully loaded with tropical lime flavor. Crisp, zesty, and uplifting, it's a getaway in every hit.",
      },
    ],
  },
];

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function handleClose() {
    setActiveIndex(null);
  }

  const active = activeIndex !== null ? products[activeIndex] : null;

  return (
    <>
      <section id="our-flavors" className="py-12 px-6 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-2">
            <Image
              src="/images/our-flavors-logo.png"
              alt="Our Flavors"
              width={400}
              height={120}
              className="h-auto w-[280px] sm:w-[400px]"
            />
          </div>
          <p className="text-periwinkle text-center mb-8 text-lg tracking-widest uppercase">
            Premium All-In-One Vape
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product, i) => (
              <button
                key={product.category}
                onClick={() => setActiveIndex(i)}
                className="group flex flex-col items-center cursor-pointer text-left"
              >
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 bg-white">
                  <Image
                    src={product.image}
                    alt={`Bubbles ${product.category}`}
                    fill
                    className="object-contain scale-130"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-base sm:text-lg font-bold text-periwinkle uppercase tracking-wider text-center">
                  {product.category}
                </h3>
              </button>
            ))}
          </div>

          {/* Device info — below the carts */}
          <div className="mt-16 text-center">
            <p className="font-[family-name:var(--font-display)] text-base sm:text-lg font-bold text-jade uppercase tracking-[0.25em] mb-1">
              1G Fully Customized
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-periwinkle uppercase mb-6">
              AIO Device
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
              {["Auto-Draw", "Anti-Clogging", "Metal-Free", "Small & Compact", "USB-C Quick Charge", "Ceramic Heating"].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-periwinkle/10 rounded-full px-4 py-2 border border-periwinkle/20"
                >
                  <Image
                    src="/images/drip-mark.png"
                    alt=""
                    width={14}
                    height={18}
                    className="w-[12px] h-auto opacity-40 mix-blend-multiply flex-shrink-0"
                  />
                  <span className="text-gray-600 font-semibold text-xs sm:text-sm whitespace-nowrap">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-extrabold lowercase">
              <span className="text-jade">big clouds </span>
              <span className="text-sunrise">big flavor</span>
            </p>
          </div>
        </div>
      </section>

      {/* Flavor detail modal */}
      {active && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />
          <div className="relative bg-ivory rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden animate-[slideUp_0.4s_ease-out]">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors text-gray-500 cursor-pointer"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="flex flex-col sm:flex-row">
              {/* Image side */}
              <div className="relative w-full sm:w-2/5 flex-shrink-0">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={active.image}
                    alt={active.category}
                    fill
                    className="object-cover sm:rounded-l-2xl"
                    sizes="400px"
                  />
                </div>
              </div>

              {/* Content side — accordion flavors */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
                <div className="mb-4">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider ${active.strainColor}`}>
                    {active.strain}
                  </span>
                  <p className="text-gray-500 text-sm mt-2 font-medium">
                    1-Gram All-In-One Vape
                  </p>
                </div>
                <div>
                  {active.flavors.map((flavor, i) => (
                    <FlavorAccordion
                      key={flavor.name}
                      name={flavor.name}
                      description={flavor.description}
                      defaultOpen={i === 0}
                    />
                  ))}
                </div>
                <a
                  href="#find-us"
                  onClick={handleClose}
                  className="mt-6 block w-full py-3 rounded-xl bg-periwinkle text-white font-bold text-center hover:bg-soft-periwinkle hover:text-gray-800 transition-colors shadow-md cursor-pointer"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
