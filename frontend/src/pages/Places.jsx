import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets"; // Import the assets

const Places = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [places, setPlaces] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const fetchPlaces = (category) => {
    let url = "";
    switch (category.toUpperCase()) {
      case "MALLS":
        url =
          "https://4658-165-225-230-205.ngrok-free.app/places?category=MALL";
        break;
      case "PARKS":
        url =
          "https://4658-165-225-230-205.ngrok-free.app/places?category=PARK";
        break;
      case "STORES":
        url =
          "https://4658-165-225-230-205.ngrok-free.app/places?category=STORE";
        break;
      case "CLINICS":
        url =
          "https://4658-165-225-230-205.ngrok-free.app/places?category=CLINIC";
        break;
      case "TRANSPORTATION":
        url =
          "https://4658-165-225-230-205.ngrok-free.app/places?category=TRANSPORTATION";
        break;
      case "RESTAURANTS":
        url =
          "https://4658-165-225-230-205.ngrok-free.app/places?category=RESTAURANT";
        break;
      default:
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
    if (speciality) {
      fetchPlaces(speciality);
    }
  }, [speciality]);

  const categoryImages = {
    RESTAURANTS: [
      assets.oner,
      assets.twor,
      assets.threer,
      assets.fourr,
      assets.fiverr,
    ],
    MALLS: [
      assets.sixep,
      assets.sevenp,
      assets.eightp,
      assets.ninep,
      assets.tenp,
    ],
    PARKS: [
      assets.sixep,
      assets.sevenp,
      assets.eightp,
      assets.ninep,
      assets.tenp,
    ],
    STORES: [
      assets.sixep,
      assets.sevenp,
      assets.eightp,
      assets.ninep,
      assets.tenp,
    ],
    CLINICS: [
      assets.sixep,
      assets.sevenp,
      assets.eightp,
      assets.ninep,
      assets.tenp,
    ],
    TRANSPORTATION: [
      assets.sixep,
      assets.sevenp,
      assets.eightp,
      assets.ninep,
      assets.tenp,
    ],
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
          <p
            onClick={() =>
              speciality === "Restaurants"
                ? navigate("/places")
                : navigate("/places/Restaurants")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Restaurants" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Restaurants
          </p>
          <p
            onClick={() =>
              speciality === "Clinics"
                ? navigate("/places")
                : navigate("/places/Clinics")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Clinics" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Clinics
          </p>
          <p
            onClick={() =>
              speciality === "Stores"
                ? navigate("/places")
                : navigate("/places/Stores")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Stores" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Stores
          </p>
          <p
            onClick={() =>
              speciality === "Parks"
                ? navigate("/places")
                : navigate("/places/Parks")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Parks" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Parks
          </p>
          <p
            onClick={() =>
              speciality === "Malls"
                ? navigate("/places")
                : navigate("/places/Malls")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Malls" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Malls
          </p>
          <p
            onClick={() =>
              speciality === "Transportation"
                ? navigate("/places")
                : navigate("/places/Transportation")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Transportation" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Transportation
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6">
          {places.length > 0 &&
            places.map((place, index) => (
              <div
                onClick={() => window.open(place.url, "_blank")}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                key={index}
              >
                <img
                  className="bg-blue-50 w-full h-48 object-cover"
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
