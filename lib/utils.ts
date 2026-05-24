export const whatsappNumber = '+263788377887';

export const openWhatsApp = (message?: string) => {
  const url = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message || 'Hi Mara Movie/TV!')}`;
  window.open(url, '_blank');
};

export const formatRating = (vote: number) => `${Math.round(vote * 10)}%`;
