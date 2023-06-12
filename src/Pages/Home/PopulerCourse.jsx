import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import CourseCard from "./AllCourses/CourseCard";

const PopulerCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const filteredCourses = courses.filter((course) => course.rating < 4.5);
  console.log(filteredCourses);

  return (
    <div className="mx-24">
        <div className="my-16 text-center">
        <h1 className="text-4xl font-bold font-sans  text-indigo-900">Popular Course</h1>
    </div>
      <Swiper

        slidesPerView={3}
        spaceBetween={30}
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
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            filteredCourses.map(course=><SwiperSlide
            key={course?._id}
            >
            <CourseCard
            course={course}
            ></CourseCard>
            </SwiperSlide>)
        }
        
      </Swiper>
    </div>
  );
};

export default PopulerCourse;
