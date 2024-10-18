import React from "react";
import { assets } from "../assets/assets";

const Report = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 dark:text-white">
        <p>
          REPORT A{" "}
          <span className="text-gray-700 dark:text-white font-medium">
            CASE
          </span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.case_report}
          alt=""
        />
        <form class="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 dark:text-white">
          <label for="place">Place</label>
          <input type="text" id="place" class="border-b-3" />

          <label for="name">Name</label>
          <input type="text" id="name" class="border-b-3" />

          <label for="phone">Phone Number</label>
          <input type="text" id="phone" class="border-b-3" />

          <label for="email">Email</label>
          <input type="email" id="email" class="border-b-3" />

          <label for="picture">Upload Picture</label>
          <input type="file" id="picture" />

          <button className="bg-primary text-white w-full py-2 rounded-md text-base">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Report;
