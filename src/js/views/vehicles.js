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
      <div className="text-center text-white" id="titlevehicles">Vehicles</div>

      {
        !!store.vehicles && store.vehicles.results.map((elem, index) => {

          return (
            <div className="row justify-content-center">
              <img className="card-img-top" src={imgvehicles} id="imgvehicles" alt="imgvehicles" />
              <div className="col-4">
                <div className="card" key={index} id="cardvehicles">

                <div className="card-body">
                  <p className="card-text">
                    <li>Name: {elem.name}</li>
                    <li>Model:{elem.model}</li>
                    <li>Length: {elem.length}</li>
                    <li>Manufacturer: {elem.manufacturer}</li>
                    <li>Cost in credits: {elem.cost_in_credits}</li>
                    <li>Vehicle Class: {elem.vehicle_class}</li>

                  </p>
                </div>
                <br></br>
                </div>
              </div>
      
              </div>
      );
      })
      }
       <div className="button">
        <Link to="/" className="btn btn-dark">Go Home</Link>
      </div>

              
            </>
          )
        }

export default Vehicles;


