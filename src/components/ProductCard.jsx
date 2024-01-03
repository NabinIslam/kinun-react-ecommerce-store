import { Button } from 'flowbite-react';
import React from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductCard = ({ product }) => {
  const { name, slug, description, price, image, category } = product;
  const { slug: categorySlug } = category;

  const dispatch = useDispatch();

  return (
    <div
      className="shadow bg-white p-4 rounded-lg flex flex-col justify-between hover:scale-95 ease-in duration-75 border"
      data-aos="zoom-in"
    >
      <div>
        <Link to={`/products/${categorySlug}/${slug}`}>
          <img className="h-64 mx-auto" src={image} alt="" />
        </Link>

        <Link to={`/products/${categorySlug}/${slug}`}>
          <h4 className="mt-3 font-semibold text-lg hover:underline text-center">
            {name}
          </h4>
        </Link>
      </div>
      <div>
        <div className="h-[1px] bg-slate-200 mt-3"></div>
        <h3 className="text-center font-bold text-xl mt-3">${price}</h3>

        <Button
          gradientDuoTone="purpleToBlue"
          size="xs"
          className="mx-auto mt-3"
          onClick={() => dispatch(addToCart(product))}
        >
          <CgDetailsMore className="mr-2 h-5 w-5" />
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
