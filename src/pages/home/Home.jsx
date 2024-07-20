import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setIsLoggedIn } from "../../redux/slices/signin/authSlice";
import ImageSlider from "../../components/image slider/ImageSlider";
import CardContainer from "../../components/card components/card container/CardContainer";
import Button from "../../components/reusable/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Fetch user data on component mount if available
  useEffect(() => {
    dispatch(getUser());
  }, []);
  // Check if user is logged in on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    dispatch(setIsLoggedIn(loggedIn));
  }, [dispatch]);

  return (
    <div className="min-h-screen w-[100%] place-content-center">
      {isLoggedIn ? (
        <div className="flex-col ">
          <ImageSlider />
          <h1 className="text-center font-sans font-medium text-4xl m-6 italic select-none">
            Our Upcoming Events
          </h1>
          <CardContainer />
          {/* <Button content={"Synnu"} variant="green" size="md" className={""} props /> */}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-3xl font-bold">
            You are not logged in
          </h1>
          <p className="">Please login to view this page</p>
          <Button
            content="Sign In"
            size="md"
            onClick={() => {
              navigate("/signin");
            }}
          />
          {/* <Slider /> */}
        </div>
      )}
    </div>
  );
}

export default Home;
