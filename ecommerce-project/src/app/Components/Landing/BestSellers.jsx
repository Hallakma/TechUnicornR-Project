import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import {
  ArrowRightCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

const BestSellers = () => {
  const items = [
    {
      title: "Bags",
      description: "Queen’s Summer",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg",
    },
    {
      title: "Bags",
      description: "Queen’s Summer",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg",
    },
    {
      title: "Bags",
      description: "Queen’s Summer",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg",
    },
    {
      title: "Bags",
      description: "Queen’s Summer",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg",
    },

    // Add more items as needed
  ];
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 ">
        <div className="mx-auto flex  pb-10 pt-28 justify-between">
          <h1 className="text-[#11142D] text-[48px] ">Best Seller</h1>
        </div>
        <div className="grid grid-cols-1 gap-x-0 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-0">
          {items.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-lg ">
              <Image
                height={100}
                width={100}
                className="h-[296px] w-full  object-cover bg-[#E2E2EA]"
              />
              <div className="text-center">
                <h2 className="text-[14px] mt-2 text-[#F3692E]">
                  {item.title}
                </h2>
                <p className="text-[24px] mt-2 font-bold text-[#11142D]">
                  {item.description}
                </p>
                <p className="mt-2 text-[12px] text-[#515151]">
                  {item.subdesc}
                </p>
                <p className="mt-2 text-[24px] text-[#F3692E]">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
