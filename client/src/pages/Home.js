// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
import AppIcon from "../images/App_Icon.png";

function Home() {
	return (
		<>
			<div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<img
						className="mx-auto h-24 w-auto rounded-lg"
						src={AppIcon}
						alt="Fight Asthma Milwaukee Allies"
					/>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-200">
						My Full Breath
					</h2>
					<p className="mt-4 text-center text-lg leading-relaxed text-gray-500">
						An app created by:&nbsp;
						<a href="https://www.famallies.org/" target="_blank" rel="noreferrer" alt="FAM Allies Home Page">Fight Asthma Milwaukee Allies, Inc.</a> 
					</p>
				</div>
			</div>
		</>
	);
}

export default Home;
