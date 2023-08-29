import { Link } from "react-router-dom";

export const NavBar = () => (
	<>	
		<Link to={"/explore"}>Explore</Link>
		<Link to={"/products"}>Product</Link>
		<Link to={"/mentors"}>Mentors</Link>
	</>
);
