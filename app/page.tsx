import { fetchPopularMovies, fetchTrending } from '@/lib/tmdb';
import MovieCarousel from '@/components/media/MovieCarousel';
import MovieCard from '@/components/media/MovieCard';
import LiveScoreWidget from '@/components/sports/LiveScoreWidget';
import { openWhatsApp } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default async function Home() {
  const trendingMovies = await fetchTrending('movie', 'week');
  const popularMovies = await fetchPopularMovies();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Hero */}
      <section className="text-center py-16 bg-gradient-to-r from-mara-900 to-black rounded-3xl">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Welcome to <span className="text-gold">Mara Movie/TV</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">Stream, download, and share the best entertainment</p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => openWhatsApp('Hello! I need help.')}>
            Contact Us on WhatsApp
          </Button>
        </div>
      </section>

      {/* Trending Movies Row */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Trending Now</h2>
        <MovieCarousel movies={trendingMovies} />
      </section>

      {/* Popular Movies Grid */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Popular Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {popularMovies.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* Live Sports Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Live Sports</h2>
        <LiveScoreWidget />
      </section>
    </div>
  );
}
