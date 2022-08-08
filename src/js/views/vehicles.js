import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';
import { useContext } from 'react';
import imgvehicles from '../../img/imgvehicles.jpg'
import "../../styles/vehicles.css"

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const testVehicles = () => {
    console.log(store.favorite)
  };


  return (
    <>

      <div className="container-fluid text-light p-5">
        <div className="container-notJumbotron" id="jumbotronV">
          <h1 className="display-4">Vehicles</h1>
          <br />
        </div>
      </div>
      <div  id="overflowid3">
        <div className="row row-cols-4 scrolling-wrapper row flex-row flex-nowrap" style={{width:"100%"}}>
      
      {!!store.vehicles && store.vehicles.results.map((elem, indexVehicles) => {

          return (
            <div className="" key={indexVehicles}>
              <div className="col-4">
                <div className="card" id="cardvehicles">

                  <div className="card-body">
                    <div className="card-text">
                      <ul>
                      <li>Name: {elem.name}</li>
                      <li>Model:{elem.model}</li>
                      <li>Length: {elem.length}</li>
                      <li>Manufacturer: {elem.manufacturer}</li>
                      <li>Cost in credits: {elem.cost_in_credits}</li>
                      <li>Vehicle Class: {elem.vehicle_class}</li>
                      </ul>
                      <button
                        className="button float-end" 
                        id="buttonfinal"
                        onClick={() => {
                          actions.insertFavorite(elem.name);
                        }}
                      >
                        <i className="fa fa-star"></i>
                      </button>

                    </div>
                  </div>
                  </div>
                  <br></br>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      <div className="button pt-5">
        <Link to="/" className="btn btn-dark pb-6" id="buttonHome">
          Go Home
        </Link>

      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Vehicles;


