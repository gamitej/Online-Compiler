import React, { Suspense, lazy } from "react";

import HashLoader from "react-spinners/HashLoader";



const Home = lazy(() => import("./pages/Home.jsx"));

const comp = (
  <div className="w-full h-[90vh] font-semibold text-2xl flex justify-center items-center">
    <HashLoader color="#36d7b7" size={50} />
  </div>
);

const App = () => {
  return (
    <Suspense fallback={comp}>
      <Home />
    </Suspense>
  );
};

export default App;
