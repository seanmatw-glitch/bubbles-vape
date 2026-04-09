import Image from "next/image";

const features = [
  "Auto-Draw",
  "Anti-Clogging",
  "Metal-Free",
  "Small & Compact",
  "USB-C Quick Charge",
  "Ceramic Heating",
];

const carts = [
  { src: "/images/cart-sativa.jpg", alt: "Sativa", color: "bg-sunrise" },
  { src: "/images/cart-indica.jpg", alt: "Indica", color: "bg-periwinkle" },
  { src: "/images/cart-hybrid.jpg", alt: "Hybrid", color: "bg-coral" },
  { src: "/images/cart-exotic.jpg", alt: "Exotic", color: "bg-jade" },
];

export default function DeviceInfo() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-periwinkle via-periwinkle to-jade">
      {/* Subtle bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble-3d absolute top-[10%] left-[3%] w-20 h-20 animate-float-slow" />
        <div className="bubble-3d absolute bottom-[8%] right-[5%] w-16 h-16 animate-float" />
        <div className="bubble-3d absolute top-[60%] left-[8%] w-12 h-12 animate-float-delayed" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="font-[family-name:var(--font-display)] text-base sm:text-lg font-bold text-ivory/70 uppercase tracking-[0.3em] mb-1">
            1G Fully Customized
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-extrabold text-ivory uppercase leading-tight">
            AIO Device
          </h2>
        </div>

        {/* Feature pills — horizontal row */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
            >
              <Image
                src="/images/drip-mark.png"
                alt=""
                width={14}
                height={18}
                className="w-[12px] h-auto opacity-60 mix-blend-soft-light flex-shrink-0"
              />
              <span className="text-ivory font-semibold text-xs sm:text-sm whitespace-nowrap">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* All 4 carts overlapping side by side */}
        <div className="flex justify-center items-end mb-14">
          <div className="flex items-end -space-x-8 sm:-space-x-12 md:-space-x-16">
            {carts.map((cart, i) => (
              <div
                key={cart.alt}
                className="relative transition-transform duration-300 hover:-translate-y-4 hover:z-20"
                style={{
                  zIndex: i + 1,
                  transform: `rotate(${(i - 1.5) * 4}deg)`,
                }}
              >
                <Image
                  src={cart.src}
                  alt={`Bubbles ${cart.alt}`}
                  width={220}
                  height={220}
                  className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[220px] h-auto rounded-xl shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-extrabold lowercase leading-tight">
            <span className="text-ivory">big clouds </span>
            <span className="text-sunrise">big flavor</span>
          </p>
        </div>
      </div>
    </section>
  );
}
