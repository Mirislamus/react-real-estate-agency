import { PropsWithChildren } from "react";
import { Category } from "../../types/modals/category";
import Footer from "./Footer/Footer";

const Layout = ({id, children}:Category) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}

export default Layout;