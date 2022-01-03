import React, { FC, useState, FormEvent } from "react";
import {
  Center,
  Container,
  HStack,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayer, setLoading } from "../../store/actions/playerActions";
import PlayerInfo from "./PlayerInfo";
import { RootState } from "../../store";
import { PacmanLoader } from "react-spinners";

const Players: FC = () => {
  const playerData = useSelector((state: RootState) => state.players.data);
  const loading = useSelector((state: RootState) => state.players.loading);
  const error = useSelector((state: RootState) => state.players.error);

  const toast = useToast();
  const dispatch = useDispatch();

  const [playerName, setPlayerName] = useState("");

  const submitHandler = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPlayerName(e.currentTarget.value);

    if (playerName.trim() === "") {
      toast({
        title: "Minimum 4 character required",
        status: "info",
        duration: 1000,
        isClosable: true,
      });
    }

    dispatch(setLoading());
    dispatch(getPlayer(playerName));
  };
  return (
    <>
      <HStack spacing="15px">
        <Input
          variant="outline"
          value={playerName}
          placeholder="Enter player name"
          onChange={submitHandler}
        />
      </HStack>
      <div className="padding-div">
        {loading ? (
          <Container>
            <Stack spacing={20} className="player-padding">
              <PacmanLoader
                size={20}
                speedMultiplier={3}
                margin={2}
                color="white"
              />
            </Stack>
          </Container>
        ) : (
          playerData && <PlayerInfo data={playerData} />
        )}
      </div>
    </>
  );
};

export default Players;
