import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../redux/operations';
import { AdvertCard } from 'components/AdvertCard/AdvertCard';
import { selectAdverts } from '../../redux/selectors';
import { Btn, Wrapper } from './Catalog.styled';

export const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAll({ page, limit: 12 }));
  }, [dispatch, page]);

  return (
    <>
      <Wrapper>
        {adverts.map(item => (
          <AdvertCard key={item.id} item={item} />
        ))}
      </Wrapper>
      <Btn
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Load more
      </Btn>
    </>
  );
};
