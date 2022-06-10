import Zoom from "react-reveal/Zoom";
import macclassic from "./Images/macclassic.png";
import coding from "./Images/coding-icon-16.jpg"




const Home = () => {
	return (
		<div class="homehero">
			
				<img src={coding} alt="Big Mac logo" class="logo"/>
				<h1 class="web">Web Development</h1>
				<button class="btn">Wikipedia</button>
			
		</div>
	);
};

export default Home;
