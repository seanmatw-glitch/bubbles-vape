import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-periwinkle/90 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image
          src="/images/logo-cream.png"
          alt="BUBBLES"
          width={120}
          height={40}
          className="h-8 w-auto"
        />
        <p className="text-ivory/70 text-sm">
          &copy; {new Date().getFullYear()} Bubbles. All rights reserved.
        </p>
        <a
          href="https://www.instagram.com/bubblesvapeco?igsh=MWNncXFneTZsNWtxMA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ivory/80 hover:text-ivory transition-colors"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
