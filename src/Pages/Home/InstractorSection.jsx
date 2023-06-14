import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { FaBookOpen } from "react-icons/fa";

const InstractorSection = () => {
  const [instractor, setainstractor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user/instructor")
      .then((res) => res.json())
      .then((data) => setainstractor(data));
  }, []);

  return (
    <div className="mx-16 sm:block"> 
    <div className="my-16 text-center">
        <h1 className="text-4xl font-bold font-sans  text-indigo-900">Popular Instructor</h1>
    </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {instractor.map((ins) => (
          <SwiperSlide key={ins._id}>

            <div className="card w-62 bg-base-100 shadow-xl">
                <img
                  src={ins?.image}
                  alt="Shoes"
                  className="rounded-xl"
                />
              
              <div className="card-body items-center text-center">
                <h2 className="card-title">{ins?.name}</h2>
                <p className="text-base">Instructor</p>
                <div className="flex items-center">
                    <FaBookOpen className="text-indigo-700 me-3"></FaBookOpen>
                    <p>Total Course: {ins?.totalClasses}</p>
                </div>
                <div className="card-actions">
                  <button className="btn btn-primary">See Details</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstractorSection;
