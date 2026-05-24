import { fetchPopularMovies } from '@/lib/tmdb';
import MovieCard from '@/components/media/MovieCard';

export default async function BrowsePage() {
  const movies = await fetchPopularMovies();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Browse Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
