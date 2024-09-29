import React from "react";

const AboutUsPage = () => {
  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-10">
      <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
      <p className="text-lg text-white leading-8">
        Welcome to <span className="font-bold">WeatherTapp!</span> We are focused on providing accurate and up-to-date weather information. Our mission is to make it easier for you to plan your day, no matter where you are. With detailed forecasts, weather alerts, and a user-friendly interface, we aim to be your go-to source for reliable weather updates.
      </p>

      <p className="text-lg text-white leading-8 mt-4">
        At WeatherTapp, we understand how critical weather conditions can be for your daily routines and travel plans. That’s why we strive to offer not just data, but insights that help you stay prepared. Our app provides real-time weather updates, visual forecasts, and essential alerts to ensure you never get caught off guard by unexpected weather changes.
      </p>

      <p className="text-lg text-white leading-8 mt-4">
        We at WeatherTapp are passionate about making weather tracking intuitive and accessible. We blend technology, design and meteorological data to create a seamless experience, whether you're at home, on the go, or planning your next adventure. With WeatherTapp, weather information is more than just a forecast—it’s a tool that empowers you to take charge of your day.
      </p>
    </div>
  );
};

export default AboutUsPage;
