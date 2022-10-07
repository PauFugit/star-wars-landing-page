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

      <div id="carouselExampleControls" className="carousel slide pt-0" data-bs-ride="carousel">
        <div className="carousel-inner" id="carrousel">
          <div className="carousel-item active">
            <img id="img1" src="https://cdn.shopify.com/s/files/1/1057/4964/t/24/assets/star-wars-banner.jpeg?v=80624120874934922901628787750" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img id="img2" src="https://www.ibikes.cl/wp-content/uploads/2019/03/1-star_wars_twitter_banner_by_kingkittymf-d97g7bt.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img id="img3" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dcbrky3-d4685ae4-a280-40ab-a56f-8c93c5eea8d9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGNicmt5My1kNDY4NWFlNC1hMjgwLTQwYWItYTU2Zi04YzkzYzVlZWE4ZDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5A7ZNgOZNnctFrT9QNhuYLnqAv93XJ5Q2Uxp0Jz55C4" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <br></br>
      <br></br>
      

      <div className="row g-0 d-flex justify-content-center border-top opacity-75" id="card1">
        <div className="card border-0">
          <div className="row g-0 d-flex justify-content-center ">
            <div className="col-md-3">
              <img
                src="https://m.media-amazon.com/images/I/81O6Ccwe2nL._AC_SX466_.jpg"
                className="img-fluid rounded-circle"
                alt="hands typing on a keyboard"
                id="imgHomePeople"
              />
            </div>
            <div className="col-md-7">
              <div className="card-body p-0">
                <h1 className="card-title text-muted pt-4">
                  Characters{" "}
                  
                </h1>
                <p className="card-text pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                  eaque. Perspiciatis, consequatur beatae. Doloremque eius explicabo
                  numquam fugiat perspiciatis rerum minima consectetur? Doloribus
                  temporibus iure nostrum facilis non provident ratione.
                </p>
              </div>
            <div className="container-fluid pt-5 pb-4">
              <Link to="/People" className="btn btn-secondary" id="buttonPeople">Learn more!</Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      <br></br>
      <br></br>

      

      <div className="row g-0 d-flex justify-content-center border-top opacity-75 text-dark" id="card2">
        <div className="card border-0">
          <div className="row g-0 d-flex justify-content-center ">
            
            <div className="col-md-7">
              <div className="card-body">
                <h1 className="card-title text-muted pt-4">
                  Planets{" "}
                  
                </h1>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                  eaque. Perspiciatis, consequatur beatae. Doloremque eius explicabo
                  numquam fugiat perspiciatis rerum minima consectetur? Doloribus
                  temporibus iure nostrum facilis non provident ratione.
                </p>
              </div>
            <div className="container-fluid pt-5 pb-4">
              <Link to="/Planets" className="btn btn-secondary" id="buttonPeople">Learn more!</Link>
            </div>

            </div>
            <div className="col-md-3">
              <img
                src="https://i.pinimg.com/736x/b9/32/fb/b932fb0baf74fa57c94d21ef1d127d07--star-wall-death-star.jpg"
                className="img-fluid rounded-circle"
                alt="hands typing on a keyboard"
                id="imgHomePlanets"
              />
            </div>
          </div>
          
        </div>
      </div>

      <br></br>
      <br></br>

      <div className="row g-0 d-flex justify-content-center border-top bg-body text-dark opacity-75" id="card3">
        <div className="card border-0">
          <div className="row g-0 d-flex justify-content-center ">
            <div className="col-md-3">
              <img
                src="https://www.venta.com.mx/sh-img/halcon-milenario-star-wars-172-super-oferta-50-12-cuotas-D_NQ_NP_942116-MLA31590470051_072019-F_halcon%2Bmilenario%2Bstar%2Bwars.jpg"
                className="img-fluid rounded-circle"
                alt="hands typing on a keyboard"
                id="imgHomePeople"
              />
            </div>
            <div className="col-md-7">
              <div className="card-body p-0">
                <h1 className="card-title text-muted pt-4">
                  Vehicles{" "}
                  
                </h1>
                <p className="card-text pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                  eaque. Perspiciatis, consequatur beatae. Doloremque eius explicabo
                  numquam fugiat perspiciatis rerum minima consectetur? Doloribus
                  temporibus iure nostrum facilis non provident ratione.
                </p>
              </div>
            <div className="container-fluid pt-5 pb-4">
              <Link to="/People" className="btn btn-secondary " id="buttonPeople">Learn more!</Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </>
  )

}


export default Home;