import fallbackIcon from "/icons/ic_fallback.svg";

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = fallbackIcon;
};
