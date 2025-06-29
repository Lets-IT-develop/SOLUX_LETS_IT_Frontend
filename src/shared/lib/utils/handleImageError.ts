import fallbackIcon from '../../assets/icons/ic_fallback.svg';

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement>,
  fallbackImageUrl: string,
) => {
  e.currentTarget.src = fallbackImageUrl || fallbackIcon;
};
