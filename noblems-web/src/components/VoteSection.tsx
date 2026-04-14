import { useState } from "react";

export default function VoteSection() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

    const handleVote = () => {
    if (!username) {
        setMessage("Please enter your username.");
        return;
    }

    // ✅ store username locally (optional)
    localStorage.setItem("voteUser", username);

    // 🔥 redirect to GTOP
    const voteUrl = `https://gtop100.com/topsites/MapleStory/server-105857?vote=1&pingUsername=${encodeURIComponent(username)}`;

    // window.location.href = voteUrl;
    window.open(voteUrl, '_blank')

    setMessage("Redirecting to vote site...");
    };

  return (
    <div className="bg-[#020617] py-16 text-center border-t border-gray-800">

      <h2 className="text-3xl font-bold">Support NobleMS</h2>

      <p className="text-gray-400 mt-3">
        Enter your username and vote to receive rewards
      </p>

      {/* 🔥 INPUT */}
      <div className="mt-8 flex justify-center gap-4">

        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-400"
        />

        <button
          onClick={handleVote}
          disabled={loading}
          className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Vote"}
        </button>

      </div>

      {/* 🔥 FEEDBACK */}
      {message && (
        <p className="mt-4 text-sm text-gray-300">
          {message}
        </p>
      )}

    </div>
  );
}
