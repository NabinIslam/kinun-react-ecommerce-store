import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { Button, FileInput, Label, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

const UpdateProduct = () => {
  const { id } = useParams();
  const { handleSubmit, register, reset } = useForm();
  const [description, setDescription] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    data: product = [],
    isFetching: isFetchingProduct,
    isLoading: isLoadingProduct,
  } = useQuery({
    queryKey: ['product'],
    queryFn: () =>
      fetch(
        `https://kinun-react-ecommerce-server-production.up.railway.app/api/products/id/${id}`
      ).then(res => res.json()),
  });

  console.log(product);

  const {
    data: categories = [],
    isFetching: isFetchingCategories,
    isLoading: isLoadingCategories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () =>
      fetch(
        'https://kinun-react-ecommerce-server-production.up.railway.app/api/categories'
      ).then(res => res.json()),
  });

  const {
    data: brands = [],
    isFetching: isFetchingBrands,
    isLoading: isLoadingBrands,
  } = useQuery({
    queryKey: ['brands'],
    queryFn: () =>
      fetch(
        `https://kinun-react-ecommerce-server-production.up.railway.app/api/brands`
      ).then(res => res.json()),
  });

  const handleUpdateProduct = () => {};

  if (
    isFetchingProduct ||
    isLoadingProduct ||
    isFetchingCategories ||
    isLoadingCategories ||
    isFetchingBrands ||
    isLoadingBrands
  )
    return <LoadingSpinner />;

  return (
    <main>
      <div className="container mx-auto">
        <form action="" onSubmit={handleSubmit(handleUpdateProduct)}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput
              {...register('name')}
              type="text"
              sizing="md"
              defaultValue={product?.product?.name}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="shortDescription" value="Short description" />
            </div>
            <ReactQuill
              className="h-48 block"
              theme="snow"
              defaultValue={product?.product?.shortDescription}
              onChange={setShortDescription}
            />
          </div>
          <div className="mt-12">
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <ReactQuill
              className="h-48 block"
              theme="snow"
              defaultValue={product?.product?.description}
              onChange={setDescription}
            />
          </div>
          <div className="mt-12">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput
              {...register('price')}
              type="number"
              sizing="md"
              defaultValue={product?.product?.price}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="image" value="Image" />
            </div>
            <FileInput {...register('image')} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="select" value="Category" />
            </div>

            <Select {...register('category')}>
              {categories?.categories?.map(category => (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="select" value="Brand" />
            </div>

            <Select {...register('brand')}>
              {brands?.brands?.map(brand => (
                <option value={brand._id} key={brand._id}>
                  {brand.name}
                </option>
              ))}
            </Select>
          </div>
          <div className="mt-3">
            <Button type="submit" color="success">
              Update
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default UpdateProduct;
