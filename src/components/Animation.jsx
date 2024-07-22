import React from "react";

const Animation = () => {
  return (
    <div>
      <h1 className="text-3xl text-center m-auto mt-[40px] underline">
        Animation Type 1
      </h1>
      <div className="relative  h-[500px] w-[500px]">
        <div className="bg-bgcolor  w-[230px] h-[280px] absolute top-20 left-20 flex  rounded overflow-hidden ">
          <div className="relative h-full w-[180px]">
            <div className="absolute -top-[60px] left-3 h-[390px] w-[170px] bg-gradient-to-t from-sky to-violet  animate-spin-slow"></div>
            <div className="relative flex justify-center items-center bg-bgcolor m-1 w-[221px] h-[271px] rounded">
              <h1 className="text-white font-sans font-bold text-5xl">CSS</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Animation;
