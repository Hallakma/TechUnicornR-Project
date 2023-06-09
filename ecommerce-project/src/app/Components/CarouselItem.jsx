import React from "react";
import Carousel from "react-multi-carousel";
import ReactMultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const CarouselItem = () => {
  const [currentItem, setCurrentItem] = React.useState(0);

  const nextItem = () => {
    setCurrentItem((prevItem) =>
      prevItem === items.length - 1 ? 0 : prevItem + 1
    );
  };

  const prevItem = () => {
    setCurrentItem((prevItem) =>
      prevItem === 0 ? items.length - 1 : prevItem - 1
    );
  };

  const toggleFavorite = (index) => {
    // Implement your logic to toggle item favorite status here
    console.log("Toggle favorite for item at index", index);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
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
    <div className="relative w-full">
      <div className="mx-auto flex  w-[75%] pb-10 pt-28 justify-between items-center">
        <h1 className="text-[#11142D] text-[48px] max-md:text-[26px]">
          New Arrival
        </h1>
        <h1 className="text-[#F86338] text-[24px] max-md:text-[16px]">
          See ALL
        </h1>
      </div>
      <ReactMultiCarousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        arrows={true}
        showDots={false}
        centerMode={false}
        centerSlidePercentage={20}
        containerClass="carousel-container"
        itemClass="carousel-item"
        beforeChange={(previousSlide, currentSlide) =>
          setCurrentItem(currentSlide)
        }
      >
        {items.map((item, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <button
              onClick={() => toggleFavorite(index)}
              className="absolute top-[30px] right-[40px] bg-transparent border-none focus:outline-none"
            >
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <HeartIcon
                  className={`h-6 w-6 text-[#F86338] ${
                    item.favorite ? "fill-current" : "stroke-current"
                  }`}
                />
              </div>
            </button>
            <Image
              height={100}
              width={100}
              className="h-[296px] w-full  object-cover bg-[#E2E2EA]"
            />
            <div className="text-center">
              <h2 className="text-[14px] mt-2 text-[#F3692E]">{item.title}</h2>
              <p className="text-[24px] mt-2 font-bold text-[#11142D]">
                {item.description}
              </p>
              <p className="mt-2 text-[12px] text-[#515151]">{item.subdesc}</p>
              <p className="mt-2 text-[24px] text-[#F3692E]">{item.price}</p>
            </div>
          </div>
        ))}
      </ReactMultiCarousel>
    </div>
  );
};
export default CarouselItem;
