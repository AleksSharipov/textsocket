import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhones } from '../../redux/actions';

import './table.scss'

export default function Table() {
  const dispatch = useDispatch();
  const { phones } = useSelector(state => state.data);

  React.useEffect(() => {
    dispatch(fetchPhones());
  }, []);

  return (
    <div className="table">
      <ul>
        {
          phones && phones.map(el => {
            return (
              <li key={el.id}>{el.phone}</li>
            )
          })
        }
      </ul>
    </div >
  )
}
