/*
                              ****** IMPORTANT ******
  > THIS FILE NEEDS DO BE DELETED, BECAUSE IT IS NOT PART OF ANY OF THE ROUTES AFTER SIGN IN
  > WE CAN SHOW IT AT THE TIME OF SIGNING IT FOR THE FIRST TIME WITH SOME ANIMATION
  > PLEASE DELETE IT AFTER CHANGING THE ROUTES
*/
import React from 'react'


function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="max-w-4xl w-full bg-neutral-100 shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4 text-center">About No Poverty</h1>
        <p className="text-lg text-gray-700 mb-4">
          No Poverty is dedicated to eradicating poverty by empowering individuals and communities through sustainable programs and initiatives. Our mission is to create a world where everyone has the opportunity to thrive, free from the constraints of poverty.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p className="text-lg text-gray-700 mb-4">
          We envision a world where poverty is a thing of the past, and every individual has access to the resources and opportunities they need to lead a dignified and prosperous life.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Goals</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>Provide education and skills training to underprivileged communities.</li>
          <li>Promote sustainable economic development and job creation.</li>
          <li>Ensure access to basic healthcare and nutrition.</li>
          <li>Advocate for policies that address the root causes of poverty.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
        <p className="text-lg text-gray-700 mb-4">
          Join us in our mission to eradicate poverty. Whether through volunteering, donating, or spreading awareness, every effort counts. Together, we can make a difference.
        </p>
      </div>
    </div>
  );
}

export default About