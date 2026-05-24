import { searchTMDB } from '@/lib/tmdb';
import MovieCard from '@/components/media/MovieCard';

export default async function SearchPage({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q;
  let results: any[] = [];
  if (query) {
    results = await searchTMDB(query);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Search Results for "{query}"</h1>
      {results.length === 0 && <p className="text-gray-400">No results found.</p>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {results.map((item: any) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
}
