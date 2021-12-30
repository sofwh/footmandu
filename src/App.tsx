import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PlayerStats from "./components/Players/PlayerStats";
import Teams from "./components/Teams/Teams";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players=:playerId" element={<PlayerStats />} />
        <Route path="/teams=:teamId" element={<Teams />} />
      </Routes>
    </>
  );
};

export default App;
