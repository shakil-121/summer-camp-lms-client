import React from "react";

const FAQ = () => {
  return (
    <div className="mx-16 my-16"> 
    <div>
        <h1 className="text-indigo-900 my-4 text-4xl font-bold">FAQ</h1>
    </div>
      <div className="collapse collapse-plus bg-black mt-3 text-white">
        <input type="radio" name="my-accordion-3"  />
        <div className="collapse-title text-xl font-medium">
          Why Language Master ?
        </div>
        <div className="collapse-content">
          <p>Because I create this .......</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-black mt-3 text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Why we should learn another language ?
        </div>
        <div className="collapse-content">
          <p>For better commonication</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-black mt-3 text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Are you provide free courses ?
        </div>
        <div className="collapse-content">
          <p>No</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-black mt-3 text-white">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
         How we create Instructor account ?
        </div>
        <div className="collapse-content">
          <p>Contact with us</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
