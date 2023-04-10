import React from "react";

const ComplierScreen = ({ handleChnage, userOutput, loading }) => {
  return (
    <div className="w-full h-[90vh]">
      <div className="flex flex-col bg-[#242424] p-3 relaive h-full">
        <h4 className="text-[#afec3f]">Input:</h4>
        <div className="flex h-[50%] mt-2">
          <textarea
            className=" w-full text-lg focus:outline-none bg-[#242424] border-2 border-slate-600 text-white"
            onChange={(e) => handleChnage(e.target.value,"userInput")}
          ></textarea>
        </div>
        <h4 className="text-[#afec3f] mt-2">Output :</h4>
        <div className="h-[60%] flex bg-[#242424] overflow-y-auto">
          {loading ? (
              <p className="text-white">Compiling ... </p>
          ) : (
              <p className="w-full whitespace-pre-wrap font-lg p-2 text-white">
                {userOutput}
              </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplierScreen;
