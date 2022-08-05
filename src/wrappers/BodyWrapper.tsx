import { BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import "./BodyWrapper.css"

const BodyWrapper = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  )
}

export default BodyWrapper;