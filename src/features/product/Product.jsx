import { useEffect, useState } from 'react';
import { getProduct } from '../../services/api';
import { useParams } from 'react-router-dom';
import Sizes from './Sizes';
import Colors from './Colors';
import Carousel from '../../components/Carousel';

const Product = () => {
  const [product, setProduct] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const {id} = useParams();

  console.log('renderProduct', activeColor);

  useEffect(() => {
    getProduct(+id).then(res => {
      if (res) {
        setProduct(res);
        setActiveColor(res?.colors[0])
      }
    });
  }, [id]);

  const handleColorChange = (color) => {
    setActiveColor(color);
  }

  return (
    <>
      {!product ? (<h1>Product not found</h1>) : (
        <div className={'product'}>
          <span className={'title'}>{product?.name}</span>
          <div className={'carousel-wrapper'}>
            <Carousel
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              slides={activeColor?.images}
            />
          </div>
          <div className={'info'}>
            <span className={'description'}>{activeColor?.description}</span>
            <span className={'price'}>{activeColor?.price}</span>
            <Sizes availableSizes={activeColor?.sizes} />
            <Colors colors={product?.colors} onChange={handleColorChange}/>
          </div>
        </div>
      )}
    </>
  )
};

export default Product;
