import Marquee from "react-fast-marquee";
const MarqueeCards = ({
  children,
  direction,
  gradientWidth,
  containerStyle,
}) => {
  return (
    <Marquee
      style={{ containerStyle }}
      direction={direction}
      gradient={true}
      gradientWidth={gradientWidth}
      speed={100}
      pauseOnHover={true}
      autoFill={true}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;
