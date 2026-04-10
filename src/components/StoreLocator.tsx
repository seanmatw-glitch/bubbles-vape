"use client";

import { useEffect, useRef } from "react";

export default function StoreLocator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || !containerRef.current) return;
    loaded.current = true;

    // Load the Hoodie script
    const script = document.createElement("script");
    script.src = "https://askhoodie.com/assets/askhoodie.host.js";
    script.onload = () => {
      // Once script is loaded, initialize the embed
      const initScript = document.createElement("script");
      initScript.textContent = `
        document.cookie = hoodieEmbedWtbV2(
          "334c21fc-567f-4d45-a141-e043659bc373",
          "askhoodieDiv",
          document.cookie
        );
      `;
      document.body.appendChild(initScript);
    };
    document.body.appendChild(script);
  }, []);

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

        <div
          className="bg-white rounded-2xl shadow-lg p-4 min-h-[400px] overflow-hidden"
        >
          <div id="askhoodieDiv" ref={containerRef} />
        </div>
      </div>
    </section>
  );
}
