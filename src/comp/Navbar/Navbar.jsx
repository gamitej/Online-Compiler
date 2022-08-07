import React from "react";
import Select from "react-select";

const Navbar = ({
	userLang,
	setUserLang,
	userTheme,
	setUserTheme,
	fontSize,
	setFontSize,
}) => {
	const languages = [
		{ value: "c", label: "C" },
		{ value: "cpp", label: "C++" },
		{ value: "python", label: "Python" },
		{ value: "java", label: "Java" },
	];
	const themes = [
		{ value: "vs-dark", label: "Dark" },
		{ value: "light", label: "Light" },
	];

	const handleInput = (e) => {
		setFontSize(e.target.value);
	};
	return (
		<div className="">
			<h1 className="text-lg font-medium text-gray-400">Code Compiler</h1>

			<div className="flex gap-3">
				<Select
					options={languages}
					value={userLang}
					onChange={(e) => setUserLang(e.value)}
					placeholder={userLang}
				/>
				<Select
					options={themes}
					value={userTheme}
					onChange={(e) => setUserTheme(e.value)}
					placeholder={userTheme}
				/>
			</div>

			<label>Font Size</label>
			<input
				type="range"
				min="18"
				max="30"
				value={fontSize}
				step="2"
				onChange={handleInput}
			/>
		</div>
	);
};

export default Navbar;
