import React from "react";
import moment from "moment";

const DateShow = () => {
  const latestTime = moment().format("dddd, MMMM D, YYYY");
  return <div>{latestTime}</div>;
};

export default DateShow;
