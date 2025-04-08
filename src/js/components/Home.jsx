import React from "react";
import { List } from "./list";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="mt-5 mb-3">My Work List</h1>
			<List/>
		</div>
	);
};

export default Home;