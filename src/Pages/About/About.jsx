/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import Navbar from '../../components/Navbar/Navbar';
import astronaut from '../../assets/atronaut.png';
import styles from './About.module.css';

function About() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <article className={styles.about_section}>
        <div className={styles.image}>
          <img className={styles.astronaut} src={astronaut} alt="about me" />
        </div>
        <section className={styles.info}>
          <div>Hi!</div>
          <p>
            I'm Jose Miguel Castrillón Giraldo and I'm currently looking for opportunities in IT industry as a Front-end developer.
            <br />
            <br />
            I'm passionate about technology, specially when is build to improve people's life quality.
            <br />
            <br />
            I built this project for a front-end assesment at Make It Real bootcamp, having the chance
            to practice react useEffect and useState, fetching information from API's using React Query,
            navigation links with React Router DOM and specially building a project in a component based
            structure.
          </p>
          <div>
            <p>Contact Me</p>
            <hr />
            <p>email: josecastrillong@gmail.com</p>
            <p>
              If you like my work checkout my
              <a className={styles.link} target="_blank" rel="noreferrer" href="https://github.com/josecastrillong">
              &nbsp;GitHub.
              </a>
            </p>
          </div>
        </section>
      </article>
    </>
  );
}

export default About;
