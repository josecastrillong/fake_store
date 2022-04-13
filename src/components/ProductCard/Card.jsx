import { useQuery } from 'react-query'
import { getProducts } from '../../api/store_items'
import styles from './Card.module.css'


function Card() {

  const { isLoading, isError, data, error } = useQuery('todos', getProducts)

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  // We can assume by this point that `isSuccess === true`
  return (

    <article className={styles.card_container}>
      <section className={styles.image_section}>
        <img className={styles.image} src={data[1].image} alt={data[1].title}/>
      </section>
      <section className={styles.title_section}>
        <span className={styles.product_title}>{data[1].title}</span>
      </section>
    </article>
  )
}

export default Card;
