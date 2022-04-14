import { useQuery } from 'react-query'
import { useState, useEffect } from 'react';
import { getProducts } from '../../api/store_items'
import styles from './Card.module.css'


function Card() {

  const [time, setTime] = useState(Math.round(Math.random() * (3600 - 10)));
  const clockTime = {
    minutes: Math.floor((time /  60) % 60),
    seconds: Math.floor((time % 60 ))
  };

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => setTime(time - 1), 1000); 
    } else {
      setTime('Offer is over')
    }
  })

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
        <div className={styles.tick_tac}>{ time > 0 ? `${clockTime.minutes} min ${clockTime.seconds} seconds` : time}</div>
      </section>
      <section className={styles.title_section}>
        <span className={styles.product_title}>{data[1].title}</span>
      </section>
    </article>
  )
}

export default Card;
