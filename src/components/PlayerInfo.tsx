import React, { FC } from "react";
import { Avatar, Box, Container, Heading, HStack } from "@chakra-ui/react";
import { PlayerData } from "../types/types";

interface playerprops {
  data: PlayerData;
}

const PlayerInfo: FC<playerprops> = ({ data }) => {
  return (
    <div>
      <Container>
        <HStack spacing="24px">
          <Box w="200px" h="200px" bg="white.400">
            <Avatar src={data.player.photo} />
          </Box>
          <Box w="200px" h="200px" bg="white.400">
            <Heading>{data.player.name}</Heading>
          </Box>
          <Box w="200px" h="200px" bg="white.400"></Box>
        </HStack>
      </Container>
    </div>
  );
};

export default PlayerInfo;
