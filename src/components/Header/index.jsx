import styles from './header.module.css'
import Navigation from "../Navigation";
import { useState } from "react";
import { List,X }  from "@phosphor-icons/react";
import Icons from '../Icons';
 
  const Header = ({ setCurrentPage, currentPage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activePage, setActivePage] = useState("home"); 
  
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
      
       <button onClick={menuButtonClick} className={styles.mobileMenuButton}>
          {isOpen ? <X size={32} /> : <List size={32} />}
        </button>

      <h1 className={styles.pageTitle}>BrewHeaven</h1>
        <Navigation
          handleNavClick={handleNavClick}
          className={isOpen ? styles.mobileMenu : styles.desktopNav}
          currentPage={currentPage}
        />
      
  
      <div className={styles.iconsContainer}>
        <Icons /> 
      </div> 

     
        
    </header>
  )
}

export default Header
