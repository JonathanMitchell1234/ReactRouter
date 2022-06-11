import "animate.css/animate.min.css";
import macclassic from "./Images/macclassic.png";
import coding from "./Images/code-icon-png-0.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import React from "react";
import Web from "./webdev";


const Home = () => {
	return (
		<>
			<div class="homehero">
				<h1>
					<span>Web Development</span>
				</h1>
				<a href="https://en.wikipedia.org/wiki/Web_development" target="_blank" rel="noreferrer">
					<button class="btn">From Wikipedia</button>
				</a>
			</div>
			<div class="devinfo">
				<p>
					Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network)
					Web development can range from developing a simple single static page of plain text to complex web applications, electronic
					businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include
					Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network
					security configuration, and e-commerce development.
					<br />
					<br />
					Among Web professionals, "Web development" usually refers to the main non-design aspects of building Web sites: writing markup and
					coding. Web development may use content management systems (CMS) to make content changes easier and available with basic technical
					skills. For larger organizations and businesses, Web development teams can consist of hundreds of people (Web developers) and
					follow standard methods like Agile methodologies while developing Web sites. Smaller organizations may only require a single
					permanent or contracting developer, or secondary assignment to related job positions such as a graphic designer or information
					systems technician. Web development may be a collaborative effort between departments rather than the domain of a designated
					department. There are three kinds of Web developer specialization: front-end developer, back-end developer, and full-stack
					developer. Front-end developers are responsible for behavior and visuals that run in the user browser, while back-end developers
					deal with the servers. Since the commercialization of the Web with Tim Berners-Lee developing the World Wide Web at CERN, the
					industry has boomed and has become one of the most used technologies ever.
				</p>
			</div>
		</>
	);
	
};




export default Home;
