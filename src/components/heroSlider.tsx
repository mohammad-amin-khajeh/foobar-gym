import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation-utils";
import CustomButton from "./customButton";

const HeroSlider = () => (
  <div className="flex md:py-36 py-[5vh] gap-10 flex-col items-center lg:max-w-[600px]">
    <motion.h1
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="h1 max-lg:text-center mb-2"
    >
      جایی که نتیجه <span className="text-accent">زحماتت</span> رو میبینی
    </motion.h1>
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
    >
      <CustomButton text="بزن بریم" className="font-bold text-2xl w-40 h-16" />
    </motion.div>
  </div>
);

export default HeroSlider;
