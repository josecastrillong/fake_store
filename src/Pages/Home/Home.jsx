import CardsContainer from '../../components/CardsContainer/CardsContainer';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <CardsContainer id="CardsContainer" />
    </div>
  );
}

export default Home;
