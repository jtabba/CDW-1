import { Link } from "react-router-dom";
import { AuthButtons } from "../authentication/SignInOrOut";

export const NavBar = () => (
	<>
		<AuthButtons />
		<Link to={"/explore"}>Explore</Link>
		<Link to={"/products"}>Product</Link>
		<Link to={"/mentors"}>Mentors</Link>
	</>
);
