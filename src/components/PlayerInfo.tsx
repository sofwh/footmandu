import React, { FC } from "react";
import { Avatar, Container, TagLabel, Tag, HStack } from "@chakra-ui/react";
import { PlayerData } from "../types/types";

interface playerprops {
  data: PlayerData[];
}

const PlayerInfo: FC<playerprops> = ({ data }) => {
  return (
    <div>
      <Container>
        {data.map((playerData, index) => (
          <HStack>
            <Avatar src={playerData.player.photo} />
            <div className="player-profile">
              <Tag size="lg" variant="solid" ml="5">
                {playerData.player.name}
              </Tag>

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
          </HStack>
        ))}
      </Container>
    </div>
  );
};

export default PlayerInfo;
