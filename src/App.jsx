import React from "react";

const App = () => {
  return (
    <>
      <div className="Main flex justify-center items-center min-h-screen">
        <div className="main w-full max-w-3xl bg-white border">
          <div className="headers justify-between px-4 md:px-14 py-2 flex">
            <div className="sitemap font-bold">
              <span className="text-[#5A44BF]">Home/</span>Products
            </div>
            <div className="discount font-bold">60% OFF</div>
          </div>
          <div className="primary bg-[#E1DDF7] md:mx-8 flex flex-col md:flex-row p-4">
            <div className="image bg-[#FFC300] w-full md:w-32 h-32 md:min-h-32  md:mb-0"></div>
            <div className="description flex flex-col items-center justify-center md:px-44  md:ml-4">
              <p className="font-bold md:text-left">
                <span className="text-[#5A44BF]">New </span>Exclusive Product
              </p>
              <div className="text-center md:text-left">Some Details</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
