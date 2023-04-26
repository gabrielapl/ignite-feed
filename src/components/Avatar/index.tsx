import styles from "./styles.module.css";

interface AvatarProps {
  hasBorder: boolean;
  src: string;
  alt?: string;
}

export function Avatar({ alt, hasBorder = false, src }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
