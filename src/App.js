import { useState } from "react";
import Navbar from "./comp/Navbar/Navbar";
import CodingScreen from "./comp/Screen/ComplierScreen";
import Editor from "react-monaco-editor";

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

	const screenProps = {
		userLang,
		userCode,
	};

	return (
		<div className="w-full flex">
			<div className="w-[50%]">
				<Navbar
					userLang={userLang}
					setUserLang={setUserLang}
					userTheme={userTheme}
					setUserTheme={setUserTheme}
					fontSize={fontSize}
					setFontSize={setFontSize}
				/>
				<Editor
					options={options}
					height="calc(100vh - 50px)"
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
			<div className="w-[50%] p-3">
				<CodingScreen {...screenProps} />
			</div>
		</div>
	);
}

export default App;
