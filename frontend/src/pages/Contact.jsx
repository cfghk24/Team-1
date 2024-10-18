import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 dark:text-white">
        <p>
          VOLUNTEER WITH {" "}
          <span className="text-gray-700 dark:text-white font-semibold">
            SPCA
          </span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6 text-gray-500 dark:text-white">
          <p className="font-semibold text-lg">Becoming One of Us</p>
          <p>
            Together we protect animal <br />
            health and welfare.
          </p>
          <p>
            Tel: (+852) 2802 0501<br />
            HotLine: (+852) 2711 1000
          </p>
          <p className="font-semibold text-lg">Learn more about SPCA membership</p>
          <a href="https://www.spca.org.hk/get-involved/become-a-member/"><button className="border border-black dark:border-white px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Register with us
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
