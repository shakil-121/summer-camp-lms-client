import React from "react";
import Marquee from "react-fast-marquee";
import u1 from "../../assets/companyLogo/u1.png";
import u2 from "../../assets/companyLogo/u2.png";
import u3 from "../../assets/companyLogo/u3.png";
import u4 from "../../assets/companyLogo/u4.png";
import u5 from "../../assets/companyLogo/u5.png";
import u6 from "../../assets/companyLogo/u6.png";

const TrastedBy = () => {
  return (
    <div className="my-24">
      <div className="text-center my-12">
        <p className="text-violet-700 font-bold pb-4 text-xl font-sans font-bold">Trusted By</p>
        <h1 className="text-4xl font-bold font-sans  text-indigo-900">600+ Leading Universities And Companies</h1>
      </div>
      <Marquee
      speed={120}
      className="flex">
        <img className="h-10 ps-16 w-auto" src={u1} alt="" />
        <img className="h-10 ps-16 w-auto" src={u2} alt="" />
        <img className="h-10 ps-16 w-auto" src={u3} alt="" />
        <img className="h-10 ps-16 w-auto" src={u4} alt="" />
        <img className="h-10 ps-16 w-auto" src={u5} alt="" />
        <img className="h-10 ps-16 w-auto" src={u6} alt="" />
        <img className="h-10 ps-16 w-auto" src={u1} alt="" />
        <img className="h-10 ps-16 w-auto" src={u2} alt="" />
        <img className="h-10 ps-16 w-auto" src={u3} alt="" />
        <img className="h-10 ps-16 w-auto" src={u4} alt="" />
        <img className="h-10 ps-16 w-auto" src={u5} alt="" />
      </Marquee>
    </div>
  );
};

export default TrastedBy;
