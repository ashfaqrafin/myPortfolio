import { TypeAnimation } from "react-type-animation";

const AnimatedText = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "learning Machine Learning",
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        "learning Fullstack",
        2000,
        "exploring Opensource",
        2000,
        "doing Competitive Programming",
        2000,
      ]}
      wrapper="span"
      speed={50}
      //   style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default AnimatedText;
