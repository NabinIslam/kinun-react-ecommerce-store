import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../components/LoadingSpinner';
import { Select } from 'flowbite-react';
import { Combobox } from '@headlessui/react';
import SearchProduct from '../components/SearchProduct';

const ProductsLayout = () => {
  const {
    data: categories = [],
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () =>
      fetch('https://kinun.onrender.com/api/categories').then(res =>
        res.json()
      ),
  });

  if (isFetching) return <LoadingSpinner />;
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="bg-[#F2F4F8]">
      {/* <div className="container mx-auto">
        <SearchProduct />
      </div> */}
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
              to="/products"
            >
              All Products
            </NavLink>

            {categories.categories.map(category => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'bg-slate-200 px-3 py-2 block'
                    : 'hover:bg-slate-200 px-3 py-2 block'
                }
                to={`/products/${category.slug}`}
                key={category._id}
              >
                {category.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="basis-full p-4">
          <div>
            <div className="bg-white py-2 px-2 mb-2 flex items-center justify-between rounded-lg shadow">
              <h2 className="text-lg font-bold">Products</h2>
              <div className="flex items-center gap-2">
                <p className="font-bold">Sort By: </p>
                <form action="">
                  <Select className="w-24" sizing="sm" onChange={() => {}}>
                    <option value="normal">Default</option>
                    <option value="lowest">Price (Low to High)</option>
                    <option value="highest">Price (High to Low)</option>
                  </Select>
                </form>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
