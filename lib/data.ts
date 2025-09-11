import { Tailwind } from "@react-email/tailwind";
import React from "react";
import { SiTensorflow, SiNextdotjs } from "react-icons/si";
import { FaReact, FaUniversity } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import pendingImg from "@/public/pending.png";
import cpImg from "@/public/cp.jpeg";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Undergraduate Student",
    location: "Dhaka, Bangladesh",
    description:
      "I am currently pursuing my undergraduate degree major in Computer Science and minor in Economics at BRAC University.",
    icon: React.createElement(FaUniversity),
    date: "2023-present",
  },
  {
    title: "Aspiring ML Engineer",
    location: "Dhaka, Bangladesh",
    description:
      "I am learning machine learning and deep learning. I have completed Machine Learning Specialization course by Andrew Ng",
    icon: React.createElement(SiTensorflow),
    date: "2023-present",
  },
  {
    title: "Full-Stack Developer",
    location: "Dhaka, Bangladesh",
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(SiNextdotjs),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  // {
  //   title: "CorpComment",
  //   description:
  //     "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
  //   tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  //   imageUrl: corpcommentImg,
  // },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
  {
    title: "Pending",
    description: "working on my Projects",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: pendingImg,
  },
  {
    title: "CP",
    description: "working on my Projects",
    tags: ["??????"],
    imageUrl: cpImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Framer Motion",
  "Python",
  "TensorFlow",
  "C++",
  "Linux",
  "Bash",
] as const;

