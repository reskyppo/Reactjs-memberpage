import React from "react";

import { ReactComponent as DefaultUser } from "assets/images/default.svg";

import { Link, withRouter } from "react-router-dom";

import { useSelector } from "react-redux";

const Sidebar = ({ match, history }) => {
  const getNavLinkClass = (path) => {
    return match.path === path
      ? "active text-white bg-indigo-900"
      : "text-indigo-500";
  };

  const logout = () => {
    history.push("/login");
    localStorage.removeItem("BWAMICRO:token");
  };

  const users = useSelector((state) => state.users);

  return (
    <aside
      className="bg-indigo-1000 max-h-screen h-screen overflow-y-auto"
      style={{ width: 280 }}
    >
      <div
        className="max-h-screen h-screen fixed bg-indigo-1000 flex flex-col content-between"
        style={{ width: 280 }}
      >
        <div className="flex flex-col text-center mt-8">
          <div className="border border-indigo-500 mx-auto p-2 inline-flex rounded-full overflow-hidden mb-3">
            {users?.avatar ? (
              <img src={users?.avatar} alt={users?.name} />
            ) : (
              <DefaultUser
                className="fill-indigo-500 "
                style={{ width: 90, height: 90 }}
              />
            )}
          </div>

          <h6 className="text-white text-xl">{users?.name ?? "username"}</h6>

          <span className="text-indigo-500 text-sm">
            {users?.profession ?? "profession"}
          </span>
        </div>

        <ul className="main-menu mt-12">
          <li>
            <Link
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left",
                getNavLinkClass("/"),
              ].join(" ")}
              to="/"
            >
              My Class
            </Link>
          </li>
          <li>
            <a
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left",
                getNavLinkClass("/library"),
              ].join(" ")}
              href={`${process.env.REACT_APP_FRONTPAGE_URL}/library`}
              target="_blank"
              rel="noopener norefrerrer"
            >
              Library
            </a>
          </li>
          <li>
            <Link
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left text-indigo-500",
              ].join(" ")}
              to="/transactions"
            >
              Transactions
            </Link>
          </li>
          <li>
            <Link
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left",
                getNavLinkClass("/settings"),
              ].join(" ")}
              to="/settings"
            >
              Setting
            </Link>
          </li>
        </ul>

        <div className="my-auto">
          <ul className="main-menu mt-12">
            <li>
              <button
                className={[
                  "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left",
                ].join(" ")}
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default withRouter(Sidebar);
