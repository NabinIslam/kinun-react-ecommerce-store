import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const TopHeader = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate('/login');
        toast.success('Logout successful');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="bg-[#232F3E] text-white">
      <div className="container mx-auto flex items-center justify-between py-1 px-4 lg:px-0">
        <div className="flex items-center gap-5">
          <a href="mailto:info@kinun.com" target="_blank">
            <p className="flex items-center gap-1 text-sm">
              <FaEnvelope />{' '}
              <span className="hidden md:inline">info@kinun.com</span>
            </p>
          </a>

          <a href="tel:+8801234567890">
            <p className="flex items-center gap-1 text-sm">
              <FaPhone />{' '}
              <span className="hidden md:inline">+880 1234 567890</span>
            </p>
          </a>
        </div>
        <div className="m-0 p-0">
          <marquee className="m-0 p-0" behavior="" direction="">
            This website is under development
          </marquee>
        </div>
        <div className="flex items-center gap-2">
          {user ? (
            <Link className="text-sm" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <>
              {' '}
              <Link className="text-sm" to="/login">
                Login
              </Link>
              <span>|</span>
              <Link className="text-sm" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
