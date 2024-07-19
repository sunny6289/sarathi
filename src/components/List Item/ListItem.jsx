import Button from "../reusable/Button";

const ListItem = ({ item }) =>
    (item.id.slice(0, 3) === "edu") ?
        (< div className="item bg-white rounded-md p-2 flex justify-between items-center " id={item.id} >
            <div className="primary text-slate-600 text-lg font-semibold flex-1">{item.subject}</div>
            <div className="secondary text-slate-400 text-base flex-1 text-center">{item.typeOfBook}</div>
            <div className="btnContainer flex flex-col gap-1 flex-1 items-end">
                <Button content={"Downlaod"} variant={"green"} size={"sm"} className={'pl-[25px] pr-[25px]'} />
                <Button content={"Preview"} variant={"blue"} size={"sm"} className={'pl-[30px] pr-[30px]'} />
            </div>
        </div >) :
        (< div className="item bg-white rounded-md p-2 flex justify-between items-center min-h-20" id={item.id} >
            <div className="primary text-slate-600 text-lg font-semibold flex-1">{item.jobRole}</div>
            <div className="secondary text-slate-400 text-base flex-1 text-center">{item.company}</div>
            <div className="btnContainer flex flex-col gap-1 flex-1 items-end">
                <Button content={"Save"} variant={"green"} size={"sm"} className={'pl-[25px] pr-[25px] text-lg'} />
            </div>
        </div >)



export default ListItem;
