import React, { useContext, useEffect, useState,  } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Rating from '@mui/material/Rating';

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
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
              speciality === "Restarurants"
                ? navigate("/doctors")
                : navigate("/doctors/Restarurants")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Restarurants"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Restarurants
          </p>
          <p
            onClick={() =>
              speciality === "Clinics"
                ? navigate("/doctors")
                : navigate("/doctors/Clinics")
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
                ? navigate("/doctors")
                : navigate("/doctors/Stores")
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
                ? navigate("/doctors")
                : navigate("/doctors/Parks")
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
                ? navigate("/doctors")
                : navigate("/doctors/Malls")
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
                ? navigate("/doctors")
                : navigate("/doctors/Transportation")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Transportation"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Transportation
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
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
                  <Rating name="read-only" value={value} readOnly />
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

export default Doctors;
