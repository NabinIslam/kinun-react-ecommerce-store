import React, { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../components/LoadingSpinner';
import { Accordion, Checkbox, Label, Radio, Select } from 'flowbite-react';
import { Combobox } from '@headlessui/react';
import SearchProduct from '../components/SearchProduct';
import { ApiUrlContext } from '../contexts/ApiUrlProvider';

const ProductsLayout = () => {
  const { productApi, setProductApi, refetch } = useContext(ApiUrlContext);

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

  const handleCategory = e => {
    const category = e.target.value;

    const url = `https://kinun.onrender.com/api/products/category/${category}`;

    setProductApi(url);
  };

  if (isFetching) return <LoadingSpinner />;
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="bg-[#F2F4F8]">
      {/* <div className="container mx-auto">
        <SearchProduct />
      </div> */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-4">
        <div className="basis-1/5 py-4 px-4 lg:px-0">
          <div className="w-full bg-white rounded-md shadow ">
            <Accordion alwaysOpen>
              <Accordion.Panel>
                <Accordion.Title>Category</Accordion.Title>
                <Accordion.Content>
                  <fieldset className="flex max-w-md flex-col gap-4">
                    {categories.categories.map(category => (
                      <div
                        className="flex items-center gap-2"
                        key={category._id}
                      >
                        <Radio
                          id={category.slug}
                          name="categories"
                          value={category.slug}
                          onChange={handleCategory}
                        />
                        <Label htmlFor={category.slug}>{category.name}</Label>
                      </div>
                    ))}
                  </fieldset>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Brand</Accordion.Title>
                <Accordion.Content>
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
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
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
