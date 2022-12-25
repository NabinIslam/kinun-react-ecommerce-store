import { Badge, Button } from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { useParams } from 'react-router-dom';
import { HiShoppingCart } from 'react-icons/hi';
import { CartContext } from '../contexts/CartProvider';

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);

  const { productId } = useParams();

  const {
    data: productDetail = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['productDetail'],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products/${productId}`).then(res =>
        res.json()
      ),
  });

  if (isFetching) {
    return <LoadingSpinner />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const { id, image, title, price, category, description } = productDetail;

  return (
    <div>
      <div className="container mx-auto flex flex-col md:flex-row py-10 px-4 md:px-0">
        <div className="basis-1/2 px-24">
          <img className="lg:h-[50vh] mx-auto" src={image} alt="" />
        </div>
        <div className="basis-1/2">
          <h3 className="text-2xl">{title}</h3>
          <div className="flex items-center gap-2 my-3">
            <Badge size="lg">Price: ${price}</Badge>
            <Badge size="lg">
              Category:{' '}
              {category.charAt(0).toUpperCase() +
                category.slice(1).toLowerCase()}
            </Badge>
          </div>
          <Button
            color="purple"
            size="xs"
            className="mt-3"
            onClick={() =>
              addToCart(id, image, title, price, category, description)
            }
          >
            <HiShoppingCart className="mr-2 h-5 w-5" />
            Buy now
          </Button>
        </div>
      </div>
      <div className="bg-[#F2F4F8] px-4 md:px-0">
        <div className="container mx-auto py-5">
          <div className="bg-white p-5 w-full lg:w-1/2 rounded-lg shadow">
            <h4 className="font-semibold text-xl mb-5">Description</h4>
            <h4 className="font-bold text-xl mb-2">{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
