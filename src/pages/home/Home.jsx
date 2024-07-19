import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setIsLoggedIn } from "../../redux/slices/signin/authSlice";
import ImageSlider from "../../components/image slider/ImageSlider";
import CardContainer from "../../components/card components/card container/CardContainer";
import Button from "../../components/reusable/Button";

function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  // Fetch user data on component mount if available
  useEffect(() => {
    dispatch(getUser());
  }, []);
  // Check if user is logged in on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    dispatch(setIsLoggedIn(loggedIn));
  }, [dispatch]);
  const handleClick = () => {
    console.log("Hello");
  };
  return (
    <div className="min-h-screen w-[100%] ">
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
        <>
          <h1 className="text-3xl font-bold text-center">
            You are not logged in
          </h1>
          <p className="text-center">Please login to view this page</p>
          {/* <Slider /> */}
        </>
      )}
    </div>
  );
}

export default Home;
