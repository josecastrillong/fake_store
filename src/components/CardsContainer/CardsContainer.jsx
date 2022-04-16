import { useQuery } from 'react-query'
import { getProducts } from '../../api/store_items'
import Card from '../ProductCard/Card'
import styles from './CardsContainer.module.css'


function CardContainer() {

  const { isLoading, isError, data, error } = useQuery('todos', getProducts)

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <section className={styles.product_section}>
      {data.map((product) => (
        <Card key={product.id} image={product.image} title={product.title} />
      ))}
    </section>
  )
}

export default CardContainer;
