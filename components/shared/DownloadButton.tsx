'use client';
import Button from '../ui/Button';
import { FiDownload } from 'react-icons/fi';

interface Props {
  movieId: number;
  title: string;
}

const DownloadButton: React.FC<Props> = ({ movieId, title }) => {
  const handleDownload = async () => {
    const downloadUrl = `/api/download/${movieId}`;
    try {
      const response = await fetch(downloadUrl);
      const data = await response.json();
      const link = document.createElement('a');
      link.href = data.url;
      link.download = `${title}.mp4`;
      link.click();
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <Button size="sm" variant="primary" onClick={handleDownload}>
      <FiDownload className="mr-1" /> Download
    </Button>
  );
};

export default DownloadButton;
