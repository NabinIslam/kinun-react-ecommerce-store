import { Badge, Button } from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { useParams } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';
import { CartContext } from '../contexts/CartProvider';
import ProductDescription from '../components/ProductDescription';
import ProductReviews from '../components/ProductReviews';

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

  const { id, image, title, price, category, description, rating } =
    productDetail;

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
              addToCart(
                id,
                image,
                title,
                price,
                category,
                description,
                productDetail
              )
            }
          >
            <BsCartPlus className="mr-2 h-5 w-5" />
            Add to cart
          </Button>
        </div>
      </div>
      <ProductDescription title={title} description={description} />
      <ProductReviews rating={rating} />
    </div>
  );
};

export default ProductDetails;
