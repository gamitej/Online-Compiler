import { useState } from "react";
import Navbar from "./comp/Navbar/Navbar";
import CodingScreen from "./comp/Screen/ComplierScreen";
import Editor from "react-monaco-editor";

import Axios from "axios";

function App() {
	// State variable to set editors default language
	const [userLang, setUserLang] = useState("python");

	// State variable to set editors default theme
	const [userTheme, setUserTheme] = useState("vs-dark");

	// State variable to set editors default font size
	const [fontSize, setFontSize] = useState(20);
	// State variable to set users source code
	const [userCode, setUserCode] = useState(``);

	const options = {
		fontSize: fontSize,
	};
	// State variable to set users input
	const [userInput, setUserInput] = useState("");

	// State variable to set users output
	const [userOutput, setUserOutput] = useState("");

	// Loading state variable to show spinner
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

	const btnClass =
		"inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out";

	const screenProps = {
		btnClass,
		setUserInput,
		userOutput,
		compile,
		loading,
		clearOutput,
	};

	return (
		<div className="h-screen">
			<Navbar
				userLang={userLang}
				setUserLang={setUserLang}
				userTheme={userTheme}
				setUserTheme={setUserTheme}
				fontSize={fontSize}
				setFontSize={setFontSize}
				btnClass={btnClass}
			/>
			<div className="w-full flex">
				<div className="w-[60%]">
					<Editor
						options={options}
						height="calc(95vh - 15px)"
						width="100%"
						theme={userTheme}
						language={userLang}
						defaultLanguage="python"
						defaultValue="# Enter your code here"
						onChange={(value) => {
							setUserCode(value);
						}}
					/>
				</div>
				<div className="w-[40%]">
					<CodingScreen {...screenProps} />
				</div>
			</div>
		</div>
	);
}

export default App;
