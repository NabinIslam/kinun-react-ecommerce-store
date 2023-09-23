import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const ProductsLayout = () => {
  const { data: categories = [] } = useQuery({
    queryKey: 'categories',
    queryFn: () =>
      fetch('https://fakestoreapi.com/products/categories').then(res =>
        res.json()
      ),
  });

  return (
    <div className="bg-[#F2F4F8]">
      <div className="container mx-auto flex flex-col lg:flex-row gap-4">
        <div className="basis-1/5 py-4 px-4 lg:px-0">
          <div className="w-full bg-white rounded-md shadow lg:sticky lg:top-[70px]">
            <h6 className="mx-3 py-1 font-semibold text-xl">Category</h6>
            <div className="bg-slate-200 h-[1px]"></div>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'bg-slate-200 px-3 py-2 block'
                  : 'hover:bg-slate-200 px-3 py-2 block'
              }
              to="/products/all"
            >
              All Products
            </NavLink>

            {categories.map((category, index) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'bg-slate-200 px-3 py-2 block'
                    : 'hover:bg-slate-200 px-3 py-2 block'
                }
                to={`/products/${category}`}
                key={index}
              >
                {category.charAt(0).toUpperCase() +
                  category.slice(1).toLowerCase()}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="basis-full p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
