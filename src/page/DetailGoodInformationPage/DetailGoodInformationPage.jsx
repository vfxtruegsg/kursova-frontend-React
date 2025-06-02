import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader.jsx';
import css from './DetailGoodInformationPage.module.css';
import {
  selectGoodInformation,
  selectIsLoading,
} from '../../redux/goods/selectors.js';
import DetailGoodInformation from '../../components/DetailGoodInformation/DetailGoodInformation.jsx';
import { useEffect } from 'react';
import { getCurrentGoodInformation } from '../../redux/goods/operations.js';
import { useParams } from 'react-router-dom';

const DetailGoodInformationPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const selectedGoodInformation = useSelector(selectGoodInformation);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCurrentGoodInformation(id));
  }, [dispatch, id]);

  return (
    <>
      {isLoading && <Loader />}

      <section className="container">
        <DetailGoodInformation data={selectedGoodInformation} />
      </section>
    </>
  );
};

export default DetailGoodInformationPage;
