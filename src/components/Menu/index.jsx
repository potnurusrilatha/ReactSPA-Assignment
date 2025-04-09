
import styles from './menu.module.css'
import Menucard from '../MenuCard'
// import img1 from '../../assets/images/americano.jpg'
import CoffeItem from '../../Data/data.js'

const Menu = () => {
  return (
    <>
    <section className={styles.menuHeader}>
        <h1>Our BrewHaven Menu</h1>
        <p className={styles.menuHeaderText}>
            Explore our delicious selection of coffee and beverages, brewed to perfection!
        </p>
    </section>
    
      <div className={styles.menuContainer}>
        {/* <Menucard img={img1} title="americano" /> */}
        {CoffeItem.map((coffee) => (
            <Menucard key={coffee.title} coffee={coffee}/>
        ))}
      </div>
    
     
    
    </>
  )
}

export default Menu
