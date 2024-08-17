import { motion } from "framer-motion";
import trainers from "../utils/trainers-data";
import CustomButton from "./customButton";
import { fadeIn } from "../utils/animation-utils";
import { IconContext } from "react-icons";

const Team = () => {
  return (
    <section className="py-20" id="team">
      <div className="container flex flex-col items-center">
        <motion.h2
          variants={fadeIn("up", 0.3)}
          whileInView={"show"}
          initial="hidden"
          viewport={{ once: true
, amount: 0.8 }}
          className="h2 text-center "
        >
          مربی های ما
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-4 ">
          {trainers.map((trainer) => (
            <motion.div
              variants={fadeIn("up", 0.6)}
              whileInView={"show"}
              initial="hidden"
              viewport={{ once: true, amount: 0.8 }}
              key={trainer.id}
              className="flex flex-col items-center gap-1 text-center mt-20"
            >
              <img
                src={trainer.image}
                className="rounded-lg"
                alt={trainer.name}
              />
              <h3 className="h3">{trainer.name}</h3>
              <h4 className="h4">{trainer.role}</h4>
              <p className="max-w-80">{trainer.description}</p>
              <div className="flex gap-4 my-5">
                {trainer.social.map((socialMedia, index) => {
                  return (
                    <IconContext.Provider
                      value={{
                        size: "50",
                        className: `
${index === 0 && "bg-fuchsia-600 hover:text-fuchsia-600"}
${index === 1 && "bg-blue-500 hover:text-blue-500"}
${index === 2 && "bg-accent hover:text-accent"}
rounded-full p-2 mx-auto text-white transition-all ease-out duration-500 delay-0 hover:bg-white `,
                      }}
                      key={index}
                    >
                      <a
                        className=""
                        href={socialMedia.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <socialMedia.icon />
                      </a>
                    </IconContext.Provider>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          whileInView={"show"}
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <CustomButton text="بقیه مربی ها" className="w-32 mt-10 h-16" />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
