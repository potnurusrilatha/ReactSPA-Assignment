import styles from './aboutus.module.css'
import img from '../../assets/images/about.jpg'

const AboutUs = () => {
  return (
    <>
    
      <div className={styles.aboutContainer}>
        <div className={styles.aboutimg}>
          <img src={img} alt="about" />
        </div>
        <div className={styles.textContainer}>
          <h2>What Makes Our Coffe Special?</h2>
          <p>At Brew Haven, we’re more than just a coffee shop. We’re a passionate team of coffee lovers dedicated to creating a place where great brews meet great moments. Born from a love for rich aromas, warm spaces, and good conversation, our mission is simple: to serve exceptional coffee in a welcoming environment that feels like home</p>
          <p>We use only the finest, hand-picked coffee beans sourced from renowned coffee-growing regions across the world. These beans are selected for their rich flavor profiles and freshness, ensuring each cup delivers bold and unique taste notes.</p>
      
        </div>
      </div>
      
      

    </>
  )
}

export default AboutUs
