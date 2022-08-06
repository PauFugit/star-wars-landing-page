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
      <div className="container-fluid text-light p-5">
        <div className="container-notJumbotron" id="jumbotronPlanets">
          <h1 className="display-4">Planets</h1>
          <br></br>
                   
        </div>
      </div>
      {
        !!store.planets && store.planets.results.map((elem, indexPlanets) => {

          return (
            <div className="row justify-content-center" key={indexPlanets}>

              <div className="col-4">
                <div className="card" id="cardplanets">

                  <div className="card-body">
                    <div className="card-text">
                      <li>Name: {elem.name}</li>
                      <li>Population: {elem.population}</li>
                      <li>Rotation period: {elem.rotation_period}</li>
                      <li>Orbital period: {elem.orbital_period}</li>
                      <li>Diameter: {elem.diameter}</li>
                      <li>Climate: {elem.climate}</li>
                      <button
                        className="button float-end"
                        onClick={() => {
                          actions.insertFavorite(elem.name);
                        }}
                      >
                        <i className="fa fa-star"></i>
                      </button>

                    </div>
                  </div>
                  <br></br>
                </div>
              </div>

            </div>
          );
        })
      }
      <div className="button">
        <Link to="/" className="btn btn-dark pb-6" id="buttonHome">
          Go Home
        </Link>
        
      </div>
      <br/>
      <br/>
    </>
  )
}
export default Planets;