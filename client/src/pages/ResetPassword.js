import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppIcon from "../images/App_Icon.png";

function UpdatePassword() {
	const { userId, token } = useParams();
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");
	const [responseText, setResponseText] = useState("");
	const [passwordsMatch, setPasswordsMatch] = useState(true);

	const updatePassword = async (password1, password2) => {
		if (password1 !== password2) {
			setPasswordsMatch(false);
		} else {
			setPasswordsMatch(true);
			const password = password1;
			try {
				const response = await axios.post(
					`http://app.famallies.org/api/resetPassword/${userId}/${token}`,
					{
						password,
					}
				);

				const data = await response.data;
				setResponseText(data);
			} catch (err) {
				console.log(err);
			}
		}
	};

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
						Reset Your Password
					</h2>
				</div>

				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-gray-200 py-8 px-4 shadow-lg shadow-indigo-600/60 sm:rounded-lg sm:px-10 ring-indigo-600 ring-4 ring-offset-8">
						<form
							className="space-y-6"
							action="#"
							method="POST"
							onSubmit={(e) => {
								e.preventDefault();
								updatePassword(password1, password2);
							}}>
							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700">
									New Password
								</label>
								<div className="mt-1">
									<input
										id="password1"
										name="password1"
										type="password"
										autoComplete="email"
										required
										className="bg-gray-100 block w-full appearance-none rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
										onChange={(e) => setPassword1(e.target.value)}
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700">
									Retype New Password
								</label>
								<div className="mt-1">
									<input
										id="password2"
										name="password2"
										type="password"
										autoComplete="current-password"
										required
										className="bg-gray-100 block w-full appearance-none rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
										onChange={(e) => setPassword2(e.target.value)}
									/>
								</div>
							</div>
							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
									Reset Password
								</button>
							</div>
							<div className="text-center text-xl font-bold tracking-tight text-indigo-600">
								{passwordsMatch ? null : <div>Passwords do not match</div>}
								{responseText === "Password reset sucessfully!" ? (
									<div>
										<div>Password successfully updated!</div>
										<div>You may now log in to the app</div>
									</div>
								) : null}
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default UpdatePassword;
