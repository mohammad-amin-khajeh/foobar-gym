import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

import { motion } from "framer-motion";
import CustomButton from "./customButton";
import { listContainerVariant, listItem } from "../utils/animation-utils";

const Footer = () => (
  <footer className="bg-primary-300 border-t-accent border py-24" id="contact">
    <div className="container mb-24 mx-auto">
      <motion.div
        variants={listContainerVariant}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
      >
        <motion.div variants={listItem} className="flex flex-col gap-4">
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a href="">
            <h2 className="h2 text-white text-left font-oswald">
              <span className="text-accent">foobar</span> gym
            </h2>
          </a>
          <p className="max-w-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-x-2">
              <FaMapMarkerAlt className="text-xl text-accent" />
              <span>ناکجا آباد، فرعی سه غربی</span>
            </li>
            <li className="flex items-center gap-x-2">
              <FaPhoneAlt className="text-xl text-accent" />
              <span>۴۵۶۷ ۱۲۳ ۹۱۶ ۹۸+</span>
            </li>
            <li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a href="" className="flex items-center gap-x-2">
                <FaEnvelope className="text-xl text-accent" />
                <span>foobargym@hotmail.com</span>
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={listItem}>
          <div className="max-md:flex max-md:flex-col max-md:items-center">
            <h4 className="h4 text-accent mb-4">مقاله های جدید</h4>
            <div className="divide-y max-w-max divide-gray-700 flex flex-col">
              {[1, 2, 3].map((_) => {
                return (
                  // biome-ignore lint/a11y/useValidAnchor: <explanation>
                  <a href="" key={_} className="group">
                    <h5 className="h5 group-hover:text-accent transition-colors leading-snug">
                      ویتامین ای چه نقشی توی تمرین داره و چطوری میتونم بدون قرص
                      ویتامین سطح ویتامین بدنم رو بالا ببرم؟
                    </h5>
                    <p className="text-gray-400 tracking-widest mr-4 text-sm">
                      ۱۶ شهریور ۱۴۰۳
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div variants={listItem}>
          <div>
            <h4 className="h4 mb-4 text-center text-accent">گالری</h4>
            <div className="gap-2 grid grid-cols-4">
              <img src="assets/img/trainers/david.jpg" alt="" />
              <img src="assets/img/trainers/sofia.jpg" alt="" />
              <img src="assets/img/trainers/matt.jpg" alt="" />
              <img src="assets/img/trainers/rosy.jpg" alt="" />
              <img src="assets/img/trainers/rosy.jpg" alt="" />
              <img src="assets/img/trainers/matt.jpg" alt="" />
              <img src="assets/img/trainers/david.jpg" alt="" />
              <img src="assets/img/trainers/sofia.jpg" alt="" />
            </div>
          </div>
        </motion.div>

        <motion.div variants={listItem}>
          <h4 className="h4 mb-4 text-center text-accent">خبرنامه</h4>
          <div className="flex flex-col items-center gap-4 text-center">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <form className="flex items-center">
              <CustomButton text="ارسال" className="px-7 py-3" />
              <input
                type="text"
                placeholder="ایمیلتون رو وارد کنید"
                className="px-7 py-3 outline-none text-primary-300"
              />
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* copyright stuff */}
    <div className="text-white border-t border-white/20 py-12">
      <div className="container h-full mx-auto">
        <div className="flex items-center justify-between">
          <span>&copy; کپی رایت ۱۴۰۳ فوبار جیم</span>
          <ul className="flex text-3xl gap-x-4">
            <li>
              <a href="/">
                <FaYoutube className="hover:text-accent hover:scale-125 transition-all duration-300" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram className="hover:text-accent transition-all hover:scale-125 duration-300" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTelegram className="hover:text-accent transition-all hover:scale-125 duration-300" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
