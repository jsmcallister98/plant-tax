import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
const images = require.context("../public/images", true);
import { families } from "../data/families";

const Carousel = ({ family, showButtons, nextFamily, prevFamily }) => {
  const [showFamily, setShowFamily] = useState(false);

  const toggleFamily = () => {
    setShowFamily(!showFamily);
  };

  function createMarkup() {
    return { __html: families[family].description };
  }

  const imageList = [];
  let arr = [];
  let arrLength = families[`${family}`]?.numOfImages;
  for (let i = 1; i <= arrLength; i++) arr.push(i);
  arr.map((number) => {
    imageList.push(
      <SwiperSlide key={`slide-${number}`}>
        <Image
          src={images(`./${family}/img${number}.jpg`).default}
          alt={"plant"}
          layout="fill"
          objectFit="contain"
        />
      </SwiperSlide>
    );
  });

  SwiperCore.use([Navigation, Pagination]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-8 md:space-y-0 max-w-6xl w-11/12 mx-auto">
        <div className="w-full md:w-2/3 flex justify-start ml-6">
          <button
            onClick={toggleFamily}
            className="mb-0 md:mb-4 mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            {showFamily ? "Hide" : "Show"} Family
          </button>
          {showFamily && (
            <h1 className="text-2xl ml-4 md:ml-12 mt-5">
              {families[family]?.name} - {families[family]?.commonName}
            </h1>
          )}
        </div>
        <div className="w-full mad-w-md border bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg md:w-2/3">
          <div className="relative h-96 md:h-[32rem] w-full">
            <Swiper
              style={{
                "--swiper-navigation-color": "lightgreen",
                "--swiper-pagination-color": "#fff",
              }}
              navigation
              pagination={{ clickable: true }}
              className="h-96 md:h-[32rem] rounded-2xl"
              loop={true}
            >
              {imageList}
            </Swiper>
          </div>
        </div>
      </div>
      {showButtons && (
        <div className="w-full flex justify-center mx-auto">
          <button
            onClick={prevFamily}
            className="mb-0 md:mb-4 mt-4 mr-4 bg-red-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Previous Family
          </button>
          <button
            onClick={nextFamily}
            className="mb-0 md:mb-4 mt-4 ml-4 bg-green-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Next Family
          </button>
        </div>
      )}
      {showFamily && (
        <div className="max-w-6xl w-11/12 mx-auto">
          <div
            dangerouslySetInnerHTML={createMarkup()}
            className="w-full mt-4 md:w-2/3 mx-auto"
          ></div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
