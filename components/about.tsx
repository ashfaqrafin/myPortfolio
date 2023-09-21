"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="text-justify shadow-md rounded-md">
        <p className="m-6">
          <span className="font-medium">
            Hello and welcome to my portfolio! I'm thrilled to have you here.I'm
            currently pursuing a Bachelor's degree in{" "}
            <span className="font-black capitalize">Computer Science </span>{" "}
            with a minor in{" "}
            <span className="font-black capitalize">economics </span> at{" "}
            <span className="font-black capitalize">BRAC University. </span>
            I'm a first-year freshman, passionate about exploring the exciting
            world of technology and economics. As an aspiring computer
            scientist, I have embarked on a journey to become a well-rounded
            professional. I'm actively engaged in learning{" "}
            <span className="font-black capitalize">
              full-stack development,{" "}
            </span>
            diving deep into the intricacies of{" "}
            <span className="font-black capitalize">machine learning, </span>
            and honing my problem-solving skills through{" "}
            <span className="font-black capitalize">
              competitive programming.{" "}
            </span>
            Additionally, I find immense satisfaction in contributing to{" "}
            <span className="font-black capitalize">open-source </span>
            projects, where I get to collaborate with like-minded individuals to
            create impactful solutions. Beyond my academic and technical
            pursuits, I have a keen interest in understanding the dynamics of
            the <span className="font-black capitalize">
              world economy,{" "}
            </span>{" "}
            <span className="font-black capitalize">geopolitics </span> and{" "}
            <span className="font-black capitalize">business. </span>Exploring
            the intersections between technology and these fields fascinates me,
            and I believe it offers unique opportunities for innovation and
            growth. This portfolio serves as a reflection of my academic
            journey, projects, and the various facets of my life as a student
            and a curious individual. I invite you to explore my work,
            achievements, and experiences, and I hope you find inspiration in my
            passion for learning and creating. Thank you for visiting, and I
            look forward to sharing my progress and future endeavors with you.
          </span>
        </p>
      </div>
    </motion.section>
  );
};

export default About;
