import React, { useContext } from "react";

import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {

  const { store, actions } = useContext(Context);

  const testPeople = () => {
    console.log(store.people.results)
  }
  const testPlanets = () => {
    console.log(store.planets.results)
  }

  const testVehicles = () => {
    console.log(store.vehicles.results)
  }

  return (
    <>
      
      <div className="container-fluid text-light p-5">
        <div className="container-notJumbotron">
          <h1 className="display-4">Welcome to my Website</h1>
          <br></br>
          <p>Here is the Starwars Characters, Planets and Starships</p>
          <Link to="#" className="btn btn-info">May the force be with you</Link>
        </div>
      </div>

     
      <div className="row">
        <div className="col-4">
          <div className="card">
            <img className="card-img-top" src="..." alt="Characters" />

            <div className="card-body">

              <h4 className="card-title">Characters</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
              <Link to="/People" className="btn btn-primary m-4">Learn more!</Link>
              <button className="button" onClick={() => { actions.insertFavorite(elem.name) }}>
                <i class="fa-light fa-stars"></i>
                  </button>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <img className="card-img-top" src="..." alt="Planets" />

            <div className="card-body">

              <h4 className="card-title">Planets</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
                <Link to="/Planets" className="btn btn-primary m-4">Learn more!</Link>
                <button className="button" onClick={() => { actions.insertFavorite(elem.name) }}>
                <i class="fa-light fa-stars"></i>
                  </button>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <img className="card-img-top" src="..." alt="Vehicles" />

            <div className="card-body">

              <h4 className="card-title">Vehicles</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
                <Link to="/Vehicles" className="btn btn-primary m-4">Learn more!</Link>
                
                <button className="button" onClick={() => { actions.insertFavorite(elem.name) }}>
                <i class="fa-light fa-stars"></i>
                  </button>

            </div>
          </div>
        </div>


      </div>




    </>
  )

}


export default Home;