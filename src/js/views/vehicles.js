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
  }


  return (
    <>
      <div className="container-fluid text-light p-5">
        <div className="container-notJumbotron" id="jumbotronV">
          <h1 className="display-4">Vehicles</h1>
          <br></br>

        </div>
      </div>

      {
        !!store.vehicles && store.vehicles.results.map((elem, indexVehicles) => {

          return (
            <div className="row justify-content-center" key={indexVehicles}>
              <div className="col-4">
                <div className="card" id="cardvehicles">

                  <div className="card-body">
                    <p className="card-text">
                      <li>Name: {elem.name}</li>
                      <li>Model:{elem.model}</li>
                      <li>Length: {elem.length}</li>
                      <li>Manufacturer: {elem.manufacturer}</li>
                      <li>Cost in credits: {elem.cost_in_credits}</li>
                      <li>Vehicle Class: {elem.vehicle_class}</li>
                      <button
                        className="button ms-5"
                        onClick={() => {
                          actions.insertFavorite(elem.name);
                        }}
                      >
                        <i className="fa fa-star"></i>
                      </button>

                    </p>
                  </div>
                  <br></br>
                </div>
              </div>

            </div>
          );
        })}
      <div className="button">
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


