import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PlayerStats from "./components/Players/PlayerStats";
import LeagueDetail from "./components/Standings/LeagueDetail";
import Teams from "./components/Teams/Teams";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players=:playerId" element={<PlayerStats />} />
        <Route path="/teams=:teamId" element={<Teams />} />
        <Route path="/standings:leagueId" element={<LeagueDetail />} />
      </Routes>
    </>
  );
};

export default App;
