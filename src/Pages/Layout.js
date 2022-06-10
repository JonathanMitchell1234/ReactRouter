import { Outlet, Link } from "react-router-dom";
import "./Layout.css";


const Layout = () => {
	return (
		<>
			<nav class="navigation">
				<ul>
					<li>
						<Link to="/">HOME</Link>
					</li>
					<li>
						<Link to="/blogs">JAVASCRIPT</Link>
					</li>
					<li>
						<Link to="/contact">REACT</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
