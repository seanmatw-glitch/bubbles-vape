import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background using brand colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-soft-coral via-periwinkle to-soft-jade" />

      {/* Device background — brighter */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
        <div className="relative w-[90%] h-[90%]">
          <Image
            src="/images/Purple Bubbles Transparent Bkgd.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* 3D floating bubbles — constrained near the cart */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="relative w-full max-w-3xl h-full">
          {/* Left side */}
          <div className="bubble-3d absolute top-[8%] left-[2%] w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 animate-float" />
          <div className="bubble-3d absolute top-[22%] -left-[6%] w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 animate-float-slow" />
          <div className="bubble-3d absolute top-[42%] -left-[4%] w-24 sm:w-28 md:w-36 h-24 sm:h-28 md:h-36 animate-float-delayed" />
          <div className="bubble-3d absolute bottom-[8%] -left-[2%] w-28 sm:w-36 md:w-44 h-28 sm:h-36 md:h-44 animate-float-delayed" />

          {/* Center-left — small accents */}
          <div className="bubble-3d absolute top-[2%] left-[20%] w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 animate-float-delayed" />
          <div className="bubble-3d absolute top-[18%] left-[12%] w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 animate-float" />
          <div className="bubble-3d absolute bottom-[4%] left-[22%] w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 animate-float" />

          {/* Top center — small */}
          <div className="bubble-3d absolute top-[5%] left-[52%] w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 animate-float-slow" />

          {/* Right side */}
          <div className="bubble-3d absolute top-[3%] right-[2%] w-24 sm:w-28 md:w-36 h-24 sm:h-28 md:h-36 animate-float-delayed" />
          <div className="bubble-3d absolute top-[25%] -right-[4%] w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 animate-float" />
          <div className="bubble-3d absolute top-[58%] -right-[2%] w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 animate-float-slow" />
          <div className="bubble-3d absolute bottom-[8%] right-[0%] w-22 sm:w-26 md:w-32 h-22 sm:h-26 md:h-32 animate-float-slow" />
          <div className="bubble-3d absolute bottom-[3%] right-[20%] w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 animate-float-delayed" />
        </div>
      </div>

      {/* Content — logo dropped to center of vape */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center mt-[14vh] sm:mt-[16vh]">
        <Image
          src="/images/logo-cream.png"
          alt="BUBBLES"
          width={600}
          height={200}
          className="w-[280px] sm:w-[400px] md:w-[550px] h-auto drop-shadow-lg"
          priority
        />
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-ivory/90 font-semibold tracking-[0.25em] uppercase">
          Premium All-In-One Vape Device
        </p>
      </div>
    </section>
  );
}
