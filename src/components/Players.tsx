import React, { FC, useState, FormEvent } from "react";
import { HStack, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayer, setLoading } from "../store/actions/playerActions";
import PlayerInfo from "./PlayerInfo";
import { RootState } from "../store";

const Players: FC = () => {
  const playerData = useSelector((state: RootState) => state.players.data);
  const loading = useSelector((state: RootState) => state.players.loading);
  const error = useSelector((state: RootState) => state.players.error);

  const toast = useToast();
  const dispatch = useDispatch();

  const [playerName, setPlayerName] = useState("");

  const nameHandler = (e: FormEvent<HTMLInputElement>) => {
    setPlayerName(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (playerName.trim() === "") {
      toast({
        title: "Player name Required",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    dispatch(setLoading());
    dispatch(getPlayer(playerName));
    setPlayerName("");
    console.log(playerData);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <HStack spacing="15px">
          <input
            className="input mb-2 input-search"
            value={playerName}
            placeholder="Enter player name"
            onChange={nameHandler}
          />

          <button
            className="button is-primary is-fullwidth"
            style={{ maxWidth: 300, margin: "0 auto" }}
          >
            Search
          </button>
        </HStack>
      </form>

      <div>
        {loading ? (
          <h2 className="is-size-3 py-2">Loading...</h2>
        ) : (
          playerData && <PlayerInfo data={playerData} />
        )}
      </div>
    </>
  );
};

export default Players;
