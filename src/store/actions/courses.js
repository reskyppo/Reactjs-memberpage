import {
  FETCH_COURSES,
  WATCH_COURSES,
  MESSAGE_COURSES,
  STATUS_COURSES,
} from "constans/types/courses";

export const statusCourses = (status) => ({
  type: STATUS_COURSES,
  payload: status,
});

export const fetchCourses = (fetch) => ({
  type: FETCH_COURSES,
  payload: fetch,
});

export const watchCourses = (courses) => ({
  type: WATCH_COURSES,
  payload: courses,
});

export const messageCourse = (message) => ({
  type: MESSAGE_COURSES,
  payload: message,
});
