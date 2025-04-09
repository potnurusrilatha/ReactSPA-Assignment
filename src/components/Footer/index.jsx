import styles from './footer.module.css'
import Navigation from '../Navigation'
import { InstagramLogo, FacebookLogo, YoutubeLogo } from '@phosphor-icons/react'

const Footer = () => {
  return (
    <>
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div>
                    <h3>Brew Haven</h3>
                    <p>Your daily dose of warmth, energy, and inspiration — brewed fresh just for you.</p>
                </div>
                <div className={styles.footerSection}>
                    <h4>Quick Links</h4>
                    <Navigation />
                </div>
                <div className={styles.socialSection}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialLinks}>
                        <div className={styles.socialItem}><FacebookLogo size={20} /> Facebook</div>
                        <div className={styles.socialItem}><InstagramLogo size={20} /> Instagram</div>
                        <div className={styles.socialItem}><YoutubeLogo size={20} /> YouTube</div>
                    </div>
                </div>
                <div className={styles.footerSection}>
                    <h4>Contact Us</h4>
                    <p>Email:support@Brewhousehaven.com</p>
                    <p>phone: +1 234 567 890</p>
                    <p>Location: 123 Brew Street, Bean City</p>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; {new Date().getFullYear()} Brew Haven. All rights reserved.</p>
                </div>

            </div>

        </footer>
      
    </>
  )
}

export default Footer
