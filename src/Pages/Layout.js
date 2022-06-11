import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
	return (
		<>
			{/* <div class="nav"> */}
			
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
			{/* </div> */}
			<Outlet />
		</>
	);
};

export default Layout;
