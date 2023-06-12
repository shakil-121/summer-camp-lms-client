import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper"; 
import banner1 from "../../assets/banner/banner.png"
import banner2 from "../../assets/banner/banner2.png"
import banner3 from "../../assets/banner/banner3.png" 
import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HoroSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper -z-10"
      >
        <SwiperSlide>
            <img className="w-full" src={banner1} alt="" /> 
            <Link to="/allcourses"><button className="hidden lg:flex btn btn-outline btn-primary absolute -mt-64 ms-32 px-4">All Classes <FaChevronCircleRight></FaChevronCircleRight></button></Link>        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full" src={banner2} alt="" />
            <Link to="/allcourses"><button className="hidden lg:flex btn btn-outline btn-primary absolute -mt-64 ms-32 px-4">All Classes <FaChevronCircleRight></FaChevronCircleRight></button></Link>        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full" src={banner3} alt="" />
            <Link to="/allcourses"><button className="hidden lg:flex btn btn-outline btn-primary absolute -mt-64 ms-32 px-4">All Classes <FaChevronCircleRight></FaChevronCircleRight></button></Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HoroSection;
