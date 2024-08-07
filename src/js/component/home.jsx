import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ color, setColor ] = useState("");

	return (
		<div>
				<div className="Bar"></div>
			<div className="text-center traffic-container bg-dark">
				<div onClick = {()=>{setColor("red")}} className={`red ${color=="red"&&"glow"}`}></div>
				<div onClick = {()=>{setColor("yellow")}} className={`yellow ${color=="yellow"&&"glow"}`}></div>
				<div onClick = {()=>{setColor("green")}} className={`green ${color=="green"&&"glow"}`}></div>
			</div>
		</div>
	);
};

export default Home;
