import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import League from "./components/League";
import Standings from "./components/Standings";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/standings" element={<Standings />}></Route>
        <Route path="/leagues" element={<League />} />
      </Routes>
    </>
  );
};

export default App;
