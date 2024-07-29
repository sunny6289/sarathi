import { useNavigate } from "react-router-dom";
import { TEMP_EVENTS } from "../../../rawData/tempEvents";
import Button from "../../reusable/Button";
import Card from "../card/Card";

const CardContainer = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-slate-100 flex justify-between">
      <div className="cards flex gap-6 p-6 flex-wrap">
        {TEMP_EVENTS.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <Button onClick={()=> navigate('/allEvents')} variant={'gray'} size={'md'} content={'See All'}></Button>
    </div>
  )
}

export default CardContainer;
