import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/people.css";
import imgpeople from "../../img/imgpeople.jpg";

const People = () => {
  const { store, actions } = useContext(Context);
  const testPeople = () => {
    console.log(store.favorite);
  };

  return (
    <>
      <div className="text-center text-white" id="titlepeople">
        Characters
      </div>

      {!!store.people &&
        store.people.results.map((elem, index) => {
          return (
            <div className="row justify-content-center">
              <img
                className="card-img-top"
                src={imgpeople}
                id="imgpeople"
                alt="imgpeople"
              />
              <div className="col-4">
                <div className="card" key={index} id="cardcharacters">
                  <div className="card-body">
                    <p className="card-text">
                      <li>Name: {elem.name}</li>
                      <li>Birth year:{elem.birth_year}</li>
                      <li>Height: {elem.height}</li>
                      <li>Mass: {elem.mass}</li>
                      <li>Hair color: {elem.hair_color}</li>
                      <li>Eye color: {elem.eye_color}</li>
                      <li>Skin color: {elem.skin_color}</li>
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
                </div>
                <br></br>
              </div>
            </div>
          );
        })}
      <div className="button">
        <Link to="/" className="btn btn-dark">
          Go Home
        </Link>
      </div>
    </>
  );
};
export default People;
