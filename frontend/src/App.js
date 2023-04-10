import React, { useState } from "react";

// libs
import Axios from "axios";
import Editor from "react-monaco-editor";

// comps
import Navbar from "./comp/Navbar/Navbar";
import CodingScreen from "./comp/Screen/ComplierScreen";

function App() {
  const [state, setState] = useState({
    userLang: "python",
    userTheme: "vs-dark",
    fontSize: 20,
    userCode: "",
    userInput: "",
    userOutput: "",
    loading: "",
  });

  // Loading state variable to show spinner
  const [loading, setLoading] = useState(false);

  // Function to call the compile endpoint
  const compile = () => {
    setLoading(true);
    if (state.userCode === ``) {
      setLoading(false);
      return;
    }

    // Post request to compile endpoint
    Axios.post(`http://127.0.0.1:5000/compile`, {
      code: state.userCode,
      language: "py",
      input: state.userInput,
    }).then((res) => {
      handleChange(res.data.output, "userOutput");
      setLoading(false);
    });
  };

  const btnClass =
    "inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out";

  const handleChange = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const screenProps = {
    handleChange,
    userOutput: state.userOutput,
    compile,
    loading,
  };

  const options = {
    fontSize: state.fontSize,
  };
  return (
    <div className="flex flex-col h-[100vh] w-full">
      <div className="w-full h-[100vh]">
        <div className="h-[10vh]">
          <Navbar
            userLang={state.userLang}
            userTheme={state.userTheme}
            fontSize={state.fontSize}
            btnClass={btnClass}
            compile={compile}
            handleChange={handleChange}
          />
        </div>
        <div className="w-full flex h-[90vh]">
          <div className="w-[100%]">
            <Editor
              options={options}
              width="100%"
              theme={state.userTheme}
              language={state.userLang}
              defaultLanguage="python"
              defaultValue="# Enter your code here"
              onChange={(value) => {
                handleChange(value, "userCode");
              }}
            />
          </div>
          <div className="w-[40%]">
            <CodingScreen {...screenProps} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
