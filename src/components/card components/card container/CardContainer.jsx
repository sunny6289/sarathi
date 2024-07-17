import { TEMP_EVENTS } from "../../../rawData/tempEvents";
import Card from "../card/Card";


const CardContainer = () => {
    return (
        <div className="h-[45vh] w-[100%] bg-slate-100 flex justify-between">
            <div className="cards flex gap-6 p-6">
                {
                    TEMP_EVENTS.map((card)=> <Card key={card.id} card={card}/>)
                }
            </div>
            <div className="see-all-events bg-slate-200 p-4 flex justify-center items-center"><span className="rotate-90 font-sans font-semibold text-lg cursor-pointer">See All</span></div>
        </div>
    );
}

export default CardContainer;
