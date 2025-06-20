import fallbackIcon from '../assets/icons/ic_fallback.svg';

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = fallbackIcon;
};
