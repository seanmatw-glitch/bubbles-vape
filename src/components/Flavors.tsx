import FlavorCard from "./FlavorCard";

const flavorCategories = [
  {
    category: "Sativa Flavors",
    categoryColor: "text-sunrise",
    flavors: [
      {
        name: "Atomic Burst",
        description:
          "The classic combo of Cherry, Blue Raspberry, and Lime take you straight into the heart of summer. Bright, tangy, and energizing, it's like a sparkler for your taste buds.",
        gradient: "bg-gradient-to-br from-sunrise via-soft-sunrise to-amber-300",
      },
    ],
  },
  {
    category: "Indica Flavors",
    categoryColor: "text-periwinkle",
    flavors: [
      {
        name: "Blue Raz",
        description:
          "A sweet, smooth wave of ripened raspberries with a tangy twist of citrus. Rich and mellow, it's the kind of flavor that lingers like the perfect summer sunset.",
        gradient: "bg-gradient-to-br from-periwinkle via-indigo-400 to-purple-400",
      },
      {
        name: "Sweet Dreamz",
        description:
          "Smooth, fruity sweetness that glides on with mellow vibes and juicy notes.",
        gradient: "bg-gradient-to-br from-purple-400 via-coral to-rose-300",
      },
    ],
  },
  {
    category: "Hybrid Flavors",
    categoryColor: "text-coral",
    flavors: [
      {
        name: "Tiger's Blood",
        description:
          "Juicy watermelon and bright citrus join forces for a wild, tropical flavor mash-up.",
        gradient: "bg-gradient-to-br from-coral via-sunrise to-soft-sunrise",
      },
      {
        name: "Watermelon Ice",
        description:
          "Fresh, juicy watermelon, cooled down and refreshing.",
        gradient: "bg-gradient-to-br from-jade via-soft-jade to-teal-300",
      },
    ],
  },
  {
    category: "Exotic Flavors",
    categoryColor: "text-jade",
    flavors: [
      {
        name: "Breezy Blast",
        description:
          "You'll feel the island breeze with every pull. Fully loaded with tropical lime flavor. Crisp, zesty, and uplifting, it's a getaway in every hit.",
        gradient: "bg-gradient-to-br from-jade via-emerald-400 to-cyan-400",
      },
    ],
  },
];

export default function Flavors() {
  return (
    <section id="flavors" className="py-20 px-6 bg-soft-coral/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-periwinkle mb-4 text-center">
          Our Flavors
        </h2>
        <p className="text-gray-600 text-center mb-16 text-lg">
          A flavor for every mood
        </p>

        {flavorCategories.map((cat) => (
          <div key={cat.category} className="mb-14">
            <h3 className={`font-[family-name:var(--font-display)] text-2xl font-bold ${cat.categoryColor} mb-6 uppercase tracking-wider`}>
              {cat.category}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.flavors.map((flavor) => (
                <FlavorCard
                  key={flavor.name}
                  name={flavor.name}
                  description={flavor.description}
                  gradient={flavor.gradient}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
