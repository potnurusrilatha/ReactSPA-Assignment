import { ShoppingCart } from "@phosphor-icons/react"
import styles from './menuCard.module.css'


const Menucard = ({coffee}) => {
  return (
    <div className={styles.menuCard}>
      <div className={styles.menuImage}>
        <img src={coffee.img} alt="img" />
      </div>
      <div className={styles.card}>
        <h3>{coffee.title}</h3>
        <h3>{coffee.vlaue}</h3>
      </div>
      <div>
        <div className={styles.buttons}>
            <button>Hot</button>
            <button>Cold</button>
        </div>
        <span>
            <ShoppingCart size={32} />
        </span>
      </div>
    </div>
  )
}

export default Menucard
