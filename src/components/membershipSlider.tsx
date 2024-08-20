import CustomButton from "./customButton";

import { plans } from "../utils/plans-data";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const MembershipSlider = () => (
  <Swiper
    slidesPerView={1}
    modules={[Pagination]}
    pagination={{ clickable: true }}
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
    className="min-h-[680px]"
  >
    {plans.map((plan) => (
      <SwiperSlide key={plan.title} className="max-md:container">
        <div className=" border border-accent hover:bg-primary-300/80 mt-10 bg-primary-300/40 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
          <div className="border-b py-5 px-16 border-accent">
            <h2 className="h2 text-center">{plan.title}</h2>
          </div>

          <div>
            <ul>
              {plan.benefits.map((benefit, index) => (
                <li key={index} className="flex m-6 items-center gap-2">
                  <benefit.icon className="text-accent text-lg" />
                  {benefit.text}
                </li>
              ))}
            </ul>
          </div>

          <div className=" flex flex-col gap-4 items-center py-5 text-accent">
            <h4 className="h4 text-center">
              {" "}
              <span>ماه/</span>
              <span className="text-5xl">{plan.price}</span> <sub>تومان</sub>
            </h4>
            <CustomButton text="خرید عضویت" className="w-32 p-5" />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default MembershipSlider;
