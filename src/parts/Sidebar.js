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
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
