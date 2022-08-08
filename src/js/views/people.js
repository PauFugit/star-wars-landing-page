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
      <div className="container-fluid text-light p-5">
        <div className="container-notJumbotron" id="jumbotronP">
          <h1 className="display-4">Characters</h1>
          <br />
        </div>
      </div>
      <div id="overflowid">
            <div className="row row-cols-4 scrolling-wrapper row flex-row flex-nowrap" style={{width:"100%"}}>
          {!!store.people &&
            store.people.results.map((elem, indexPeople) => {
              return (
                <div className="" key={indexPeople}>
                  <div className="col-4">
                    <div className="card" id="cardpeople">
                      <div className="card-body">
                        <div className="card-text">
                          <ul>
                            <li>Name: {elem.name}</li>
                            <li>Birth year:{elem.birth_year}</li>
                            <li>Height: {elem.height}</li>
                            <li>Mass: {elem.mass}</li>
                            <li>Hair color: {elem.hair_color}</li>
                            <li>Eye color: {elem.eye_color}</li>
                            <li>Skin color: {elem.skin_color}</li>
                          </ul>
                          <button
                            className="button float-end"
                            id="buttonFav"
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

      <div className="button pt-5" >
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
export default People;
