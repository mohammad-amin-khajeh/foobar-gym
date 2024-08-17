import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { listContainerVariant, listItem } from "../utils/animation-utils";

type stat = {
  id: number;
  number: number;
  icon: any;
  title: string;
};
const stats: stat[] = [
  {
    id: 0,
    number: 31,
    icon: FaBriefcase,
    title: "دوره ها",
  },

  {
    id: 1,
    number: 168,
    icon: FaClock,
    title: "ساعت های کاری در هفته",
  },

  {
    id: 2,
    number: 26,
    icon: FaTrophy,
    title: "مقام های کشوری",
  },
  {
    id: 3,
    number: 839,
    icon: ImUsers,
    title: "شاگرد های راضی",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section>
      <div className="container mx-auto">
        <motion.div
          variants={listContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 xl:grid-cols-4 gap-10"
        >
          {stats.map((stat) => {
            return (
              <motion.div
                variants={listItem}
                key={stat.id}
                className="flex flex-col justify-center items-center"
              >
                <div className="rounded-full p-1 mx-auto border border-accent size-36 mb-6">
                  <div
                    ref={ref}
                    className="text-5xl font-oswald border-accent/30 border rounded-full size-full flex justify-center items-center"
                  >
                    {isInView && (
                      <CountUp start={0} end={stat.number} duration={4} />
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-center text-center mb-6">
                  <stat.icon className="text-2xl mb-2" />
                  <h2 className="h3">{stat.title}</h2>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;