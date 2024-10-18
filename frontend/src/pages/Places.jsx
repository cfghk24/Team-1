import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets"; // Import the assets

const NavItem = ({ label, path, isActive }) => {
  const navigate = useNavigate();
  return (
    <p
      onClick={() => navigate(path)}
      className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
        isActive ? "bg-indigo-100 text-black" : ""
      }`}
    >
      {label}
    </p>
  );
};

const Places = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [places, setPlaces] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  //Future improvements: change the API URL to the const and run it locally, so you can test the app without the need of the ngrok server
  //Don't have time sorry:(
  const categoryUrls = {
    MALLS: "https://4658-165-225-230-205.ngrok-free.app/places?category=MALL",
    PARKS: "https://4658-165-225-230-205.ngrok-free.app/places?category=PARK",
    STORES: "https://4658-165-225-230-205.ngrok-free.app/places?category=STORE",
    CLINICS:
      "https://4658-165-225-230-205.ngrok-free.app/places?category=CLINIC",
    TRANSPORTATION:
      "https://4658-165-225-230-205.ngrok-free.app/places?category=TRANSPORTATION",
    RESTAURANTS:
      "https://4658-165-225-230-205.ngrok-free.app/places?category=RESTAURANT",
  };

  const fetchPlaces = (category) => {
    const url = categoryUrls[category.toUpperCase()];
    if (!url) {
      console.error("Unknown category:", category);
      return;
    }

    fetch(url, {
      method: "GET",
      headers: new Headers({
        "ngrok-skip-browser-warning": "true",
      }),
    })
      .then((response) => response.json())
      .then((data) => setPlaces(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    if (!speciality) {
      navigate("/places/Restaurants");
    } else {
      fetchPlaces(speciality);
    }
  }, [speciality, navigate]);

  const commonImages = [
    assets.sixep,
    assets.sevenp,
    assets.eightp,
    assets.ninep,
    assets.tenp,
  ];

  const categoryImages = {
    RESTAURANTS: [
      assets.oner,
      assets.twor,
      assets.threer,
      assets.fourr,
      assets.fiverr,
    ],
    MALLS: commonImages,
    PARKS: commonImages,
    STORES: commonImages,
    CLINICS: commonImages,
    TRANSPORTATION: commonImages,
  };

  return (
    <div>
      <p className="text-gray-600 dark:text-white">
        Browse through the pet-friendly amenities in your area.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary" : ""
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>
        <div
          className={`flex-col gap-4 text-sm text-gray-600 dark:text-white ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <NavItem
            label="Restaurants"
            path="/places/Restaurants"
            isActive={speciality === "Restaurants"}
          />
          <NavItem
            label="Clinics"
            path="/places/Clinics"
            isActive={speciality === "Clinics"}
          />
          <NavItem
            label="Stores"
            path="/places/Stores"
            isActive={speciality === "Stores"}
          />
          <NavItem
            label="Parks"
            path="/places/Parks"
            isActive={speciality === "Parks"}
          />
          <NavItem
            label="Malls"
            path="/places/Malls"
            isActive={speciality === "Malls"}
          />
          <NavItem
            label="Transportation"
            path="/places/Transportation"
            isActive={speciality === "Transportation"}
          />
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6">
          {places.length > 0 &&
            places.map((place, index) => (
              <div
                onClick={() => window.open(place.url, "_blank")}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                key={index}
              >
                <div className="w-full h-48 relative">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={
                      categoryImages[speciality.toUpperCase()]
                        ? categoryImages[speciality.toUpperCase()][
                            index %
                              categoryImages[speciality.toUpperCase()].length
                          ]
                        : assets.defaultImage // Fallback image if category is not found
                    }
                    alt={place.name}
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-900 dark:text-white text-lg font-medium">
                    {place.name}
                  </p>
                  <p className="text-gray-600 dark:text-white text-sm">
                    {place.description}
                  </p>
                  <p className="text-gray-600 dark:text-white text-sm">
                    Rating: {place.rating}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
