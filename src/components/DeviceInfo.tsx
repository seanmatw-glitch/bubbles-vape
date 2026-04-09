import Image from "next/image";

const features = [
  "Auto-Draw",
  "Anti-Clogging",
  "Metal-Free",
  "Small & Compact",
  "Rechargeable, USB-C Quick Charge",
  "Post-less Ceramic Heating Technology",
];

export default function DeviceInfo() {
  return (
    <section className="py-16 px-6 bg-ivory">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text content */}
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold text-jade uppercase tracking-wider mb-1">
              1G Fully Customized
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-extrabold text-periwinkle mb-8 uppercase">
              AIO Device
            </h2>

            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Image
                    src="/images/drip-mark.png"
                    alt=""
                    width={20}
                    height={25}
                    className="w-[18px] h-auto opacity-60 mix-blend-multiply flex-shrink-0"
                  />
                  <span className="text-gray-700 text-lg font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div>
              <p className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-extrabold text-jade lowercase">
                big clouds
              </p>
              <p className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-extrabold text-sunrise lowercase">
                big flavor
              </p>
            </div>
          </div>

          {/* Right: Device image */}
          <div className="flex justify-center">
            <Image
              src="/images/cart-exotic.jpg"
              alt="Bubbles AIO Device"
              width={400}
              height={400}
              className="w-[280px] sm:w-[340px] md:w-[400px] h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
