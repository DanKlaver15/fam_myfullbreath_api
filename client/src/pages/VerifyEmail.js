import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppIcon from "../images/App_Icon.png";

function VerifyEmail() {
	const { userId } = useParams();
	const [success, setSuccess] = useState(false);

	const verifyEmail = async (userId) => {
		try {
			const response = await axios.post(
				`http://app.famallies.org/api/verifyEmail/${userId}`
			);

			const data = await response.data;
			setSuccess(data.verified);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		verifyEmail(userId);
	});

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
						{success ? (<div>Your email address has been successfully verified!</div>) : null}
					</h2>
				</div>
			</div>
		</>
	);
}

export default VerifyEmail;
