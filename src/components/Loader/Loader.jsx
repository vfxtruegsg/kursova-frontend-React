import { CircleLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <CircleLoader size={150} color="#0b44cd" />
    </div>
  );
};

export default Loader;
