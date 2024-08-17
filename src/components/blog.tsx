import { Swiper, SwiperSlide } from "swiper/react";
import { blogData } from "../utils/blog-data";
import { Pagination } from "swiper/modules";
import "swiper/modules";
import "swiper/swiper-bundle.css";
import CustomButton from "./customButton";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation-utils";

const Blog = () => {
  return (
    <section className="mx-auto bg-primary-300 text-white py-24" id="blog">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true
, amount: 0.2 }}
          className="h2 text-center"
        >
          مقاله های اخیر
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true
, amount: 0.2 }}
        >
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
            pagination={{ clickable: true }}
            className="h-96 lg:h-[40vh] "
          >
            {blogData.map((blog, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img src={blog.img} alt={blog.title} className="mt-8 mb-2" />
                  <p className="text-sm">{blog.date}</p>
                  <h5 className="h5 max-w-80 text-center">{blog.title}</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <motion.span
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true
, amount: 0.2 }}
          className="flex justify-center"
        >
          <CustomButton text="مشاهده همه موارد" className="w-48 h-16 mt-8" />
        </motion.span>
      </div>
    </section>
  );
};

export default Blog;
