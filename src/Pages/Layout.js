import { Outlet, Link, NavLink } from "react-router-dom";
import "./Layout.css"


const Layout = () => {
	return (
		<>
			{/* <div class="nav"> */}

			<nav class="navigation">
				<ul>
					<li>
						<NavLink to="/" activeClassName="active">
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink to="/blogs" activeClassName="active">
							JAVASCRIPT
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact" activeClassName="active">
							REACT
						</NavLink>
					</li>
				</ul>
			</nav>
			{/* </div> */}
			<Outlet />
		</>
	);
};

export default Layout;
