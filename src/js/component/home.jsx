import React, {useState} from "react";


//create your first component
const Home = () => {

	const [colorRed, setColorRed] = useState("danger")
	const [colorOrange, setColorOrange] = useState("warning")
	const [colorGreen, setColorGreen] = useState("success")

	const changeState1 = () => {
		if(colorRed === "danger"){
			setColorRed("danger glow")
			setColorOrange("warning")
			setColorGreen("success")
		}
	}

	const changeState2 = () => {
		if(colorOrange === "warning"){
			setColorOrange("warning glow")
			setColorRed("danger")
			setColorGreen("success")
		} 
	}

	const changeState3 = () => {
		if(colorGreen === "success"){
			setColorGreen("success glow")
			setColorRed("danger")
			setColorOrange("warning")
		}
	}

	return (
		<article className="text-center">
			<div className={"rounded bg-black mx-auto"} style={{width:"12px", height:"100px"}}></div>
			<div className="rounded bg-black p-3 mx-auto" style={{width:"80px", height:"200px"}}>
				<div className={"rounded-circle m-1 bg-" + colorRed} style={{width:"50px", height:"50px"}} onClick={changeState1}></div>
				<div className={"rounded-circle m-1 bg-" + colorOrange} style={{width:"50px", height:"50px"}} onClick={changeState2}></div>
				<div className={"rounded-circle m-1  bg-" + colorGreen} style={{width:"50px", height:"50px"}} onClick={changeState3}></div>
			</div>
		</article>
	);
};

export default Home;