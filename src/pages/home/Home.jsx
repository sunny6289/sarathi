import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setIsLoggedIn } from "../../redux/slices/signin/authSlice";
import ImageSlider from "../../components/image slider/ImageSlider";
import CardContainer from "../../components/card components/card container/CardContainer";
import Button from "../../components/reusable/Button";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Fetch user data on component mount if available
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  // Check if user is logged in on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    dispatch(setIsLoggedIn(loggedIn));
  }, [dispatch]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-100">
      {!isLoggedIn && (
        <div
          className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(poverty.jpg)` }}
          data-aos="fade-in"
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold bg-black bg-opacity-50 p-4 rounded shadow-lg">
            No Poverty Initiative
          </h1>
        </div>
      )}

      <div className="w-full flex flex-col items-center justify-center gap-6">
        {isLoggedIn ? (
          <div className="flex-col w-full">
            <ImageSlider />
            <h1 className="text-center font-sans font-medium text-4xl m-6 italic select-none">
              Our Upcoming Events
            </h1>
            <CardContainer />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-6 mt-12">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800"
              data-aos="fade-up"
            >
              You are not logged in
            </h1>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-center text-gray-600"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Please login to view this page and participate in our initiative.
            </p>
            <Button
              content="Sign In"
              size="md"
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-lg transition-all duration-300"
              onClick={() => {
                navigate("/signin");
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
