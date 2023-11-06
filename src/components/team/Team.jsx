import * as data from "../../data/data2023.json";
import Marquee from "../marqueeCards/Marquee";
import Card from "../card/Card";
import ourTeam from "../../assets/ourTeam.png";
export default function Team() {
  const colourChoices = ["#EA4335", "#34A853", "#4285F4", "#FBBC05"];
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <img src={ourTeam} alt="Our Team" />
      <Marquee direction="left" gradientWidth={500}>
        {data.teamMembers.map((members, index) => (
          <Card
            name={members.name}
            role={members.role}
            linkedin={members.linkedinUrl}
            github={members.githubUrl}
            twitter={members.twitterUrl}
            image={members.image}
            key={index}
            height={"24.5rem"}
            width={"18.875rem"}
          />
        ))}
      </Marquee>
    </div>
  );
}
