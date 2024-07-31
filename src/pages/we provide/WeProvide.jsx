import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import EducationandJobContainer from "../../components/Education and Job Components/EducationandJobContainer/EducationandJobContainer";
import "./WeProvide.css";
import Button from "../../components/reusable/Button";

const WeProvide = () => {
  const navigate = useNavigate();
  return (
    <div className="h-min-screen w-[100%] bg-white flex-col ">
      <div className="backBtnAndFilterContainer min-h-8 px-20 py-8 flex items-center justify-between">
        <div className="backBtnAndFilter flex gap-28">
          <Button
            content={
              <>
                <FaAngleLeft className="text-2xl font-bold" />
                <span className="text-lg font-semibold">back</span>
              </>
            }
            variant={'gray'}
            size={'md'}
            onClick={() => navigate(-1)}
          />
        </div>
      </div>
      <div className="eduAndjobContainer flex justify-center items-center">
        <EducationandJobContainer />
      </div>
    </div>
  );
};

export default WeProvide;
