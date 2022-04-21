import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getProductsById } from '../../api/store_items';
import styles from './ProductReview.module.css';

function ProductReview() {
  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery(['products', id], () => getProductsById(id));

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return (
      <span>
        Error:
        {' '}
        {error.message}
      </span>
    );
  }
  return (
    <article className={styles.card_container}>
      <section className={styles.image_section}>
        <img className={styles.image} src={data.image} alt={data.title} />
      </section>
      <section className={styles.title_section}>
        <span className={styles.product_title}>
          {data.title}
          <hr />
        </span>
        <span className={styles.product_price}>
          $
          {data.price}
          USD
        </span>
        <span className={styles.product_category}>
          Category
          <hr />
          <span className={styles.product_title}>{data.category}</span>
        </span>
        <span className={styles.product_description}>
          <span>Description</span>
          <hr />
          <span className={styles.description}>{data.description}</span>
        </span>
      </section>
    </article>
  );
}

export default ProductReview;
