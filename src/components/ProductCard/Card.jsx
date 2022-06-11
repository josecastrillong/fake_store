import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';

function Card(props) {
  const { image, title, id } = props;
  const navigate = useNavigate();

  const [time, setTime] = useState(Math.round(Math.random() * (3600 - 10)));
  const clockTime = {
    minutes: Math.floor((time / 60) % 60),
    seconds: Math.floor((time % 60)),
  };

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => setTime(time - 1), 1000);
    } else {
      setTime('Offer is over');
    }
  });

  const handleClick = () => {
    if (time > 0) {
      navigate(`/products/${id}`);
    }
  };

  return (
    <article className={styles.card_container}>
      <button onClick={handleClick} className={styles.button} type="button">{ time > 0 ? 'More details' : 'Offer is over'}</button>
      <section className={styles.image_section}>
        <img className={styles.image} src={image} alt={title} />
        <div className={styles.tick_tac}>{ time > 0 ? `${clockTime.minutes} min ${clockTime.seconds} seconds` : time}</div>
      </section>
      <section className={styles.title_section}>
        <span className={styles.product_title}>{title}</span>
      </section>
    </article>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
};

Card.defaultProps = {
  image: 'some default',
  title: 'some default',
  id: 0,
};

export default Card;
