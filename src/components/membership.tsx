import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation-utils";
import MembershipSlider from "./membershipSlider";

const Membership = () => (
  <motion.section
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true, amount: 0.3 }}
    className=" py-8 xl:py-0 lg:h-[95vh] bg-membership bg-cover bg-center relative before:size-full before:bg-black/50 before:absolute before:top-0"
    id="prices"
  >
    <div className="container mx-auto px-0 text-white h-full flex flex-col xl:pt-24 relative">
      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="h2 text-center mb-8"
      >
        عضویت
      </motion.h2>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
      >
        <MembershipSlider />
      </motion.div>
    </div>
  </motion.section>
);

export default Membership;
