import React, { FC } from "react";
import {
  Avatar,
  Container,
  TagLabel,
  Tag,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";
import { PlayerData } from "../../types/types";
import { Link } from "react-router-dom";

interface playerprops {
  data: PlayerData[];
}

const PlayerInfo: FC<playerprops> = ({ data }) => {
  return (
    <div>
      <Container>
        {data.map((playerData) => (
          <Flex key={playerData.player.id}>
            <Avatar src={playerData.player.photo} />
            <div className="player-profile">
              <Tag size="lg" variant="solid" ml="5">
                <Link to={`/players=${playerData.player.id}`}>
                  {playerData.player.name}
                </Link>
              </Tag>
              <div className="padding-div">
                <Tag size="lg" color="white" variant="outline">
                  <Avatar
                    src={playerData.statistics[0].team.logo}
                    size="xs"
                    name={playerData.statistics[0].team.name}
                    ml={-1}
                    mr={2}
                  />
                  <TagLabel>{playerData.statistics[0].team.name}</TagLabel>
                </Tag>
              </div>
            </div>
          </Flex>
        ))}
      </Container>
    </div>
  );
};

export default PlayerInfo;
