import React, { FC } from "react";
import { Avatar, Container, Image, Tag, Flex } from "@chakra-ui/react";
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
            <Image src={playerData.player.photo} height="50px" />
            <div className="player-profile">
              <Tag size="lg" variant="solid" ml="5">
                <Link to={`/players=${playerData.player.id}`}>
                  {playerData.player.name}
                </Link>
              </Tag>
            </div>
          </Flex>
        ))}
      </Container>
    </div>
  );
};

export default PlayerInfo;
