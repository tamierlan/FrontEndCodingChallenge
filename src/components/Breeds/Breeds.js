import './Breeds.css';

import BreedCard from './BreedCard.js/BreedCard';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../common/constants/routes';

const Breeds = () => {
  // get the first 12 dog breeds using the "BreedsService" and use them in this component
  let data;

  return (
    <>
      <div className="arrow-container">
        <Link to={ROUTES.home} className="back-arrow">
          <span className="arrow-label">Home</span>
        </Link>
      </div>
      <h2 className="title">Dog Breeds</h2>
      <div className="container">
        {data &&
          data.map((breed) => {
            return <BreedCard breed={breed} key={breed.id} />;
          })}
      </div>
      <div className="centered">
        <button className="button">Load More</button>
      </div>
    </>
  );
};

export default Breeds;
