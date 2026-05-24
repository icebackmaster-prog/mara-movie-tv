'use client';
import { useState, useEffect } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import Link from 'next/link';

interface MatchItem {
  id: string;
  homeTeam: string;
  awayTeam: string;
  score: string;
  status: string;
  time: string;
  leagueName?: string;
}

const LiveScoreWidget = () => {
  const [matches, setMatches] = useState<MatchItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLiveScores = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/sports/live-scores?include=football');
      const data = await res.json();

      // data.football comes from the API and is already an array of matches
      if (data.football) {
        // Map the API data to the simple format our UI expects
        const liveMatches = data.football.map((match: any) => ({
          id: String(match.id),
          homeTeam: match.homeTeam.name,
          awayTeam: match.awayTeam.name,
          score: `${match.homeTeam.score} - ${match.awayTeam.score}`,
          status: match.status === 'live' ? 'Live' : match.status,
          time: match.minute ? `${match.minute}'` : '',
          leagueName: match.leagueName,
        }));
        setMatches(liveMatches);
      } else {
        // Fallback to dummy data if API fails
        setMatches([
          { id: '1', homeTeam: 'Highlanders', awayTeam: 'Dynamos', score: '2 - 1', status: 'Live', time: '75\'' },
          { id: '2', homeTeam: 'Caps United', awayTeam: 'Chicken Inn', score: '0 - 0', status: '1st Half', time: '23\'' },
        ]);
      }
    } catch (error) {
      console.error('Failed to fetch live scores:', error);
      // Fallback dummy data if network error
      setMatches([
        { id: '1', homeTeam: 'Highlanders', awayTeam: 'Dynamos', score: '2 - 1', status: 'Live', time: '75\'' },
        { id: '2', homeTeam: 'Caps United', awayTeam: 'Chicken Inn', score: '0 - 0', status: '1st Half', time: '23\'' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveScores();
    // Refresh every 30 seconds
    const interval = setInterval(fetchLiveScores, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gold">⚽ Live Football</h2>
        <button
          onClick={fetchLiveScores}
          disabled={loading}
          className="text-gray-400 hover:text-white transition disabled:opacity-50"
          title="Refresh scores"
        >
          <FiRefreshCw className={loading ? 'animate-spin' : ''} size={18} />
        </button>
      </div>

      {matches.length === 0 && !loading ? (
        <p className="text-center text-gray-400 py-4">No live matches right now</p>
      ) : (
        matches.map(match => (
          <div
            key={match.id}
            className="flex justify-between items-center border-b border-gray-700 py-2 last:border-0 hover:bg-gray-700/50 transition rounded px-2 group"
          >
            <div className="flex-1">
              <p className="font-semibold">{match.homeTeam}</p>
              <p className="font-semibold">{match.awayTeam}</p>
              {match.leagueName && (
                <p className="text-xs text-gray-500 mt-0.5">{match.leagueName}</p>
              )}
            </div>
            <div className="text-center mx-4">
              <span className="text-2xl font-bold">{match.score}</span>
              <br />
              <span className="text-xs text-red-400 animate-pulse">
                {match.status} {match.time}
              </span>
            </div>
            {/* Optional: View match details */}
            <Link
              href={`/live-sports/football/match/${match.id}`}
              className="text-mara-400 hover:text-mara-300 text-sm opacity-0 group-hover:opacity-100 transition"
            >
              View →
            </Link>
          </div>
        ))
      )}
      <div className="mt-4 text-right text-xs text-gray-500">
        <Link href="/live-sports" className="hover:text-mara-400">All Sports →</Link>
      </div>
    </div>
  );
};

export default LiveScoreWidget;
