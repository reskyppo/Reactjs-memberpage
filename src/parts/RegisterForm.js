/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";

import users from "constans/api/users";

import { withRouter } from "react-router-dom";

import { useDispatch } from "react-redux";

import useForm from "helpers/hooks/useForm";
import fieldErrors from "helpers/fieldErrors";

import Select from "components/Form/Select";

import Images from "../assets/images/image-register.jpg";

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();
  const [
    { name, email, password, profession, otherProfession },
    setState,
  ] = useForm({
    name: "",
    email: "",
    password: "",
    profession: "",
    otherProfession: "",
  });

  console.log(name, email, password, profession, otherProfession);
  const [errors, setErrors] = useState(null);

  const submit = (e) => {
    e.preventDefault();

    users
      .register({
        name,
        email,
        password,
        profession: profession === "others" ? otherProfession : profession,
      })
      .then((res) => {
        history.push("/login");
      })

      .catch((err) => {
        setErrors(err?.response?.data?.message);
      });
  };

  const ERRORS = fieldErrors(errors);

  console.log(profession);

  return (
    <div className="flex justify-center items-center pb-24">
      <div className="w-3/12">
        <h1 className="text-4xl text-gray-900 mb-6">
          <span className="font-bold">Grow Skills</span> From, <br />
          Anywhere
        </h1>
        <form onSubmit={submit}>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="name"
              className={[
                "text-lg mb-2",
                ERRORS?.name?.message ? "text-red-500" : "text-gray-900",
              ].join(" ")}
            >
              Full Name
            </label>
            <input
              name="name"
              type="text"
              onChange={setState}
              className={[
                "bg-white focus:outline-none border px-6 py-3 w-full border-gray-600  rounded-md",
                ERRORS?.name?.message
                  ? " border-red-500 text-red-500"
                  : "text-gray-600 focus:border-teal-500 border-gray-600",
              ].join(" ")}
              value={name}
              placeholder="Your name"
            />
            <span className="text-red-500 pt-2">
              {ERRORS?.name?.message}
            </span>
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="email"
              className={[
                "text-lg mb-2",
                ERRORS?.email?.message ? "text-red-500" : "text-gray-900",
              ].join(" ")}
            >
              Email Address
            </label>
            <input
              name="email"
              type="email"
              onChange={setState}
              className={[
                "bg-white focus:outline-none border px-6 py-3 w-full border-gray-600  rounded-md",
                ERRORS?.email?.message
                  ? " border-red-500 text-red-500"
                  : "text-gray-600 focus:border-teal-500 border-gray-600",
              ].join(" ")}
              value={email}
              placeholder="Your email address"
            />
            <span className="text-red-500 pt-2">
              {ERRORS?.email?.message}
            </span>
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="password"
              className={[
                "text-lg mb-2",
                ERRORS?.password?.message
                  ? "text-red-500"
                  : "text-gray-900",
              ].join(" ")}
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              onChange={setState}
              className={[
                "bg-white focus:outline-none border px-6 py-3 w-full border-gray-600  rounded-md",
                ERRORS?.password?.message
                  ? " border-red-500 text-red-500"
                  : "text-gray-600 focus:border-teal-500 border-gray-600",
              ].join(" ")}
              value={password}
              placeholder="Input your password"
            />
            <span className="text-red-500 pt-2">
              {ERRORS?.password?.message}
            </span>
          </div>

          <Select
            labelName="Occupation"
            name="profession"
            value={profession}
            fallbackText="Select your focus"
            onClick={setState}
          >
            <option value="Web Designer">Web Designer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="others">others</option>
          </Select>

          {profession === "others" && (
            <div className="flex flex-col mb-4">
              <label
                htmlFor="otherProfession"
                className={[
                  "text-lg mb-2",
                  ERRORS?.otherProfession?.message
                    ? "text-red-500"
                    : "text-gray-900",
                ].join(" ")}
              >
                Other's Occupation
              </label>
              <input
                name="otherProfession"
                type="text"
                onChange={setState}
                className={[
                  "bg-white focus:outline-none border px-6 py-3 w-full border-gray-600  rounded-md",
                  ERRORS?.otherProfession?.message
                    ? " border-red-500 text-red-500"
                    : "text-gray-600 focus:border-teal-500 border-gray-600",
                ].join(" ")}
                value={otherProfession}
                placeholder="Your profession"
              />
              <span className="text-red-500 pt-2">
                {ERRORS?.otherProfession?.message}
              </span>
            </div>
          )}

          <button
            type="submit"
            className="mt-4 w-full bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3"
          >
            Daftar
          </button>
        </form>
      </div>

      <div className="w-1/2 flex justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 369, height: 440 }}>
          <div
            className="absolute border-indigo-700 border-2 -mt-8 -ml-16 left-0"
            style={{ width: 324, height: 374 }}
          ></div>
          <div className="absolute w-full h-full -mb-8 -ml-8">
            <img src={Images} alt="Image Register" />
          </div>
          <div
            className="absolute z-10 bg-white bottom-0 right-0 py-3 px-4 -mr-12"
            style={{ width: 290 }}
          >
            <p className="text-gray-900 mb-2">
              Semua materi terstruktur baik dan mentor yang sangat lihai
            </p>
            <span className="text-gray-600">James, Apps Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginForm);
