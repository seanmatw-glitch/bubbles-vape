import Image from "next/image";

const featuresLeft = [
  "Auto-Draw",
  "Anti-Clogging",
  "Metal-Free",
];

const featuresRight = [
  "Small & Compact",
  "USB-C Quick Charge",
  "Ceramic Heating Tech",
];

export default function DeviceInfo() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Diagonal split background */}
      <div className="absolute inset-0 bg-periwinkle" />
      <div
        className="absolute inset-0 bg-jade"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%, 40% 0)" }}
      />

      {/* Subtle floating bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble-3d absolute top-[8%] left-[5%] w-16 h-16 animate-float-slow" />
        <div className="bubble-3d absolute top-[15%] right-[8%] w-24 h-24 animate-float" />
        <div className="bubble-3d absolute bottom-[10%] left-[15%] w-20 h-20 animate-float-delayed" />
        <div className="bubble-3d absolute bottom-[5%] right-[12%] w-14 h-14 animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold text-ivory/80 uppercase tracking-[0.25em] mb-2">
            1G Fully Customized
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl font-extrabold text-ivory uppercase">
            AIO Device
          </h2>
        </div>

        {/* Device + Features layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          {/* Left features */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:w-1/4">
            {featuresLeft.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg border border-white/20"
              >
                <Image
                  src="/images/drip-mark.png"
                  alt=""
                  width={18}
                  height={22}
                  className="w-[16px] h-auto opacity-70 mix-blend-soft-light flex-shrink-0"
                />
                <span className="text-ivory font-semibold text-sm sm:text-base">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Center device */}
          <div className="lg:w-2/4 flex justify-center">
            <Image
              src="/images/cart-exotic.jpg"
              alt="Bubbles AIO Device"
              width={450}
              height={450}
              className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-auto drop-shadow-2xl animate-float rounded-2xl"
              priority
            />
          </div>

          {/* Right features */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:w-1/4">
            {featuresRight.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg border border-white/20"
              >
                <Image
                  src="/images/drip-mark.png"
                  alt=""
                  width={18}
                  height={22}
                  className="w-[16px] h-auto opacity-70 mix-blend-soft-light flex-shrink-0"
                />
                <span className="text-ivory font-semibold text-sm sm:text-base">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-14">
          <p className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-extrabold lowercase">
            <span className="text-ivory">big clouds </span>
            <span className="text-sunrise">big flavor</span>
          </p>
        </div>
      </div>
    </section>
  );
}
