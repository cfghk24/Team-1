import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Places = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
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

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  useEffect(() => {
    if (speciality) {
      fetchPlaces(speciality);
    }
  }, [speciality]);

  return (
    <div>
      <p className="text-gray-600 dark:text-white">
        Browse through the doctors specialist.
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
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {places.length > 0
            ? places.map((place, index) => (
                <div
                  onClick={() => window.open(place.url, "_blank")}
                  className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                  key={index}
                >
                  <img
                    className="bg-blue-50"
                    src={place.imgUrl}
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
              ))
            : filterDoc.map((item, index) => (
                <div
                  onClick={() => navigate(`/appointment/${item._id}`)}
                  className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                  key={index}
                >
                  <img className="bg-blue-50" src={item.image} alt="" />
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-center text-green-500">
                      <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                      <p>Available</p>
                    </div>
                    <p className="text-gray-900 dark:text-white text-lg font-medium">
                      {item.name}
                    </p>
                    <p className="text-gray-600 dark:text-white text-sm">
                      {item.speciality}
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
