import styles from './home.module.css'
import image from '../../assets/images/home.jpg'
import image2 from '../../assets/images/espresso.jpg'
import image3 from '../../assets/images/cappuccino.jpg'


const Home = () => {
  return (
    <>
    <div className={styles.homeSectionOverlay}>
        <div className={styles.ImageContainer}>
            <img src={image} alt="home image1" className={styles.image}/>
            <div className={styles.homeContentOverlay}>
                <h1 className={styles.homeHeader}>Start your day with a steaming cup of coffe </h1>
                <p>Boost your productivity and build your mood with a glass of coffe in the morning</p>
            </div>
        </div>
    </div>
    <div className={`${styles.homeSection} ${styles.reverse}`}>
        <div className={styles.textContent}>
          <h1 className={styles.homeHeader}>About Espresso coffee</h1>
          <p>Espresso is the heart of many coffee drinks — a concentrated shot that delivers bold flavor and rich crema in every sip. 
      Whether you're sipping it solo or using it as the base for your latte or cappuccino, espresso is the essence of true coffee craftsmanship.
    </p>
    <p>
      Made by forcing hot water through finely ground coffee beans under high pressure, espresso offers a strong, full-bodied experience with a slightly creamy texture. 
      It's perfect for early mornings, late-night study sessions, or just when you need a powerful pick-me-up.
    </p>
        </div>
        <div className={styles.imageContent}>
          <img src={image2} alt="espresso" className={styles.image} />
        </div>
      </div>
      <div className={`${styles.homeSection} ${styles.reverse}`}>
        <div className={styles.imageContent}>
          <img src={image3} alt="cappuccino" className={styles.image} />
        </div>
          <div className={styles.textContent}>
            <h1 className={styles.homeHeader}>Unwind with the Comfort of Cappuccino</h1>
              <p>Cappuccino is a timeless classic, known for its perfect balance of rich espresso, steamed milk, and airy milk foam. 
              With its silky texture and indulgent taste, it's a favorite choice for those who enjoy a smooth yet bold coffee experience.
              </p>
              <p>Traditionally served in smaller cups, cappuccinos are ideal for slow mornings, cozy café moments, or a mid-day pause. 
              You can savor it plain or sprinkled with a touch of cocoa or cinnamon for extra flavor.
              </p>
              <p>Whether you're a coffee purist or a casual sipper, a well-made cappuccino brings warmth, comfort, and a little bit of luxury to your cup.</p>
          </div>
        </div>
      
    </>
    
  )
}

export default Home