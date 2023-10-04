import React, { useEffect } from "react";
import "../App.css";
export default function Calander() {
    const days = ["Sat","Sun","Mon","Tue","Wed","Thu","Fri"]
    const months = {
      Jan: 31,
      Feb: 29,
      Mar: 31,
      Apr: 30,
      May: 31,
      June: 30,
      July: 31,
      Aug: 31,
      Sep: 30,
      Oct: 31,
      Nov: 30,
      Dec: 31,
    };
   const current = {
    day:30,
    month:"Sep",
  }
  return (
    <div>
      <div className="grid h-[100vh] place-content-center">
        {months.filter((month)=>{console.log(month);})}

        <h1 className="text-white">hi</h1>
      </div>
    </div>
  );
}
