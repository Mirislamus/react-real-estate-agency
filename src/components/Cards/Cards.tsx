import CardEstateObject from "./CardEstateObject/CardEstateObject";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Estate } from "../../types/models/estate";
import "./Cards.scss";


const Cards = () => {

  const [products, setProducts] = useState<Estate[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get('https://62eb559fad295463259c04bb.mockapi.io/estate')
      setProducts(response.data)
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect( () => {
    fetchProducts()
  }, [])

  return (
    <section className="card">
      <h1 className="card-title">Объекты недвижимости</h1>
      <div className="card-wrapper">
        {error && <p>{ error }</p>}
        {products.map(product =><CardEstateObject product={product} key={product.id}/> ) }
      </div>
    </section>
  );
};

export default Cards;
