import spinner from "../../spinner.gif";

const ComplierScreen = ({
	btnClass,
	setUserInput,
	userOutput,
	compile,
	clearOutput,
	loading,
}) => {
	return (
		<div className="h-[90vh]">
			<div className="flex flex-col bg-[#242424] p-3 relaive">
				<h4 className="text-[#afec3f]">Input:</h4>
				<div className="flex h-[40vh]">
					<textarea
						className="w-full text-lg focus:outline-none bg-[#242424] border-2 border-slate-600 text-white"
						onChange={(e) => setUserInput(e.target.value)}
					></textarea>
				</div>
				<h4 className="text-[#afec3f]">Output:</h4>
				{loading ? (
					<div className="flex h-[46.5vh] bg-[#242424] overflow-y-auto justify-center items-center">
						<img src={spinner} alt="Loading..." />
					</div>
				) : (
					<div className="flex flex-[50%] bg-[#242424] overflow-y-auto text-white relative">
						<p className="h-80 whitespace-pre-wrap font-lg">
							{userOutput}
						</p>
						<button
							onClick={() => {
								clearOutput();
							}}
							className={`${btnClass} active:bg-[#6e9427] absolute bottom-2 right-2`}
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
