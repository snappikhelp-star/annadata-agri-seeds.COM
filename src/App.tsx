export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-black flex items-center justify-center overflow-hidden px-6 relative">
      
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_#facc15,_transparent_35%),radial-gradient(circle_at_bottom_right,_#22c55e,_transparent_35%)]" />

      <div className="relative text-center max-w-4xl mx-auto">
        
        {/* Logo Icon */}
        <div className="mb-8 animate-bounce text-6xl">
          🌱
        </div>

        {/* Company Name */}
        <h1 className="text-5xl md:text-8xl font-black tracking-wide text-white drop-shadow-xl">
          ANNADATA
        </h1>

        <h2 className="mt-3 text-2xl md:text-5xl font-bold text-yellow-400 tracking-[0.2em]">
          AGRI AND SEEDS
        </h2>

        {/* Divider */}
        <div className="my-8 h-1 w-40 bg-yellow-400 mx-auto rounded-full animate-pulse" />

        {/* Coming Soon */}
        <p className="text-3xl md:text-6xl font-extrabold text-white animate-pulse">
          COMING SOON
        </p>

        {/* Owner Section */}
        <div className="mt-12">
          <p className="text-2xl md:text-4xl font-bold text-yellow-400">
            KESHEV MEENA
          </p>

          <p className="mt-2 text-sm md:text-lg text-green-200 uppercase tracking-[0.25em]">
            Owner • Annadata Agri And Seeds
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12">
          <p className="text-yellow-300 text-xs md:text-sm tracking-[0.2em]">
            BY PRIYAMXMEDIA(PRIYAM VISHWAKARMA)
          </p>
        </div>
      </div>
    </div>
  );
}
