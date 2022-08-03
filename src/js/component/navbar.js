import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg bg-dark opacity-75 pt-0 pb-0">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="logo" width="60px" src="https://img.icons8.com/color/344/star-wars.png" />
        </Link>

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
										<li key={index}>{elem.name}<i className="fas fa-trash-alt" onClick={() =>{actions.deleteFavorite(elem.name)}}></i></li>
									)
								}
								)
							}
						</ul>
					</li>

        {/* <div className="btn-group">
          <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </button>
          <ul className="dropdown-menu">
            
          </ul>


        </div> */}
        </div>

    </nav>
  );
};



/* export const Navbar = () => {
	return (
			<Navbar className="justify-content-between p-0">
				<Navbar.Brand>
					<Link to="/">
						<img src="https://img.icons8.com/color/344/star-wars.png" width="100" height="100" className="d-inline-block align-top" />
					</Link>
				</Navbar.Brand>
				<Favorites />
			</Navbar>
	);
};
 */