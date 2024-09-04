import React from "react";
import Popular from "../../../../assets/Collection/Popular.jpg";
import Childrent from "../../../../assets/Collection/Childrengt.jpg";
import Men from "../../../../assets/Collection/Men.jpg";
import Girl from "../../../../assets/Collection/Girl.jpg";
import Stylist from "../../../../assets/Collection/Stylist.jpg";
import { Button } from "antd";
import { Link } from "react-router-dom";
function Collection() {
  return (
    <section className="Collection my-10">
      <div className="title text-primary font-bold text-center py-5 text-3xl">
        Collection
      </div>
      <div className="collection-section flex flex-col sm:flex-row justify-center items-center h-10 px-5 gap-5 w-full h-full sm:h-[50vh] lg:h-[85vh]">
        <div className="flex flex-col w-full sm:w-[28.5%] h-full gap-5">
          <Link
            to="allProducts"
            className="flex w-full h-[30vh] sm:h-full bg-primary  overflow-hidden relative"
          >
            <img
              src={Men}
              alt=""
              className="Collection-image w-full h-full object-cover cursor-pointer object-top hover:scale-110 hover:opacity-80"
              style={{ transition: "all 400ms ease-in-out" }}
            />
            <h1
              className=" collection-title absolute bottom-5 w-72 text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-light text-semibold text-4xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pointer-events-none font-medium"
              style={{ textShadow: "2px 4px 3px rgba(255,255,255,0.6)" }}
            >
              Men Clothes
            </h1>
          </Link>
          <Link
            to="allProducts"
            className="flex w-full h-[30vh] sm:h-full bg-primary overflow-hidden relative"
          >
            <img
              src={Girl}
              alt=""
              className="Collection-image  w-full h-full object-cover cursor-pointer object-top hover:scale-110 hover:opacity-80"
              style={{ transition: "all 400ms ease-in-out" }}
            />
            <h1
              className=" collection-title absolute bottom-5 w-72 text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-light text-semibold text-4xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pointer-events-none font-medium"
              style={{ textShadow: "2px 4px 3px rgba(255,255,255,0.6)" }}
            >
              Women Clothes
            </h1>
          </Link>
        </div>
        <Link
          to="allProducts"
          className="w-full sm:w-[43%] h-[40vh] sm:h-full bg-primary overflow-hidden relative"
        >
          <img
            src={Popular}
            alt=""
            className="Collection-image w-full h-full object-cover object-top cursor-pointer hover:scale-110 hover:opacity-80"
            style={{ transition: "all 400ms ease-in-out" }}
          />
          <h1
            className=" collection-title absolute bottom-5 w-72 text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-light text-semibold text-4xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pointer-events-none font-medium"
            style={{ textShadow: "2px 4px 3px rgba(255,255,255,0.6)" }}
          >
            Most Popular
          </h1>
        </Link>
        <div className="flex flex-col w-full sm:w-[28.5%] h-full gap-5">
          <Link
            to="allProducts"
            className="flex w-full h-[30vh] sm:h-full  bg-primary overflow-hidden relative"
          >
            <img
              src={Stylist}
              alt=""
              className="Collection-image w-full h-full object-cover cursor-pointer object-top hover:scale-110 hover:opacity-80"
              style={{ transition: "all 400ms ease-in-out" }}
            />
            <h1
              className=" collection-title absolute bottom-5 w-72 text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-light text-semibold text-4xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pointer-events-none font-medium"
              style={{ textShadow: "2px 4px 3px rgba(255,255,255,0.6)" }}
            >
              Staff Choice
            </h1>
          </Link>
          <Link
            to="allProducts"
            className="flex w-full h-[30vh] sm:h-full bg-primary overflow-hidden relative"
          >
            <img
              src={Childrent}
              alt=""
              className="Collection-image w-full h-full object-cover cursor-pointer object-top hover:scale-110 hover:opacity-80"
              style={{ transition: "all 400ms ease-in-out" }}
            />
            <h1
              className=" collection-title absolute bottom-5 w-72 text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-light text-semibold text-4xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pointer-events-none font-medium"
              style={{ textShadow: "2px 4px 3px rgba(255,255,255,0.6)" }}
            >
              Children Clothes
            </h1>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Collection;
