import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasborder?: boolean
}

export const Avatar = ({ hasborder = true, ...imgProps }: AvatarProps) => (
  <img
    className={hasborder ? styles.avatarWithBorder : styles.avatar}
    {...imgProps}
  />
)