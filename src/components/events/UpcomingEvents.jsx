import Marquee from "../marqueeCards/Marquee";
import Card from "../card/Card";

export default function UpcomingEvents() {
  return (
    <div>
      Upcoming
      <Marquee direction="down" gradientHeight="1000">
        <Card className="m-" name="Rajdip"></Card>
      </Marquee>
    </div>
  );
}
