import VoteSection from "../components/VoteSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1f] to-[#0f172a] text-white">

      {/* 🔥 HERO */}
        <div className="min-h-[80vh] flex items-center justify-center px-6">

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

                {/* 🧠 LEFT SIDE (TEXT) */}
                <div>

                    <h1 className="text-6xl font-bold tracking-wide">
                        Noble<span className="text-orange-400">MS</span>
                    </h1>

                    <p className="mt-6 text-gray-300 text-lg max-w-md">
                        Classic v83 MapleStory with modern progression systems
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex gap-6">

                        <a
                        href="https://discord.gg/Q7eCcY8C"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition shadow-lg shadow-green-500/20 inline-block"
                        >
                        Join Discord
                        </a>
                        
                        <div className="relative inline-block">

                            {/* BUTTON */}
                            <button className="bg-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition shadow-lg shadow-blue-500/20">
                                View Database
                            </button>

                            {/* 🔥 BADGE */}
                            <span className="absolute -bottom-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                                Coming Soon!
                            </span>

                        </div>
                    </div>

            </div>

            {/* 🧍 RIGHT SIDE (MASCOT) */}
            <div className="flex justify-center">

                <img
                    src="wufflez.png"
                    alt="Mascot"
                    className="w-[300px] md:w-[400px] rounded-full border-4 border-orange-400 object-cover drop-shadow-[0_0_30px_rgba(255,140,0,0.5)]"
                />

                </div>

            </div>

        </div>

      {/* ⭐ FEATURES */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#1e293b] p-6 rounded-xl hover:scale-105 transition border border-gray-700">
            <h2 className="text-xl font-semibold">Old School Feel</h2>
            <p className="text-gray-400 mt-2">
              Experience MapleStory v83 with balanced gameplay and nostalgic mechanics.
            </p>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-xl hover:scale-105 transition border border-gray-700">
            <h2 className="text-xl font-semibold">Active Development</h2>
            <p className="text-gray-400 mt-2">
              Constant updates, bug fixes, and new systems.
            </p>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-xl hover:scale-105 transition border border-gray-700">
            <h2 className="text-xl font-semibold">TMS Like</h2>
            <p className="text-gray-400 mt-2">
              For People who have nothing play after the shutting down of Timeless.
            </p>
          </div>

        </div>
      </div>

      {/* ⭐ CUSTOM SYSTEMS */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center mb-12">
          Custom Systems
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition">
            <h3 className="text-lg font-semibold text-blue-400">Merit Level</h3>
            <p className="text-gray-400 mt-2">
              Progress infinitely beyond level 200.
            </p>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:border-purple-400 transition">
            <h3 className="text-lg font-semibold text-purple-400">Progressive Rings</h3>
            <p className="text-gray-400 mt-2">
              Upgrade rings through quests & Monster Book.
            </p>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition">
            <h3 className="text-lg font-semibold text-yellow-400">Boss Rewards</h3>
            <p className="text-gray-400 mt-2">
              Dynamic rewards tied to expedition clears.
            </p>
          </div>

        </div>
      </div>

      {/* 🗳️ VOTE */}
        <VoteSection/>
    </div>
  );
}