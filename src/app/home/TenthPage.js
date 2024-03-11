import React from "react";
import middle from "../../image/tenmiddle.webp";
import a from "../../image/a.webp";
import b from "../../image/b.webp";
import c from "../../image/c.webp";
import d from "../../image/d.webp";
import e from "../../image/e.webp";

const TenthPage = () => {
  return (
    <div className="flex flex-col items-center h-auto text-center ">
      <div>
        <h1 className="text-[28px]  font-semibold  px-5 ">
          Built with Modern Technology for{" "}
          <span className="text-[#FE5925]  "> Cross-Platform </span> Performance
        </h1>
      </div>

      <div className=" w-full h-full flex py-[5%]">
        <div className="flex w-full mb-[10rem]">
          {/* <div className="flex flex-col items-center justify-center w-full h-full mr-[3rem] ">
            <div className="flex gap-[20%] md:gap-[30%]   ">
              <img
                src={a}
                alt=" "
                className="h-[5rem] md:h-[10rem]  w-[5rem] md:w-[10rem]"
              />
              <img src={middle} alt="" className="w-[4rem] h-[4rem] " />
              <img
                src={e}
                alt=" "
                className="h-[5rem] md:h-[10rem] w-[5rem] md:w-[10rem]"
              />
            </div>

            <div className="flex gap-[60%]">
              <img
                src={b}
                alt=" "
                className="h-[5rem] md:h-[10rem] w-[5rem] md:w-[10rem]"
              />
              <img
                src={d}
                alt=" "
                className="h-[5rem] md:h-[10rem] w-[5rem] md:w-[10rem]"
              />
            </div>

            <div className="lg:ml-[15%] ml-[20%]  flex  -mt-[12%] ">
              <img
                src={c}
                alt=" "
                className="h-[5rem] md:h-[10rem] w-[5rem] md:w-[10rem]"
              />
            </div>
          </div> */}
          <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="relative">
                <img src={middle} alt="" className="w-[10rem] h-[10rem] " />
                <img src={a} alt=" " className="absolute left-[-199px] top-[54px] h-[5rem] md:h-[10rem]  w-[5rem] md:w-[10rem]" />
                <img src={b} alt=" " className="absolute left-[-131px] top-[176px] h-[5rem] md:h-[10rem] w-[5rem] md:w-[10rem]" />
                <img src={c} alt=" " className="absolute left-[20px] top-[226px] h-[5rem] md:h-[10rem] w-[5rem] md:w-[10rem]" />
                <img src={d} alt=" " className="absolute left-[165px] top-[176px] h-[5rem] md:h-[10rem] w-[5rem] md:w-[10rem]" />
                <img src={e} alt=" " className="absolute left-[233px] top-[54px] h-[5rem] md:h-[10rem] w-[5rem] md:w-[10rem]" />
              </div>
          </div>
          {/* <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="relative">
              <img src={middle} alt="" className="w-[10rem] h-[10rem] " />
              {[a, b, c, d, e].map((letter, index) => (
                <img
                  key={letter}
                  src={letter}
                  alt=""
                  className={`absolute 
                    left-${Math.cos((index / 5) * 2 * Math.PI) * 200}px 
                    top-${Math.sin((index / 5) * 2 * Math.PI) * 200}px 
                    h-[5rem] md:h-[10rem] 
                    w-[5rem] md:w-[10rem]`}
                />
              ))}
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default TenthPage;
