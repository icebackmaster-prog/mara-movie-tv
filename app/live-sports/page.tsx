import LiveScoreWidget from '@/components/sports/LiveScoreWidget';

export default function LiveSportsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Live Sports</h1>
      <LiveScoreWidget />
    </div>
  );
}
