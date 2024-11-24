"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { services } from "./servicesContants";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 mt-8 group">
                <div className="w-full flex justify-between items-center ">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <BsArrowDownRight/>
                </div>
                {/*heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration:500">{service.title}</h2>
                {/*description */}
                <p className="text-white/60">{service.description}</p>
                {/*border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
