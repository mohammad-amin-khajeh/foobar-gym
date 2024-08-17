import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation-utils";

import { FaQuoteLeft } from "react-icons/fa";
import { testimonialData } from "../utils/testimonial-data";

const Testimonial = () => (
  <motion.section
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true
, amount: 0.2 }}
    className="my-12 lg:my-24"
    id="testimonial"
  >
    <div className="container mx-auto">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true
, amount: 0.2 }}
        className="h2 text-center mb-8"
      >
        رضایت شاگرد های ما
      </motion.h2>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true
, amount: 0.2 }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="h-96"
        >
          {testimonialData.map((person, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="flex flex-col gap-6 items-center justify-center">
                <img
                  src={person.img}
                  width={"120"}
                  alt={person.name}
                  className="rounded-full border-2 p-0.5 border-accent"
                />
                <FaQuoteLeft className="text-gray-300 text-2xl" />
                <p className=" max-w-96 md:max-w-80 text-lg text-center lg:max-w-96">
                  {person.message}
                </p>
                <span className="text-accent text-2xl">{person.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  </motion.section>
);

export default Testimonial;
