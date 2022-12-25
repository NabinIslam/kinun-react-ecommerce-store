import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../contexts/CartProvider';

const Header = () => {
  const { user } = useContext(AuthContext);

  const { cartCount } = useContext(CartContext);

  return (
    <nav className="shadow sticky top-0 z-50 bg-white">
      <div className="container mx-auto">
        <Navbar fluid={true} rounded={true}>
          <Link className="hover:bg-slate-200 px-4 rounded-lg" to="/">
            <h2 className="font-Rubik-Gemstones text-3xl">Kinun</h2>
          </Link>
          <Navbar.Toggle className={user ? 'hidden' : ''} />
          <div
            className={
              user ? 'flex items-center justify-end md:order-2 gap-2' : 'hidden'
            }
          >
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img={
                    user
                      ? user.photoURL
                      : 'https://cdn-icons-png.flaticon.com/512/147/147142.png'
                  }
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {user ? user.displayName : null}
                </span>
                <span className="block truncate text-sm font-medium">
                  {user ? user.email : null}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown>
            <Link className="flex items-center gap-1" to="/cart">
              <AiOutlineShoppingCart className="text-2xl" />
              <p>{cartCount}</p>
            </Link>
            <Navbar.Toggle className="ml-2" />
          </div>

          <Navbar.Collapse>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'font-semibold text-center my-1 lg:my-0 bg-purple-700 text-white px-2 rounded'
                  : 'font-semibold text-center my-1 lg:my-0'
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'font-semibold text-center my-1 lg:my-0 bg-purple-700 text-white px-2 rounded'
                  : 'font-semibold text-center my-1 lg:my-0'
              }
              to="/products/all"
            >
              Products
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'font-semibold text-center my-1 lg:my-0 bg-purple-700 text-white px-2 rounded'
                  : 'font-semibold text-center my-1 lg:my-0'
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </nav>
  );
};

export default Header;
