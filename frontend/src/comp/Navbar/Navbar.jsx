import React from "react";
import Select from "react-select";

const Navbar = ({
	userLang,
	setUserLang,
	userTheme,
	setUserTheme,
	fontSize,
	setFontSize,
	btnClass,
	compile,
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
		<div className="flex flex-row justify-between items-center bg-slate-600 p-4">
			<div className="flex flex-row gap-3 items-center ">
				<h1 className="text-3xl font-bold text-[#afec3f]">
					Code Compiler
				</h1>

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

				<label className="text-[#afec3f]">Font Size</label>
				<input
					type="range"
					min="18"
					max="30"
					value={fontSize}
					step="2"
					onChange={handleInput}
				/>
			</div>
			<button className={btnClass} onClick={compile}>
				Run
			</button>
		</div>
	);
};

export default Navbar;
