"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Ads = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="container mx-auto xl:max-w-[1180px] flex items-center justify-center pt-[35px]">
      <img
        src="/assets/add.png"
        alt="Advertisement"
        className="w-[80%] cursor-pointer"
        width={1200}
        height={200}
      />
    </div>
  );
};

export default Ads;
