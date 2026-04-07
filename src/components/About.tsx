import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="px-6">
      <div className="bg-[#8fb7d9] overflow-hidden">
        {/* Logo area with bubbles */}
        <div className="relative pt-12 pb-6">
          <div className="absolute inset-0 pointer-events-none">
            <div className="bubble-3d absolute top-[10%] left-[5%] w-20 sm:w-28 h-20 sm:h-28 animate-float" />
            <div className="bubble-3d absolute top-[5%] right-[8%] w-24 sm:w-32 h-24 sm:h-32 animate-float-slow" />
            <div className="bubble-3d absolute bottom-[5%] left-[10%] w-16 sm:w-24 h-16 sm:h-24 animate-float-delayed" />
            <div className="bubble-3d absolute bottom-[10%] right-[5%] w-20 sm:w-28 h-20 sm:h-28 animate-float" />
            <div className="bubble-3d absolute top-[15%] right-[30%] w-10 sm:w-14 h-10 sm:h-14 animate-float-delayed" />
            <div className="bubble-3d absolute bottom-[0%] left-[25%] w-12 sm:w-16 h-12 sm:h-16 animate-float-slow" />
            <div className="bubble-3d absolute top-[40%] left-[2%] w-14 sm:w-20 h-14 sm:h-20 animate-float" />
            <div className="bubble-3d absolute top-[30%] right-[2%] w-10 sm:w-16 h-10 sm:h-16 animate-float-delayed" />
          </div>
          <div className="relative z-10 flex justify-center">
            <Image
              src="/images/hi-bubbs-logo.png"
              alt="Hi, Bubbs!"
              width={400}
              height={120}
              className="h-auto w-[220px] sm:w-[300px] md:w-[380px]"
            />
          </div>
        </div>

        {/* Copy area — no bubbles */}
        <div className="relative z-10 pb-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-ivory/90 text-lg sm:text-xl leading-relaxed tracking-wide font-semibold">
              Bubbles is all about bright, juicy flavors that burst across your
              taste buds in waves of sweet, tangy bliss. From the first inhale to
              the draw, you&apos;ll be met with mouth-watering terp profiles that
              you&apos;ll want to keep coming back to. Our flavor-forward approach,
              colorful devices, and emphasis on quality gives Bubbles vapers an
              uplifting experience that&apos;s as fun as it is flavorful. Meet your
              new favorite — Bubbles!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
