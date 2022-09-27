import React, { useState } from "react";
import Mini from "./bootcard";

const Forecast = ({ data }) => {
  if (data == null) return;
  console.log(data);

  return (
    <div>
      <label className="title">Daily</label>
      <div className="Minicontainer">
        {data.list.splice(0, 7).map((item, i) => {
          item = { idx: i, ...item };
          return <Mini data={item} />;
        })}
        ;
      </div>
    </div>
  );
};

export default Forecast;
