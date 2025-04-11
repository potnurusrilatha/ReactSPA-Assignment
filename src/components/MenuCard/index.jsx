import { ShoppingCart } from "@phosphor-icons/react"
import styles from './menuCard.module.css'
import { getImageUrl } from "../../utils/function"


const Menucard = ({item}) => {
  return (
    <div className={styles.menuCard}>
      <div className={styles.menuImage}>
        <img src={getImageUrl(item.image)} alt={item.image} />
      </div>
      <div className={styles.card}>
        <h3 className={styles.menuImage}>{item.name}</h3>
        <h3 className={styles.menuimage}>{item.price}</h3>
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
