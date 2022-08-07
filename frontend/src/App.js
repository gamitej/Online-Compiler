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
	const [loading, setLoading] = useState(false);

	// Function to call the compile endpoint
	const compile = () => {
		console.log(userCode);
		setLoading(true);
		if (userCode === ``) {
			setLoading(false);
			return;
		}

		// Post request to compile endpoint
		Axios.post(`http://127.0.0.1:5000/compile`, {
			code: userCode,
			language: "py",
			input: userInput,
		}).then((res) => {
			console.log(res.data.data);
			setUserOutput(res.data.output);
			setLoading(false);
		});
	};

	const btnClass =
		"inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out";

	const screenProps = {
		setUserInput,
		userOutput,
		compile,
		loading,
	};

	return (
		<div className="flex flex-col h-screen w-full justify-center items-center">
			<div className="w-[50%]">
				<Navbar
					userLang={userLang}
					setUserLang={setUserLang}
					userTheme={userTheme}
					setUserTheme={setUserTheme}
					fontSize={fontSize}
					setFontSize={setFontSize}
					btnClass={btnClass}
					compile={compile}
				/>
				<div className="w-full flex">
					<div className="w-[100%] h-[30rem] border rounded-2xl lg-mr-6 shadow-md">
						<Editor
							options={options}
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
					<div className="w-[40%] border rounded-2xl lg-mr-6 shadow-md">
						<CodingScreen {...screenProps} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
