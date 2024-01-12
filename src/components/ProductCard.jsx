import { Button } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import toast from 'react-hot-toast';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { AuthContext } from '../contexts/AuthProvider';

const ProductCard = ({ product }) => {
  const [wishlist, setWishlist] = useState(false);
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);

  const { name, slug, price, image, category } = product;
  const { slug: categorySlug } = category;

  const handleAddToWishlist = () => {
    const wishlist = {
      user: {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      },
      product: product._id,
    };

    fetch('https://kinun.onrender.com/api/wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wishlist),
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          setFavorite(true);
          toast.success(`The product added to wishlist`);
        }
      });
  };

  return (
    <div
      className="relative shadow bg-white p-4 rounded-lg flex flex-col justify-between hover:scale-95 ease-in duration-75 border"
      data-aos="zoom-in"
    >
      {user && (
        <span className="absolute right-4 z-50">
          <button onClick={() => setFavorite(!favorite)}>
            {favorite ? (
              <MdFavorite className="text-xl cursor-pointer" />
            ) : (
              <MdFavoriteBorder className="text-xl cursor-pointer" />
            )}
          </button>
        </span>
      )}

      <div>
        <Link to={`/products/${categorySlug}/${slug}`}>
          <img className="h-auto mx-auto w-full" src={image} alt="" />
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
          onClick={() => {
            dispatch(addToCart(product));
            toast.success(`The product added to cart`);
          }}
        >
          <CgDetailsMore className="mr-2 h-5 w-5" />
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
