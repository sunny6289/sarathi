import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setIsLoggedIn } from "../../redux/slices/signin/authSlice";
import ImageSlider from "../../components/image slider/ImageSlider";
import CardContainer from "../../components/card components/card container/CardContainer";
import Button from "../../components/reusable/Button";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import SignIn from "../signin/Signin"; // Make sure to import the SignIn component

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4 text-center">
          About No Poverty
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          No Poverty is dedicated to eradicating poverty by empowering
          individuals and communities through sustainable programs and
          initiatives. Our mission is to create a world where everyone has the
          opportunity to thrive, free from the constraints of poverty.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p className="text-lg text-gray-700 mb-4">
          We envision a world where poverty is a thing of the past, and every
          individual has access to the resources and opportunities they need to
          lead a dignified and prosperous life.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Goals</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>
            Provide education and skills training to underprivileged
            communities.
          </li>
          <li>Promote sustainable economic development and job creation.</li>
          <li>Ensure access to basic healthcare and nutrition.</li>
          <li>
            Advocate for policies that address the root causes of poverty.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
        <p className="text-lg text-gray-700 mb-4">
          Join us in our mission to eradicate poverty. Whether through
          volunteering, donating, or spreading awareness, every effort counts.
          Together, we can make a difference.
        </p>
      </div>
    </div>
  );
}

function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSignIn, setShowSignIn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    dispatch(setIsLoggedIn(loggedIn));
  }, [dispatch]);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-100 overflow-x-hidden">
      {!isLoggedIn && (
        <div
          className={`relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center ${
            showSignIn ? "opacity-50" : ""
          }`}
          style={{ backgroundImage: `url(poverty.jpg)` }}
          data-aos="fade-in"
        >
          {!showSignIn && !isLoggedIn &&(
            <>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold bg-black bg-opacity-50 p-4 rounded shadow-lg text-center">
                No Poverty Initiative
              </h1>
              <Button
                content="Sign In"
                size="md"
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-lg transition-all duration-300"
                onClick={handleSignInClick}
                data-aos="fade-up"
                data-aos-delay="200"
              />
            </>
          )}
        </div>
      )}

      {showSignIn && !isLoggedIn &&(
        <div
          className="absolute w-full h-screen flex items-center justify-center"
          style={{ top: 0, left: 0 }}
          data-aos="fade-in"
        >
          <SignIn />
        </div>
      )}

      {isLoggedIn && (
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <div className="flex-col w-full">
            <ImageSlider />
            <h1 className="text-center font-sans font-medium text-4xl m-6 italic select-none">
              Our Upcoming Events
            </h1>
            <CardContainer />
          </div>
        </div>
      )}

      {!isLoggedIn && (
        <>
          <div className="w-full flex flex-col items-center mt-12">
            <div className="flex flex-col lg:flex-row w-full">
              <div className="w-full lg:w-1/2 p-6" data-aos="fade-right">
                <img
                  src="garibs3.png"
                  alt="Image 1"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div
                className="w-full lg:w-1/2 p-6 flex items-center"
                data-aos="fade-left"
              >
                <p className="text-lg text-gray-700">
                  Our mission is to eradicate poverty through various
                  initiatives that empower individuals and communities. We
                  believe in a world where everyone has the opportunity to
                  thrive.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full mt-12">
              <div
                className="w-full lg:w-1/2 p-6 flex items-center order-2 lg:order-1"
                data-aos="fade-right"
              >
                <p className="text-lg text-gray-700">
                  We focus on providing education and skills training, promoting
                  sustainable economic development, and ensuring access to basic
                  healthcare and nutrition.
                </p>
              </div>
              <div
                className="w-full lg:w-1/2 p-6 order-1 lg:order-2"
                data-aos="fade-left"
              >
                <img
                  src="/garibs1.png"
                  alt="Image 2"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full mt-12">
              <div className="w-full lg:w-1/2 p-6" data-aos="fade-right">
                <img
                  src="garibs2.png"
                  alt="Image 3"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div
                className="w-full lg:w-1/2 p-6 flex items-center"
                data-aos="fade-left"
              >
                <p className="text-lg text-gray-700">
                  Join us in our mission. Whether through volunteering,
                  donating, or spreading awareness, every effort counts.
                  Together, we can make a difference.
                </p>
              </div>
            </div>
          </div>
          <About />
        </>
      )}
    </div>
  );
}

export default Home;
