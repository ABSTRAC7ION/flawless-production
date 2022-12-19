import React from "react";
import "./semsem.scss";
import Footer from "../../../components/footer/footer";
import { motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
    top: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
  exit: {
    height: "100vh",
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

function Semsem() {
  const chars = {
    offscreen: {
      opacity: 0,
      y: -110,
    },
    inView: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: custom * 0.1,
        ease: "easeInOut",
      },
    }),
  };

  const enterBottom = {
    offscreen: {
      opacity: 0,
      y: 30,
    },
    inView: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: custom * 0.2,
        ease: "easeInOut",
      },
    }),
  };
  return (
    <motion.div className="Dolce semsem">
      <motion.div
        className="absolute z-50 w-full bg-orange-600 Dolce text-6xl text-white"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={blackBox}
      >
        <motion.svg className="absolute z-50 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-white"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect className="w-full h-full text-gray-600 fill-current" />
          </pattern>
          <text
            className="text-4xl font-bold"
            text-anchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            Flawless
          </text>
        </motion.svg>
      </motion.div>
      <div className="flex flex-col justify-center px-10 pt-60 text-left">
        <h1 className="text-9xl chars overflow-hidden">
          <motion.span
            variants={chars}
            custom={0}
            initial="offscreen"
            whileInView="inView"
            viewport={{ once: true }}
            className="char-1 inline-block relative"
          >
            s
          </motion.span>
          <motion.span
            variants={chars}
            custom={1}
            initial="offscreen"
            whileInView="inView"
            viewport={{ once: true }}
            className="char-1 inline-block relative"
          >
            e
          </motion.span>
          <motion.span
            variants={chars}
            custom={2}
            initial="offscreen"
            whileInView="inView"
            viewport={{ once: true }}
            className="char-1 inline-block relative"
          >
            m
          </motion.span>
          <motion.span
            variants={chars}
            custom={3}
            initial="offscreen"
            whileInView="inView"
            viewport={{ once: true }}
            className="char-1 inline-block relative"
          >
            s
          </motion.span>
          <motion.span
            variants={chars}
            custom={4}
            initial="offscreen"
            whileInView="inView"
            viewport={{ once: true }}
            className="char-1 inline-block relative"
          >
            e
          </motion.span>
          <motion.span
            variants={chars}
            custom={5}
            initial="offscreen"
            whileInView="inView"
            viewport={{ once: true }}
            className="char-1 inline-block relative"
          >
            m
          </motion.span>
        </h1>
        <motion.span
          variants={enterBottom}
          custom={1}
          initial="offscreen"
          whileInView="inView"
          viewport={{ once: true }}
          className="text-sm pt-2 text-slate-700"
        >
          A local Egyptian brand, specialized in customizing clothes in NUBIAN
          style.
        </motion.span>
        <motion.a
          variants={enterBottom}
          custom={2}
          initial="offscreen"
          whileInView="inView"
          viewport={{ once: true }}
          className="text-3xl pt-4"
          href="https://smsmnobie.company.site/"
        >
          <div className="flex flex-row gap-1 items-center">
            <span className="inline-block">smsmnobie.company.site</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-7 h-7 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </motion.a>
      </div>
      <div className="px-10">
        <img
          className="pt-6"
          src="https://i.imgur.com/2z8E9DW.jpg"
          alt="Semsem"
        />
        <div className="flex flex-col justify-center text-left pt-6">
          <motion.h1
            variants={enterBottom}
            custom={1}
            initial="offscreen"
            whileInView="inView"
            viewport={{ once: true }}
            className="text-5xl"
          >
            Modernizing heritage
          </motion.h1>
        </div>
        <hr className="border-black border-1 mt-6" />
        <div className="grid-info">
          <div className="grid-b">
            <motion.div
              variants={enterBottom}
              custom={1}
              initial="offscreen"
              whileInView="inView"
              viewport={{ once: true }}
              className="h-24 pb-4 flex flex-row pt-4 text-left justify-between"
            >
              <h1>year</h1> <h1>2022</h1>
            </motion.div>
            <hr className="border-black border-1" />
            <motion.div
              variants={enterBottom}
              custom={1}
              initial="offscreen"
              whileInView="inView"
              viewport={{ once: true }}
              className="h-24 pb-4 flex flex-row pt-4 text-left justify-between"
            >
              <h1>role</h1>{" "}
              <h1>brand identity / photography / Graphic Design</h1>
            </motion.div>
            <hr className="border-black border-1" />
            <motion.div
              variants={enterBottom}
              custom={1}
              initial="offscreen"
              whileInView="inView"
              viewport={{ once: true }}
              className="h-24 pb-4 flex flex-row pt-4 text-left justify-between"
            >
              <h1>ASK</h1>{" "}
              <h1 className="w-72">
                A Logo that captures the brand's identity of Egyptian nubian
                clothes
              </h1>
            </motion.div>
            <hr className="border-black border-1" />
            <motion.div
              variants={enterBottom}
              custom={1}
              initial="offscreen"
              whileInView="inView"
              viewport={{ once: true }}
              className="h-24 pb-4 flex flex-row pt-4 text-left justify-between"
            >
              <h1>solution</h1>{" "}
              <h1 className="w-72">
                {" "}
                incorperated the shape of the 3 pyramids in the "س" and made the
                last "م" in the shape of a pharaonic symbol{" "}
              </h1>
            </motion.div>
            <hr className="border-black border-1" />
            <motion.div
              variants={enterBottom}
              custom={2}
              initial="offscreen"
              whileInView="inView"
              viewport={{ once: true }}
              className="h-24 pb-4 pt-4 text-left"
            >
              <h1>
                a brand founded by Mina Samir, Mina reimagines moderen clothing
                in the style of traditional nubian wear. By creating clothing
                that focuses on culture we were able to combine our creative
                skills to create a strong brand identity that highlights
                traditional with a modern style.
              </h1>
            </motion.div>
          </div>
        </div>
        <div className="py-10">
          <img src="https://i.imgur.com/eKD4RgZ.jpg" alt="Semsem" />
          <img src="https://i.imgur.com/Y1qYe0d.jpg" alt="Semsem" />
          <img src="https://i.imgur.com/feibERU.jpg" alt="Semsem" />
        </div>
      </div>
      <div className="px-10">
        <hr className="border-black border-1 mt-6" />
        <motion.h1
          variants={enterBottom}
          custom={1}
          initial="offscreen"
          whileInView="inView"
          viewport={{ once: true }}
          className="text-5xl text-left"
        >
          Up next
        </motion.h1>
      </div>
      <Footer></Footer>
    </motion.div>
  );
}

export default Semsem;
