import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';
import { useContext } from 'react';
import imgplanets from '../../img/imgplanets.jpg'
import "../../styles/planets.css";

const Planets = () => {
  const { store, actions } = useContext(Context);
  const testPlanets = () => {
    console.log(store.favorite)
  }


  return (

    <>
      <div className="text-center text-white" id="titleplanets">Planets</div>
      {
        !!store.planets && store.planets.results.map((elem, index) => {

          return (
            <div className="row justify-content-center">
              <img className="card-img-top" src={imgplanets} alt="imgplanets" id="imgplanets" />

              <div className="col-4">
                <div className="card" key={index} id="cardplanets">

                  <div className="card-body">
                    <p className="card-text">
                      <li>Name: {elem.name}</li>
                      <li>Population: {elem.population}</li>
                      <li>Rotation period: {elem.rotation_period}</li>
                      <li>Orbital period: {elem.orbital_period}</li>
                      <li>Diameter: {elem.diameter}</li>
                      <li>Climate: {elem.climate}</li>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          );
        })
      }
      <div className="button">
        <Link to="/" class="btn btn-dark">Go Home</Link>
      </div>

    </>
  )
}
export default Planets;