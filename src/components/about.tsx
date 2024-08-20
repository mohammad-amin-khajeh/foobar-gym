import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation-utils";
import Achievements from "./achievements";
import { features } from "../utils/about-data";

const About = () => {
  return (
    <section className="p-10" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8 ">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="h2"
          >
            درباره ما
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center text-lg"
          >
            باشگاه ما توی ۵ سالی که از تاسیسش میگذره تونسته بیشترین مقام های
            کشوری رو بیاره و به پرافتخار ترین مجموعه ورزشی کل کشور تبدیل بشه. با
            ما پتانسیل درونی خودت رو کشف کن و به بهترین نسخه ی خودت تبدیل شو!
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:col-span-3 gap-4 mb-16"
        >
          {features.map((feature) => (
            <div key={feature.id} className="border-2 p-10">
              <div className="flex text-4xl bg-primary-300 text-white rounded-full size-16 lg:size-20 justify-center items-center mx-auto mb-4">
                <feature.icon />
              </div>
              <div className="flex max-md:text-center flex-col items-center">
                <h4 className="h4 text-accent">{feature.title}</h4>
                <p className="text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
