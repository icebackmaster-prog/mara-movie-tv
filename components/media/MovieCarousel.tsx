'use client';
import { useRef } from 'react';
import { Movie } from '@/types';
import MovieCard from './MovieCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Props {
  movies: Movie[];
}

const MovieCarousel: React.FC<Props> = ({ movies }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <FiChevronLeft size={24} />
      </button>
      <div ref={scrollRef} className="flex overflow-x-scroll scrollbar-hide gap-4 pb-4">
        {movies.map(movie => (
          <div key={movie.id} className="min-w-[200px] sm:min-w-[250px]">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

export default MovieCarousel;
