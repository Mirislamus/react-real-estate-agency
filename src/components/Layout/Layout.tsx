import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";


const Layout = () => {
  return (
    <>
      <Header />
      
      <main>
        <Services />
      </main>
     
      <Footer />
    </>
  )
}

export default Layout;