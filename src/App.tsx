import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default App;
