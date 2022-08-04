import { BrowserRouter } from "react-router-dom";
import Card from "../pages/Cards/Cards";

const BodyWrapper = () => {
  return (
    <BrowserRouter>
      <Card />
    </BrowserRouter>
  )
}

export default BodyWrapper;