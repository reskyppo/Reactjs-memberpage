import {
  FETCH_COURSES,
  WATCH_COURSES,
  MESSAGE_COURSES,
  STATUS_COURSES,
} from "constans/types/courses";

const initialState = {
  data: {},
  total: 0,
  status: "idle",
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STATUS_COURSES:
      return {
        ...state,
        status: action.payload,
      };

    case FETCH_COURSES:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}
