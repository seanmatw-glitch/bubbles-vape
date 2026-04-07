interface FlavorCardProps {
  name: string;
  description: string;
  gradient: string;
}

export default function FlavorCard({
  name,
  description,
  gradient,
}: FlavorCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className={`${gradient} p-8 min-h-[220px] flex flex-col justify-end`}>
        <h4 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white drop-shadow mb-2">
          {name}
        </h4>
        <p className="text-white/90 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
