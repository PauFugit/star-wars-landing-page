import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);


	return (
		<nav className="navbar navbar-expand-lg bg-dark opacity-80 pt-0 pb-0">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img className="logo" width="60px" src="https://img.icons8.com/color/344/star-wars.png" />
				</Link>


				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<ul className="navbar-nav position-absolute end-0 mx-3">
						<li className="nav-item">
							<Link className="nav-link text-white" to="/people">
								Characters
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/planets">
								Planets
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/vehicles">
								Vehicles
							</Link>
						</li>

					

					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle text-light"
							href="#"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<span>Favorites   </span>
							<i className="fa fa-star"></i>
						</a>
						<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown"
						>

							{
								!!store.favorite &&
								store.favorite.map((elem, index) => {
									return (
										<li key={index}>{elem.name}<i className="fas fa-trash-alt" onClick={() => { actions.deleteFavorite(elem.name) }}></i></li>
									)
								}
								)
							}
						</ul>
					</li>
					</ul>


				</div>
			</div>
		</nav>

	);
};

