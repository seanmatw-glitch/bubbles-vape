import Image from "next/image";

const features = [
  "Auto-Draw",
  "Anti-Clogging",
  "Metal-Free",
  "Small & Compact",
  "USB-C Quick Charge",
  "Ceramic Heating",
];


export default function DeviceInfo() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-periwinkle via-periwinkle to-jade">
      {/* Background bubbles — behind content */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble-3d absolute top-[2%] left-[2%] w-36 h-36 animate-float" />
        <div className="bubble-3d absolute top-[8%] right-[6%] w-28 h-28 animate-float-slow" />
        <div className="bubble-3d absolute top-[25%] left-[8%] w-14 h-14 animate-float-delayed" />
        <div className="bubble-3d absolute top-[40%] right-[3%] w-44 h-44 animate-float" />
        <div className="bubble-3d absolute bottom-[20%] left-[4%] w-24 h-24 animate-float-slow" />
        <div className="bubble-3d absolute bottom-[5%] left-[25%] w-16 h-16 animate-float-delayed" />
        <div className="bubble-3d absolute bottom-[2%] right-[15%] w-32 h-32 animate-float" />
        <div className="bubble-3d absolute top-[55%] left-[20%] w-10 h-10 animate-float-slow" />
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

        {/* Single yellow cart centered with bubbles around it */}
        <div className="relative flex justify-center items-center mb-14">
          {/* Bubbles around the cart */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="bubble-3d absolute top-[0%] left-[25%] w-16 h-16 animate-float" />
            <div className="bubble-3d absolute top-[10%] right-[22%] w-24 h-24 animate-float-slow" />
            <div className="bubble-3d absolute bottom-[5%] left-[28%] w-20 h-20 animate-float-delayed" />
            <div className="bubble-3d absolute bottom-[15%] right-[26%] w-12 h-12 animate-float" />
            <div className="bubble-3d absolute top-[40%] left-[20%] w-10 h-10 animate-float-delayed" />
            <div className="bubble-3d absolute top-[35%] right-[18%] w-14 h-14 animate-float-slow" />
          </div>
          <Image
            src="/images/cart-sativa.jpg"
            alt="Bubbles AIO Device"
            width={450}
            height={450}
            className="relative z-10 w-[250px] sm:w-[320px] md:w-[400px] lg:w-[450px] h-auto drop-shadow-2xl rounded-3xl"
            style={{ background: "transparent", mixBlendMode: "multiply" }}
          />
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-extrabold lowercase leading-tight">
            <span className="text-ivory">big clouds </span>
            <span className="text-sunrise">big flavor</span>
          </p>
        </div>
      </div>

      {/* Foreground bubbles — float OVER content */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="bubble-3d absolute top-[5%] left-[15%] w-20 h-20 animate-float-delayed" />
        <div className="bubble-3d absolute top-[12%] right-[12%] w-12 h-12 animate-float" />
        <div className="bubble-3d absolute top-[50%] right-[8%] w-18 h-18 animate-float-slow" />
        <div className="bubble-3d absolute bottom-[15%] left-[12%] w-16 h-16 animate-float" />
        <div className="bubble-3d absolute bottom-[8%] right-[25%] w-10 h-10 animate-float-delayed" />
        <div className="bubble-3d absolute top-[35%] left-[5%] w-22 h-22 animate-float-slow" />
      </div>
    </section>
  );
}
