const Navigation = ({ className, handleNavClick, currentPage }) => {
    const handleClick = (page) => {
      handleNavClick(page);
    };
    console.log(currentPage);
  
    const isActive = (page) => {
      return currentPage === page ? "active" : "";
    };
  
    return (
      <nav className={className}>
        <div onClick={() => handleClick("home")} className={isActive("home")}>Home</div>
        <div onClick={() => handleClick("menu")} className={isActive("menu")}> Menu</div> 
        <div onClick={() => handleClick("products")} className={isActive("products")}>Products</div>
        <div onClick={() => handleClick("aboutus")} className={isActive("aboutus")}>AboutUs</div>
      </nav>
    );
  };
  

export default Navigation
