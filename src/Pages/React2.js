import Fade from "react-reveal/Fade";
const Contact = () => {
	return (
		<>
		
			<div class="reacthero">
				<Fade bottom>
				<h1>REACT</h1>
				</Fade>
				<Fade bottom>
				<a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank" rel="noreferrer">
					<button class="btn">From Wikipedia</button>
				</a>
				</Fade>
			</div>
			
			<div class="devinfo">
				<Fade bottom>
				<p>
					React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces
					based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
					<br />
					<br />
					React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like
					Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React
					applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.
				</p>
				</Fade>
			</div>
		</>
	);
};

export default Contact;
