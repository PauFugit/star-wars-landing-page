import React, {Component} from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center sticky-bottom bg-dark text-light opacity-80 pt-0 pb-0">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by Deb & Pauline  - {" "}
			<Link to="http://www.4geeksacademy.com">4Geeks Academy</Link>
		</p>
	</footer>
);