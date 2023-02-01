import { getProducts } from '../../services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getProducts().then(res => setList(res));
  }, [])

  return (
    <div className={'product-list'}>
      {(!list || list?.length === 0) && (<h4>This list is empty</h4>)}
      {list.map((item) => (
        <ProductItem key={item?.id} {...item} />
      ))}
    </div>
  );
};

const ProductItem = ({name, colors, id}) => {
  return (
    <div className={'product-item'} >
      <Link to={`/product/${id}`}>
        <div className={'image-wrapper'}>
          <img src={colors[0]?.images[0]} alt=""/>
        </div>
      </Link>
      <div className={'product-info'}>
        <span className={'title'}>{name}</span>
        <span className={'colors-descr'}>Цвета: {colors.map(i => i.name).join(', ')}</span>
      </div>
    </div>
  )
};

export default ProductsList;
