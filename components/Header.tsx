"use client";

import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [data, setData] = useState<any[]>([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/banners?populate=*`);
        if (response.data?.data) {
          setData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="header">
      <div className="overflow-hidden max-h-[575px] container mx-auto xl:max-w-[1180px]">
        <Slider {...settings}>
          {data.length > 0 ? (
            data.map((item: any, index: number) => {
              const imageUrl = item?.image?.formats?.large?.url
                ? `${process.env.NEXT_PUBLIC_API_URL}${item.image.formats.large.url}`
                : item?.image?.url
                ? `${process.env.NEXT_PUBLIC_API_URL}${item.image.url}`
                : null;

              return imageUrl ? (
                <div key={index} className="w-full h-[500px]">
                  <img
                    src={imageUrl}
                    alt={`Banner ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div key={index} className="w-full h-[500px] flex items-center justify-center bg-gray-700 text-gray-300">
                  No Image Available
                </div>
              );
            })
          ) : (
            <p className="text-white text-center">Loading...</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Header;
