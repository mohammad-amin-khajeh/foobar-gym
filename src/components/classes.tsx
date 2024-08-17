import { motion } from "framer-motion";
import { classes } from "../utils/classes-data";
import { fadeIn } from "../utils/animation-utils";
import CustomButton from "./customButton";

const Classes = () => (
  <section id="class">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {classes.map((theClass) => (
        <div className="relative" key={theClass.id}>
          <img
            // image and overlay effect in one go
            src={theClass.img}
            alt={theClass.name}
            className="brightness-[0.5] object-cover w-full h-[300px] lg:h-[485px]"
          />
          <div className="absolute max-w-sm flex flex-col justify-center items-center m-auto inset-0 text-center">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="h2 text-accent "
            >
              {theClass.name}
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="text-white mb-10"
            >
              {theClass.description}
            </motion.p>
            <motion.span
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
            >
              <CustomButton text="ادامه مطلب" className="w-32 p-5" />
            </motion.span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Classes;
