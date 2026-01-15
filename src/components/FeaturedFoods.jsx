"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";



import Image from "next/image";




const FeaturedFoods = () => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="py-10 bg-white overflow-hidden">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Our Popular Dishes 🍴
      </h1>

      <div className="slider-container">
      <Slider {...settings}>
        {/* <div className="h-20 relative">
          <img src="/Images/cheese-burger-2.png" alt="Cheese Burger" width={140} height={140}  />
        </div>
       <div className="h-20 relative">
          <img src="/Images/cheese-burger-2.png" alt="Cheese Burger" width={140} height={140} />
        </div> */}
        <div className="p-4 bg-gray-200 h-64 flex items-center justify-center">
          <h3>Slide 1</h3>
        </div>
        <div className="p-4 bg-gray-200 h-64 flex items-center justify-center">
          <h3>Slide 1</h3>
        </div>

      </Slider>
    </div>
    </div>
  );
};

export default FeaturedFoods;
