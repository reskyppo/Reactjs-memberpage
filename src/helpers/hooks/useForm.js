const { useState } = require("react");

export default (initialValues) => {
  const [state, setstate] = useState(initialValues);

  return [
    state,
    (e) => {
      setstate({ ...state, [e.target.name]: e.target.value });
    },

    (newState) => {
      setstate({ ...state, ...newState });
    },
  ];
};
