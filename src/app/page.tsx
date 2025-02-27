import Image from "next/image";
import CountdownTimer from "./components/CountdownTimer";

export default function Home() {
  // Launch date for the website
  const launchDate = 'March 21, 2025 00:00:00';

  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] bg-[size:40px_40px] bg-center"></div>
      
      {/* Content container */}
      <div className="flex flex-col h-full justify-between px-6 py-16 sm:px-12 md:px-20">
        {/* Logo area with glow effect */}
        <div className="mx-auto mb-12 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-1 blur-md opacity-30 bg-blue-500 rounded-full"></div>
            <Image
              className="invert" // Ensures logo is white
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </div>
        </div>
        
        {/* Main content */}
        <main className="flex-1 flex flex-col items-center justify-center gap-16 text-center">
          {/* Heading with animated gradient */}
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="inline-block bg-gradient-to-r from-white via-blue-400 to-white bg-[length:200%_auto] text-transparent bg-clip-text animate-[gradient_8s_ease_infinite]">
                Sankar Gnanasekar's
              </span>
            </h1>
            <p className="text-xl font-medium tracking-wide text-blue-200 sm:text-2xl">
              Official Website
            </p>
          </div>
          
          {/* Launch info */}
          <div className="space-y-4 w-full max-w-4xl">
            <p className="text-lg font-medium text-gray-300">
              Launching on <span className="font-bold text-blue-400">March 21, 2025</span>
            </p>
            
            {/* Client-side countdown component */}
            <CountdownTimer targetDate={launchDate} />
          </div>
          
          <p className="max-w-md text-gray-400">
            Something exceptional is coming your way. Stay tuned for the official launch.
          </p>
        </main>
        
        {/* Footer */}
        <footer className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <p>© 2025 Sankar Gnanasekar. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}