interface MarqueeProps {
  text: string;
  reverse?: boolean;
  bgColor?: string;
  textColor?: string;
}

export default function Marquee({
  text,
  reverse = false,
  bgColor = "bg-periwinkle",
  textColor = "text-ivory",
}: MarqueeProps) {
  const items = Array.from({ length: 12 }, (_, i) => (
    <span key={i} className="mx-6 whitespace-nowrap">
      {text}
    </span>
  ));

  return (
    <div className={`${bgColor} py-4 overflow-hidden`}>
      <div
        className={`flex font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold ${textColor} ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {items}
        {items}
      </div>
    </div>
  );
}
