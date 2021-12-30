import { FC, useState, FormEvent } from "react";
import { Container, HStack, Stack, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../store/actions/playerActions";
import { RootState } from "../../store";
import { PacmanLoader } from "react-spinners";
import { getTeam } from "../../store/actions/teamActions";
import TeamInfo from "./TeamInfo";

const Team: FC = () => {
  const teamData = useSelector((state: RootState) => state.teams.data);
  const loading = useSelector((state: RootState) => state.teams.loading);
  const error = useSelector((state: RootState) => state.teams.error);

  const toast = useToast();
  const dispatch = useDispatch();

  const [teamName, setteamName] = useState("");

  const submitHandler = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setteamName(e.currentTarget.value);

    if (teamName.trim() === "") {
      toast({
        title: "Minimum 4 character required",
        status: "info",
        duration: 1000,
        isClosable: true,
      });
    }

    dispatch(setLoading());
    dispatch(getTeam(teamName));
  };
  return (
    <>
      <HStack spacing="15px">
        <input
          className="input mb-2 input-search"
          value={teamName}
          placeholder="Enter team name"
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
          teamData && <TeamInfo data={teamData} />
        )}
      </div>
    </>
  );
};

export default Team;
