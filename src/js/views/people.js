import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

const People=() => {
  const { store, actions}= useContext(Context);
  /* const [ people, setPeople ] = useState("people");
  const getPeople = (url) => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setPeople(data);

      })
      .catch((error) => {
        console.log(error);
      });
  };
  const urlPeople="https://swapi.dev/api/people/"
  const testPeople =() => {
    console.log(people.results)
  }
  useEffect(() => {
    getPeople(urlPeople)

  }, []); */

  /* const [ planets, setPlanets ] = useState("planets"); */
  /* const getPlanets = (url) => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setPlanets(data);

      })
      .catch((error) => {
        console.log(error);
      });
  };
  const urlPlanets="https://swapi.dev/api/planets/"
  const testPlanets =() => {
    console.log(planets.results)
  }
  useEffect(() => {
    getPlanets(urlPlanets)

  }, []); */

  /* const [ vehicles, setVehicles ] = useState("vehicles"); */
  /* const getVehicles = (url) => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setVehicles(data);

      })
      .catch((error) => {
        console.log(error);
      });
  };
   const urlVehicles="https://swapi.dev/api/vehicles/"
    const testVehicles =() => {
    console.log(vehicles.results)
  }
  useEffect(() => {
    getVehicles(urlVehicles)

  }, []); */
  const testVehicles =() => {
    console.log(store.vehicles.results)
  }
  const testPlanets =() => {
    console.log(store.planets.results)
  }
  const testPeople =() => {
    console.log(store.people.results)
  }


  return (
    <>
    <button onClick={testPeople}>people</button>
    <button onClick={testPlanets}>planets</button>
    <button onClick={testVehicles}>vehicles</button>
      <div className="title text-danger">
        <h1>People</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div><br></br>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </>
  )
}
export default People;