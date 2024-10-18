import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Donate = () => {
  const { caseId } = useParams();
  // const { doctors, currencySymbol } = useContext(AppContext);
  const [cases, setCases] = useState([]);

  // const fetchCases = (id) => {
  //   let url = "https://4658-165-225-230-205.ngrok-free.app/cases";
  //   fetch(url, {
  //     method: "GET",
  //     headers: new Headers({
  //       "ngrok-skip-browser-warning": "true",
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setCases(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // };

  // useEffect(() => {
  //   fetchCases(caseId);
  // }, []);

  useEffect(() => {
    fetchDocInfo(caseId);
  }, [])

  // fetchDocInfo(caseId);

  const [docInfo, setDocInfo] = useState(null);
  const fetchDocInfo = (id) => {
    let url = "https://4658-165-225-230-205.ngrok-free.app/reports/" + id;
    fetch(url, {
      method: "GET",
      headers: new Headers({
        "ngrok-skip-browser-warning": "true",
      }),
    })
      .then((response) => response.json())
      .then((data) => setDocInfo(data))
      .catch((error) => console.error("Error fetching data:", error));
  };
  return (
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.location}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
          </div>
        </div>
        <form class="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 dark:text-white">

          <label for="name">Name</label>
          <input type="text" id="name" class="border-b-3" />

          <label for="phone">Phone Number</label>
          <input type="text" id="phone" class="border-b-3" />

          <label for="email">Email</label>
          <input type="email" id="email" class="border-b-3" />

          <label for="amount">Amount</label>
          <input type="text" id="amount" />

          <button className="bg-primary text-white w-full py-2 rounded-md text-base">
            Submit
          </button>
        </form>
      </div>
    )
  );
};

export default Donate;
