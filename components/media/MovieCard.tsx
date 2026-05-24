import Image from 'next/image';
import { Movie } from '@/types';
import DownloadButton from '../shared/DownloadButton';
import ShareButton from '../shared/ShareButton';

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={450}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
        <h3 className="text-white font-bold">{movie.title}</h3>
        <div className="flex gap-2 mt-2">
          <DownloadButton movieId={movie.id} title={movie.title} />
          <ShareButton title={movie.title} url={`/movie/${movie.id}`} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
