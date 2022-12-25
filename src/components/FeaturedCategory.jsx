import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCategory = () => {
  const { data: categories = [] } = useQuery({
    queryKey: 'categories',
    queryFn: () =>
      fetch('https://fakestoreapi.com/products/categories').then(res =>
        res.json()
      ),
  });

  return (
    <div>
      <div className="container mx-auto py-10">
        <h2 className="text-center font-bold text-3xl mb-2">
          Featured Category
        </h2>
        <p className="text-center font-semibold">
          Select your Desired Product from Featured Category!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-2xl mx-auto gap-5 px-10 lg:px-0">
          {categories.map((category, index) => (
            <Link to={`/products/${category}`} key={index}>
              <div className="py-10 my-5 shadow hover:shadow-2xl rounded-xl border">
                <p className="font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500">
                  {category.charAt(0).toUpperCase() +
                    category.slice(1).toLowerCase()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
