import { useQuery } from 'react-query';
import { getProducts } from '../../api/store_items';
import Card from '../ProductCard/Card';
import styles from './CardsContainer.module.css';

function CardContainer() {
  const { isLoading, isError, data, error } = useQuery('products', getProducts);

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
    <section className={styles.product_section}>
      {data.map((product) => (
        // eslint-disable-next-line max-len
        <Card key={product.id.toString()} id={product.id} image={product.image} title={product.title} />
      ))}
    </section>
  );
}

export default CardContainer;
