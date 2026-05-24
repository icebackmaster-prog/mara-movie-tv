'use client';
import Button from '../ui/Button';
import { FiShare2 } from 'react-icons/fi';

interface Props {
  title: string;
  url: string;
}

const ShareButton: React.FC<Props> = ({ title, url }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: window.location.origin + url,
        });
      } catch (error) {
        console.log('Sharing failed', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.origin + url);
      alert('Link copied!');
    }
  };

  return (
    <Button size="sm" variant="outline" onClick={handleShare}>
      <FiShare2 className="mr-1" /> Share
    </Button>
  );
};

export default ShareButton;
