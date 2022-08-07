import React, { useState } from "react";
import spinner from "../../spinner.gif";

import Axios from "axios";

const ComplierScreen = ({ userLang, userCode }) => {
	// State variable to set users input
	const [userInput, setUserInput] = useState("");

	// State variable to set users output
	const [userOutput, setUserOutput] = useState("");

	// Loading state variable to show spinner
	// while fetching data
	const [loading, setLoading] = useState(true);

	// Function to call the compile endpoint
	function compile() {
		console.log(userCode);
		setLoading(true);
		if (userCode === ``) {
			return;
		}

		// Post request to compile endpoint
		Axios.post(`http://localhost:8000/compile`, {
			code: userCode,
			language: userLang,
			input: userInput,
		})
			.then((res) => {
				setUserOutput(res.data.output);
			})
			.then(() => {
				setLoading(false);
			});
	}

	// Function to clear the output screen
	function clearOutput() {
		setUserOutput("");
	}
	return (
		<div className="main">
			<div className="left-container">
				<button
					className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					onClick={compile}
				>
					Run
				</button>
			</div>
			<div className="right-container">
				<h4>Input:</h4>
				<div className="input-box">
					<textarea
						className="w-full max-h-20"
						id="code-inp"
						onChange={(e) => setUserInput(e.target.value)}
					></textarea>
				</div>
				<h4>Output:</h4>
				{loading ? (
					<div className="spinner-box">
						<img src={spinner} alt="Loading..." />
					</div>
				) : (
					<div className="output-box">
						<pre>{userOutput}</pre>
						<button
							onClick={() => {
								clearOutput();
							}}
							className="clear-btn"
						>
							Clear
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default ComplierScreen;
