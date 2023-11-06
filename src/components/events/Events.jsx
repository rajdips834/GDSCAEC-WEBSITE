import UpcomingEvents from "./UpcomingEvents";
import PastEvents from "./PastEvents";
export default function Events() {
  const marqueeStyles = { height: "20vh" };
  return (
    <>
      <div className="flex justify-center align-middle flex-row p-[20rem]">
        <PastEvents />
        <h1 className="flex text-[10rem] justify-center align-middle">
          Events
        </h1>

        <UpcomingEvents />
      </div>
    </>
  );
}
