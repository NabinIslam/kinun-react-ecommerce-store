import { Button, Table } from 'flowbite-react';
import React, { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

const CartPage = () => {
  const cart = useSelector(state => state.cart.cart);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="container mx-auto py-10">
        <Table className="border" hoverable={true}>
          <Table.Head>
            <Table.HeadCell>Product</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Subtotal</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {cart.map(product => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex items-center gap-2">
                  <img src={product.image} width={50} height={50} alt="" />{' '}
                  <span>
                    <Link
                      className="hover:underline"
                      to={`/products/${product._id}`}
                    >
                      {product.title}
                    </Link>
                  </span>
                </Table.Cell>
                <Table.Cell>${product.price}</Table.Cell>
                <Table.Cell>
                  {product.category.charAt(0).toUpperCase() +
                    product.category.slice(1).toLowerCase()}
                </Table.Cell>
                <Table.Cell>
                  <span className="font-bold flex items-center gap-2">
                    {product.quantity}
                  </span>
                </Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>
                  <Button
                    color="failure"
                    size="sm"
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    <BsFillTrashFill />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default CartPage;
