import React from 'react';
import { Badge, Button } from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../components/LoadingSpinner';
import { useParams } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';
import ProductDescription from '../components/ProductDescription';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import parse from 'html-react-parser';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const {
    data: product = [],
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['product'],
    queryFn: () =>
      fetch(`https://kinun.onrender.com/api/products/${slug}`).then(res =>
        res.json()
      ),
  });

  if (isFetching) return <LoadingSpinner />;
  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      {/* <h1>{slug}</h1> */}
      <div className="container mx-auto flex flex-col md:flex-row py-10 px-4 md:px-0">
        <div className="basis-1/2 px-24">
          <img
            className="lg:h-[50vh] mx-auto"
            src={product.product.image}
            alt=""
          />
        </div>
        <div className="basis-1/2">
          <h3 className="text-2xl font-semibold">{product.product.name}</h3>
          <div className="flex items-center gap-2 my-3">
            <Badge size="lg">Price: ${product.product.price}</Badge>
            <Badge size="lg">Category: {product.product.category.name}</Badge>
            <Badge size="lg">Status: {product.product.status}</Badge>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Key features</h3>
            <div>{parse(product.product.shortDescription)}</div>
          </div>
          <Button
            color="purple"
            size="xs"
            className="mt-3"
            onClick={() => dispatch(addToCart(product.product))}
          >
            <BsCartPlus className="mr-2 h-5 w-5" />
            Add to cart
          </Button>
        </div>
      </div>
      <ProductDescription
        title={product.product.name}
        description={product.product.description}
      />
    </div>
  );
};

export default ProductDetails;
