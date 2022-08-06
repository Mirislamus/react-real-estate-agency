import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Cards from "../Cards/Cards";


const Layout = () => {
  return (
    <>
      <Header />
      
      <main>
        <Services />
        <Cards />
      </main>
     
      <Footer />
    </>
  )
}

export default Layout;