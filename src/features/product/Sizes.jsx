import { getSizes } from '../../services/api';
import { useEffect, useState } from 'react';

const Sizes = ({availableSizes}) => {
  const [allSizes, setAllSizes] = useState([]);

  useEffect(() => {
    getSizes().then(res => {if (res) setAllSizes(res)});
  }, []);

  console.log('render Size', availableSizes)

  return (
    <div className={'sizes'}>
      {allSizes.length > 0 && allSizes.map(item => (
        <label
          className={`size-item ${!availableSizes.find(size => size === item?.id) && 'disabled'}`}
          key={item?.id}
        >
          <input
            type="radio"
            name={'size'}
            value={item?.id}
            disabled={!availableSizes.find(size => size === item?.id)}
          />
          <span >{item?.label} - ({item?.number})</span>
        </label>
      ))}
    </div>
  );
};

export default Sizes;
