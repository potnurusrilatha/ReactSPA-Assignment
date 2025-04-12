

import { useState } from 'react'
import Header from './components/Header/index.jsx'
import Home from './components/Home/index.jsx'
import Menu from './components/Menu/index.jsx'
import Products from './components/Products/index.jsx'
import AboutUs from './components/AboutUs/index.jsx'
import Footer from './components/Footer/index.jsx'

function App() {

  const [currentPage, setCurrentPage] = useState("home")
  

  return (
    <>
    <Header  setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    <main>
      {currentPage==="home" && <Home /> }
      {currentPage==="menu" && <Menu /> }
      {currentPage==="products" && <Products />}
      {currentPage==="aboutus" && <AboutUs />}
    </main>
   
    
    <Footer />
      {/* {coffeeMenu.map((item, index) => <img key={index} src={getImageUrl(item.image)} ></img>)} */}
    </>
  )
}

export default App
