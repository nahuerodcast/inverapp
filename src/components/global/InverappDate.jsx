import React from "react";

export const InverappDate = () => {
  let n = new Date();
  let y = n.getFullYear();
  let m = n.getMonth() + 1;
  let d = n.getDate();
  let da = n.getHours();
  let dan = n.getMinutes();
  let inverappDate = `${d}/${m}/${y} - ${da}:${dan}hs`;
  return <>{inverappDate}</>;
};
