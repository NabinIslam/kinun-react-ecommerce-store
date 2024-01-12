import { Button, Table } from 'flowbite-react';
import React, { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';
import toast from 'react-hot-toast';

const CartPage = () => {
  const cart = useSelector(state => state.cart.cart);

  console.log(cart);

  const dispatch = useDispatch();

  if (cart.length === 0)
    return (
      <main className="py-20">
        <div className="container mx-auto py-10 text-center font-bold text-4xl">
          <h1 className="">Your cart is empty</h1>
          <p>😔</p>
        </div>
      </main>
    );

  return (
    <main>
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
                      {product.name}
                    </Link>
                  </span>
                </Table.Cell>
                <Table.Cell>${product.price}</Table.Cell>
                <Table.Cell>{product.category.name}</Table.Cell>
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
                    onClick={() => {
                      dispatch(removeFromCart(product));
                      toast.error(`Item removed from cart`);
                    }}
                  >
                    <BsFillTrashFill />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </main>
  );
};

export default CartPage;
