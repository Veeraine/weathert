import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./Services/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import the new "About Us" and "Fun Facts" pages
import AboutUsPage from "./components/AboutUsPage";
import FunFactsPage from "./components/FunFactsPage";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
  const [query, setQuery] = useState({ q: "Blantyre" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched weather data for ${data.name}`);
      setWeather(data);
    });
  };

  const formatBackground = () => {
    if (!weather) return "from-cyan-400 to-blue-800";
    const threshold = units === "metric" ? 20 : 68;
    if (weather.temp <= threshold) return "from-blue-400 to-gray-900";
    return "from-yellow-500 to-orange-800";
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  return (
    <Router>
      <div
        className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}
      >
        {/* Header Section */}
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold text-white">WeatherTapp</h1>
          <div className="flex flex-row items-center space-x-6">
            {/* Links to the About Us, Fun Facts, and Home pages */}
            <Link
              to="/"
              className="text-lg font-semibold text-white hover:text-gray-300 transition ease-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-semibold text-white hover:text-gray-300 transition ease-out"
            >
              About Us
            </Link>
            <Link
              to="/funfacts"
              className="text-lg font-semibold text-white hover:text-gray-300 transition ease-out"
            >
              Fun Facts
            </Link>
          </div>
        </header>

        {/* Main Content with Routing */}
        <Routes>
          {/* Home page route */}
          <Route
            path="/"
            element={
              <>
                <TopButtons setQuery={setQuery} />
                <Inputs setQuery={setQuery} setUnits={setUnits} />

                {weather && (
                  <>
                    <TimeAndLocation weather={weather} />
                    <TempAndDetails weather={weather} units={units} />
                    <Forecast title="3 hour step forecast" data={weather.hourly} />
                    <Forecast title="daily forecast" data={weather.daily} />
                  </>
                )}

                <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
              </>
            }
          />

          {/* About Us page route */}
          <Route path="/about" element={<AboutUsPage />} />

          {/* Fun Facts page route */}
          <Route path="/funfacts" element={<FunFactsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
