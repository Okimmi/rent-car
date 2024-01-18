import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../redux/operations';
import { AdvertCard } from 'components/AdvertCard/AdvertCard';
import { selectAdverts } from '../../redux/selectors';

export const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAll({ page: 1, limit: 10 }));
  }, [dispatch]);

  return (
    <div>
      {adverts.map(item => (
        <AdvertCard key={item.id} item={item} />
      ))}
    </div>
  );
};
