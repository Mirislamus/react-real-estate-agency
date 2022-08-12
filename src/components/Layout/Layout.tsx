import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Cards from "../Cards/Cards";
import Form from "../Form/Form";


const Layout = () => {
  return (
    <>
      <Header />
      
      <main>
        <Services />
        <Cards />
        <Form />
      </main>
     
      <Footer />
    </>
  )
}

export default Layout;