import React from "react";

import { Link } from "react-router-dom";

export default function Footer() {
  function submit() {}
  return (
    <footer className="container mx-auto">
      <div className="flex justify-between">
        <div className="w-1/6">
          <h6 className="text-white">Company</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link
                className="text-indigo-500 hover:text-teal-500 hover:underline"
                to="#"
              >
                API Developer
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="text-indigo-500 hover:text-teal-500 hover:underline"
                to="#"
              >
                Career
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="text-indigo-500 hover:text-teal-500 hover:underline"
                to="#"
              >
                Our Story
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="text-indigo-500 hover:text-teal-500 hover:underline"
                to="#"
              >
                New Soon
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/6">
          <h6 className="text-white">Student</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link
                className="text-indigo-500 hover:text-teal-500 hover:underline"
                to="#"
              >
                Get Scholarship
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="text-indigo-500 hover:text-teal-500 hover:underline"
                to="#"
              >
                Our Pathskills
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="text-indigo-500 hover:text-teal-500 hover:underline"
                to="#"
              >
                All Features
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="text-indigo-500 hover:text-teal-500 hover:underline"
                to="#"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/6">
          <h6 className="text-white">Touch Us</h6>
          <p className="mt-4 text-indigo-500 leading-loose">
            iMicro Centre <br /> Allesy Block X no 12 <br /> Jakarta, Indonesia{" "}
            <br /> +21 2020 198198
          </p>
        </div>
        <div className="w-2/6">
          <h6 className="text-white">Promotions</h6>
          <p className="mt-4 text-indigo-500">
            Submit Your email for new updates
          </p>
          <form onSubmit={submit}>
            <input
              type="text"
              className="bg-white focus:outline-none border-0 px-6 py-3 w-1/2 mt-6"
              placeholder="Your email addres"
            />
            <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">
              Daftar Now
            </button>
          </form>
        </div>
      </div>
      <div className="border-t pt-8 mt-8 border-gray-800 text-center">
        <p className="text-indigo-500">
          2020 Copyright BulidWith Angga. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
