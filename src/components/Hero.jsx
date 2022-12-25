import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero-img.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around py-10 gap-10 px-4 lg:px-0">
        <div className="text-center md:text-left">
          <h6 className="font-bold text-2xl" data-aos="zoom-in">
            Welcome to
          </h6>
          <h1
            className="font-extrabold text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500"
            data-aos="zoom-in"
          >
            Kinun
          </h1>
          <p className="font-normal mb-2 text-2xl" data-aos="zoom-in">
            The leading ecommerce store in the planet.
          </p>
          <Link to="/products/all">
            <Button
              className="mx-auto md:m-0"
              gradientDuoTone="purpleToBlue"
              data-aos="zoom-in"
            >
              Shop Now
            </Button>
          </Link>
        </div>
        <div className="">
          <img className="rounded-lg" src={heroImg} alt="" data-aos="zoom-in" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
