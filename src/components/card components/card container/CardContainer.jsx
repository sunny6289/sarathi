import { useNavigate } from "react-router-dom";
import { TEMP_EVENTS } from "../../../rawData/tempEvents";
import Button from "../../reusable/Button";
import Card from "../card/Card";
import { useEffect, useState } from "react";

const CardContainer = () => {
  const navigate = useNavigate();
  const [responsiveCount, setResponsiveCount] = useState(4);

  const handleResize = () => {
    const cardWidth = 240; // width of a single card
    const newCount = Math.floor(window.innerWidth / cardWidth);
    setResponsiveCount(newCount);
  };

  useEffect(() => {
    handleResize(); // Set initial count based on initial window size
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-slate-100 flex justify-between">
      <div className="cards flex gap-6 p-6 justify-around">
        {TEMP_EVENTS.slice(0, responsiveCount).map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <Button
        onClick={() => navigate("/allEvents")}
        variant={"gray"}
        size={"md"}
        content={"See All"}
      ></Button>
    </div>
  );
};

export default CardContainer;
