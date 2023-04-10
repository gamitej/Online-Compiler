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

  const dropDownList = [
    {
      options: languages,
      value: userLang,
      changeEvent: (e) => setUserLang(e.value),
    },
    {
      options: themes,
      value: userTheme,
      changeEvent: (e) => setUserTheme(e.value),
    },
  ];

  return (
    <div className="bg-slate-600 p-4">
      <div className="flex  lg:flex-row flex-col items-center w-full gap-y-4">
        {/* Title & Dropdown */}
        <div className="flex items-center lg:w-[60%] w-full gap-x-6">
          <h1 className="text-3xl font-bold text-[#afec3f]">Code Compiler</h1>

          <div className="flex items-center gap-x-3">
            {dropDownList.map((items, index) => (
              <div className="col-span-1">
                <Select
                  options={items.options}
                  value={items.value}
                  onChange={items.changeEvent}
                  placeholder={items.value}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Font Size & Run Button */}
        <div className="flex justify-between items-center lg:w-[40%] w-full">
          <div className="flex justify-between items-center gap-x-1">
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
          <div className="flex justify-end">
            <button className={btnClass} onClick={compile}>
              Run
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
