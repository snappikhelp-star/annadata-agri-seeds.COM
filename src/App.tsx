export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-black flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_#facc15,_transparent_35%),radial-gradient(circle_at_bottom_right,_#22c55e,_transparent_35%)]" />

      <div className="relative text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-bounce text-6xl">🌱</div>

        <h1 className="text-5xl md:text-8xl font-black tracking-wide text-white drop-shadow-xl">
          ANNADATA
        </h1>

        <h2 className="mt-3 text-2xl md:text-5xl font-bold text-yellow-400 tracking-[0.2em]">
          AGRI AND SEEDS
        </h2>

        <div className="my-8 h-1 w-40 bg-yellow-400 mx-auto rounded-full animate-pulse" />

        <p className="text-3xl md:text-6xl font-extrabold text-white animate-pulse">
          COMING SOON
        </p>

        <p className="mt-8 text-lg md:text-2xl text-green-100">
          A premium digital experience is launching soon
        </p>

        <p className="mt-10 text-sm md:text-lg text-yellow-300 tracking-[0.25em] font-semibold">
          BY PRIYAMXMEDIA
        </p>
      </div>
    </div>
  );
}
