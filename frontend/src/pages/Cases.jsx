import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Cases = () => {
  const [cases, setCases] = useState([]);
  const navigate = useNavigate();

  const fetchCases = (category) => {
    let url = "https://4658-165-225-230-205.ngrok-free.app/reports";
    fetch(url, {
      method: "GET",
      headers: new Headers({
        "ngrok-skip-browser-warning": "true",
      }),
    })
      .then((response) => response.json())
      .then((data) => setCases(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchCases();
  }, []);
  return (
    <div>
      <p className="text-gray-600 dark:text-white">
        Browse through the doctors specialist.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {cases.map((item, index) => (
            <div
              className="border border-blue-200 rounded-xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-blue-50" src={item.imgUrl} alt="" />
              <div className="p-4">
                <p className="text-gray-900 dark:text-white text-lg font-medium">
                  {item.name}
                </p>
                <div className="mt-2">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${
                          (item.donationAmount / item.donationMax) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p>0</p>
                  <p>{item.donationMax}</p>
                </div>
                <button
                  className="mt-2 bg-primary text-white w-full py-2 rounded-md text-base"
                  onClick={() => navigate("../donate/" + item.id)}
                >
                  Donate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;
