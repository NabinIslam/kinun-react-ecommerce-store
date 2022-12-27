import { Button, Table } from 'flowbite-react';
import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

const CartPage = () => {
  return (
    <div>
      <div className="container mx-auto py-10">
        <Table className="border" hoverable={true}>
          <Table.Head>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Subtotal</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Apple MacBook Pro 17"
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>
                <Button color="failure" size="sm">
                  <BsFillTrashFill />
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default CartPage;
