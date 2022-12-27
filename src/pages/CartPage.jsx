import { Button, Table } from 'flowbite-react';
import React, { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { CartContext } from '../contexts/CartProvider';

const CartPage = () => {
  const { cart } = useContext(CartContext);

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
            {cart.map(({ image, title, price, category }) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex items-center gap-2">
                  <img src={image} width={50} height={50} alt="" />{' '}
                  <span>{title}</span>
                </Table.Cell>
                <Table.Cell>${price}</Table.Cell>
                <Table.Cell>
                  {category.charAt(0).toUpperCase() +
                    category.slice(1).toLowerCase()}
                </Table.Cell>
                <Table.Cell>
                  <span className="font-bold flex items-center gap-2">
                    <AiOutlinePlus />0<AiOutlineMinus />
                  </span>
                </Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <Button color="failure" size="sm">
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
