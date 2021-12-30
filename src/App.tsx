import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PlayerStats from "./components/Players/PlayerStats";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players=:playerId" element={<PlayerStats />} />
      </Routes>
    </>
  );
};

export default App;
