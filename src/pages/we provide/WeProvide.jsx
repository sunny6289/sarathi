import { useNavigate } from 'react-router-dom';
import { FaAnglesLeft, FaFilter, FaSort, FaChevronDown } from 'react-icons/fa6';
import EducationandJobContainer from "../../components/Education and Job Components/EducationandJobContainer/EducationandJobContainer";
import './WeProvide.css';
import { useState } from 'react';

const WeProvide = () => {
    const navigate = useNavigate();
    const [filterContent, setFilterContent] = useState(false);
    return (
        <div className="h-min-screen w-[100%] bg-white flex-col ">
            <div className="backBtnAndFilterContainer min-h-8 px-20 py-8 flex items-center justify-between">
                <div className="backBtnAndFilter flex gap-28">
                    <span onClick={() => navigate(-1)} className="back px-5 py-1 bg-slate-400 rounded-lg cursor-pointer flex items-center justify-center gap-1"><FaAnglesLeft className='text-2xl font-bold' /><span className='text-lg font-semibold'>back</span></span>
                    <span onClick={()=>setFilterContent(!filterContent)} className="filter px-5 py-2 bg-slate-200 rounded-lg cursor-default flex justify-center items-center gap-1"><span className='text-lg font-semibold'>Filter</span><FaFilter/></span>
                </div>
                {
                    filterContent ? (
                        <div className="filterContent w-[70%] flex items-center justify-around">
                        <span className="filter px-5 py-2 bg-slate-200 rounded-lg cursor-default flex justify-center items-center gap-1"><span className='text-lg font-semibold'>Job Type</span><FaChevronDown/></span>
                        <span className="filter px-5 py-2 bg-slate-200 rounded-lg cursor-default flex justify-center items-center gap-1"><span className='text-lg font-semibold'>Domain</span><FaChevronDown/></span>
                            <span className="filter px-5 py-2 bg-slate-200 rounded-lg cursor-default flex justify-center items-center gap-1"><span className='text-lg font-semibold'>Sort</span><FaSort/></span>
                        </div>
                    ) : ""
                }
               
            </div>
            <div className="eduAndjobContainer flex justify-center items-center">
                <EducationandJobContainer/>
            </div>
        </div>
    );
}

export default WeProvide;
