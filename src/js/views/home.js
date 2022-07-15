import "../../styles/home.css";
import React from "react";
/* import People from "./views/people";
import Planets from "./views/planets";
import Starships from "./views/starships"; */

export default function Home() {
  return (
    <>
      <h2 className="p-3 text-light text-center display-4">people</h2>
      <div className="container-fluid scrolling-wrapper">
        <div className="row d-flex flex-nowrap mb-1">
          <People />
        </div>
      </div>
      <h2 className="p-3 text-light text-center display-4">Planets</h2>
      <div className="container-fluid scrolling-wrapper">
        <div className="row d-flex flex-nowrap mb-1">
          <Planets />
        </div>
      </div>
      <h2 className="p-3 text-light text-center display-4">starships</h2>
      <div className="container-fluid scrolling-wrapper">
        <div className="row d-flex flex-nowrap mb-1">
          <Starships />
        </div>
      </div>
    </>
  );
}
