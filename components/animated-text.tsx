import { TypeAnimation } from "react-type-animation";

const AnimatedText = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        `learning Machine Learning`,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        `learning Fullstack`,
        1000,
        `exploring Opensource`,
        1000,
        "doing Competitive Programming",
        1000,
      ]}
      wrapper="span"
      speed={5}
      //   style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default AnimatedText;
