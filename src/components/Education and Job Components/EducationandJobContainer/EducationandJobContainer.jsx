import { useState } from "react";
import Education from "../Education/Education";
import Jobs from "../Jobs/Jobs";

const EducationandJobContainer = () => {
    const [ eduTab, setEduTab ] = useState(true); // This value should be stored in the redux. So that we can change the content of list items as well as the CSS of the tabs. It is taken for testing purpose
    const [ jobTab, setJobTab ] = useState(false); // This value should be stored in the redux. So that we can change the content of list items as well as the CSS of the tabs. It is taken for testing purpose
    return (
        <div className="w-3/4  flex-col">
            <div className="selectTab bg-slate-200 rounded-tr-md rounded-tl-md max-h-14 flex text-white items-center divide-x divide-slate-200 cursor-pointer text-2xl ">
                <span onClick={()=>{
                    setEduTab(true);
                    if(jobTab) setJobTab(false);
                }} className={`educationTab  py-1 text-center w-[50%] ${eduTab ? `bg-blue-400 rounded-tr-lg rounded-tl-lg transition-all ease duration-300`: ``}`}>Education</span>
                <span onClick={()=>{
                    setJobTab(true);
                    if(eduTab) setEduTab(false);
                }} className={`jobTab  py-1 text-center w-[50%] ${jobTab ? `bg-blue-400 rounded-tr-lg rounded-tl-lg transition-all ease duration-300`: ``}`}>Jobs</span>
            </div>
            <div className="selectedContent rounded-br-md rounded-bl-md p-4 bg-blue-400 min-h-96">
                {
                    eduTab ? <Education/> : <Jobs/>
                }
            </div>
        </div>
    );
}

export default EducationandJobContainer;
