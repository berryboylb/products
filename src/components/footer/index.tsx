import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/svgs/arrow.svg";
const index = () => {
  return (
    <footer className="py-[5rem] md:py-[2rem] border-t-[10px] border-primary w-screen bg-background">
      <div className="my-container">
        <div className="flex  md:flex-col">
          <div className="">
            <h2 className="flex items-center  font-sora text-secondary text-base font-semibold lg:text-sm"> <img className="w-[20px] h-[20px]  object-contain mr-[10px]" src={arrow} alt="arrow" /> Contact</h2>
            <p className="text-secondary  text-base my-2 font-sora font-thin lg:text-sm">Produkter.dk Esbjerg Brygge 30 6700 Esbjerg</p>
            <Link className="block text-primary hover:underline text-base my-2 font-sora font-medium lg:text-sm" to ="/">Contact@Producter.dk</Link>
            <Link className="block text-primary hover:underline text-base my-2 font-sora font-medium lg:text-sm"  to ="/">+45 33 73 20 00</Link>
          </div>
          <div className="ml-[5rem] md:ml-[0] lg:ml-[3rem] md:mt-[2rem]">
            <h2 className="flex items-center font-sora text-secondary text-base font-semibold lg:text-sm"> <img className="w-[20px] h-[20px]  object-contain mr-[10px]" src={arrow} alt="arrow" /> Read More</h2>
            <Link className="block text-primary hover:underline text-base my-2 font-sora font-medium lg:text-sm" to ="/">Data Responsibility</Link>
            <Link className="block text-primary hover:underline text-base my-2 font-sora font-medium lg:text-sm" to ="/">Cookies</Link>
            <Link className="block text-primary hover:underline text-base my-2 font-sora font-medium lg:text-sm" to ="/">Privacy Policy</Link>
            <Link className="block text-primary hover:underline text-base my-2 font-sora font-medium lg:text-sm" to ="/">Availiability statement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
