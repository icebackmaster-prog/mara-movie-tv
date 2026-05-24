'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ mobile = false }: { mobile?: boolean }) => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${mobile ? 'w-full' : 'w-64'}`}>
      <input
        type="text"
        placeholder="Search movies & shows..."
        className="w-full bg-gray-700 text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-mara-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
    </form>
  );
};

export default SearchBar;
