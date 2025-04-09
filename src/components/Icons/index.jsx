import { MapPinLine,MagnifyingGlass } from "@phosphor-icons/react"
import styles from './icons.module.css'

const Icons = () => {
  return (
    <div className={styles.iconsWrapper}>
      <div className={styles.iconContainer}>
        <MagnifyingGlass size={32} mirrored className={styles.iconsearch} />
        <span className={styles.iconText}>Search</span>
      </div>
    <div className={styles.iconContainer}>
      <MapPinLine size={32} className={styles.iconmapline} />
      <span className={styles.iconText}>Find us</span>
    </div>
    </div>
  )
}

export default Icons
