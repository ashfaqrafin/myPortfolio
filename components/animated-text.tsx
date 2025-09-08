import { TypeAnimation } from "react-type-animation";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

const AnimatedText = () => {
  return (
    <div className="flex items-center justify-center">
      <TextRevealCard
        className="text-white text-2xl font-semibold bg-gray-50  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
        text="You know the business"
        revealText="I know the chemistry"
      />
    </div>
     // <TypeAnimation
     //   sequence={[
     //     // Same substring at the start will only be typed out once, initially
     //     "learning Machine-Learning",
     //     2000, // wait 1s before replacing "Mice" with "Hamsters"
     //     "learning Fullstack",
     //     2000,
     //     "exploring Opensource",
     //     2000,
     //     "doing Competitive Programming",
     //     2000,
     //   ]}
     //   wrapper="span"
     //   speed={50}
     //   style={{ fontSize: "1em", display: "inline-block", fontWeight: "bold" }}
     //   repeat={Infinity}
     // />
  );
};

export default AnimatedText;
