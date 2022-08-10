import CardEstateObject from "./CardEstateObject/CardEstateObject";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Estate } from "../../types/models/estate";
import styles from "./Cards.module.css"
import CardFlat from "./CardFlat/CardFlat";
import CardHouse from "./CardHouse/CardHouse";


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
    <>
    <section className={styles.cardEstate}>
      <h2 className={styles.cardTitle}>Объекты недвижимости</h2>
      <div className={styles.cardWrapper}>
        {error && <p>{ error }</p>}
        {products.map(product =><CardEstateObject item={product} key={product.id}/> ) }
      </div>
    </section>
    
    <section className="cardFlat">
      <CardFlat />
      <CardHouse />
    </section>
    </>
    
  );
};

export default Cards;
