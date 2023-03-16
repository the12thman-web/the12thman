import React from "react";
import moment from "moment";

const DateShow = () => {
  const latestTime = moment().format("LLL");
  // console.log('LT', latestTime);
  return <div>{latestTime}</div>;
};

export default DateShow;
