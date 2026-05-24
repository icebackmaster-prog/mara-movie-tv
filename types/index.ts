export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  media_type?: 'movie' | 'tv';
}

export interface SportEvent {
  id: string;
  homeTeam: string;
  awayTeam: string;
  score: string;
  status: string;
  time: string;
}
