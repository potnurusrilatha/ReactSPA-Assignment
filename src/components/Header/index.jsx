
import styles from './header.module.css'
import Navigation from "../Navigation";
import { useState } from "react";
import { List,X }  from "@phosphor-icons/react";
import Icons from '../Icons';
 
  const Header = ({ setCurrentPage, currentPage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activePage, setActivePage] = useState("home"); // To manage active page
  
    const menuButtonClick = () => {
      setIsOpen(isOpen ? false : true);
    };

    const handleNavClick = (page) => {
      setActivePage(page)
      setCurrentPage(page);
      setIsOpen(false);
    };
  


  return (
    <header className={styles.header}>
        
        
        <Navigation
          handleNavClick={handleNavClick}
          className={isOpen ? styles.mobileMenu : styles.desktopNav}
          currentPage={currentPage}
        />
      <h1 className={styles.pageTitle}>BrewHeaven</h1>
  
      <div className={styles.iconsContainer}>
        <Icons />
       
        </div> 
        <button onClick={menuButtonClick} className={styles.mobileMenuButton}>
          {isOpen ? <X size={32} /> : <List size={32} />}
        </button>
        
    </header>
  )
}

export default Header
