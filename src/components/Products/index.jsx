import styles from './products.module.css'
import imagehome from '../../assets/images/producthome.jpg'
import image1 from '../../assets/images/product1.jpg'
import image2 from '../../assets/images/product2.jpg'
import image3 from '../../assets/images/product3.jpg'

const Products = () => {
  return (
    <>
    <div className={styles.productContainer}>
        
        <div className={styles.producthomeSection}>
          <img src={imagehome} alt="producthome" className={styles.homeSectionImage}/>
          <div className={styles.productHeader}>
            <h1 className={styles.productHeaderText}>About Our Products</h1>
          </div>
          
        </div>
        <div className={styles.productText}>
              <h2>What We Promise</h2>
              <p>At Brew House, sustainability is an integral part of every decision we make as a company. Our promise is that we will always take action today to ensure a better tomorrow for our guests, our community, our employees and our planet.</p>
        </div>

        <div className={styles.cropContainer}>
         <div className={styles.productImage1}>
          <img src={image1} alt="product1"/>
          </div>
          <div className={styles.productCropText}>
            <h2>Crop To Cup</h2>
            <p>At Brew Haven, we pride ourselves on serving the perfect cup of coffee, but what truly makes our coffee special is the journey it takes—from the farm to your cup. Every step in the process is carefully crafted to ensure the highest quality and the best possible taste.</p>
          </div>
        </div>

        <div className={`${styles.cropContainer} ${styles.reverse}`}>
          <div className={styles.productImage2}>
            <img src={image2} alt="product2"/>
            </div>
            <div className={styles.productText}>
              <h2>Our Coffee: Crafted with Passion, Served with Love</h2>
              <p>At Brew Haven, we believe that coffee is more than just a drink—it's an experience. From the rich, full-bodied flavor of a perfectly brewed espresso to the creamy indulgence of a smooth latte, every cup we serve is crafted with passion and dedication. Our coffee is not just a beverage; it’s a journey, a ritual, and a moment of pleasure.</p>
            </div>
          </div>

          <div className={styles.cropContainer}>
         <div className={styles.productImage3}>
          <img src={image3} alt="product3"/>
          </div>
          <div className={styles.productCropText}>
            <h2>Our Climate Footprint</h2>
            <p>We know that our business and the choices we make in our entire value chain always have an impact on the planet. What we can measure, we can manage, and therefore our first step has been to measure the climate impact of our value chain.To take responsibility and manage the risks of climate change, Espresso House Group has decided to set emission reduction targets in line with climate science. As a first step in this development, Espresso House 2022 is committed to setting climate goals in line with the Science Based Target Initiative (SBTi). Our next step will be to develop the goals, define a path to reach the goal and integrate this into our new sustainability strategy, which will be published in 2024.</p>
          </div>
        </div>
    </div>
         
    </>
  )
}

export default Products
