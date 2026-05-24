import { openWhatsApp } from '@/lib/utils';
import { FiMessageCircle } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-mara-400 mb-4">Mara Movie/TV</h3>
          <p>Your ultimate entertainment hub – movies, TV shows, and live sports.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/browse" className="hover:text-white">Browse</a></li>
            <li><a href="/live-sports" className="hover:text-white">Live Sports</a></li>
            <li><a href="/my-list" className="hover:text-white">My List</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <button
            onClick={() => openWhatsApp('Hello Mara Team!')}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full text-white transition"
          >
            <FiMessageCircle /> WhatsApp: +263 78 837 7887
          </button>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Mara Movie/TV. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
