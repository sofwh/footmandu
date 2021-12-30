import React, { FC } from "react";
import {
  Avatar,
  Container,
  TagLabel,
  Tag,
  Flex,
  SimpleGrid,
  Box,
  Image,
} from "@chakra-ui/react";
import { TeamData } from "../../types/types";
import { Link } from "react-router-dom";

interface teamProps {
  data: TeamData[];
}

const TeamInfo: FC<teamProps> = ({ data }) => {
  return (
    <div>
      <SimpleGrid columns={4} spacingX="40px" spacingY="20px">
        {data.map((TeamData) => (
          <Flex key={TeamData.team.id}>
            <Image src={TeamData.team.logo} height="50px" />
            <div className="player-profile">
              <Tag size="lg" variant="solid" ml="5">
                <Link to={`/teams=${TeamData.team.id}`}>
                  {TeamData.team.name}
                </Link>
              </Tag>
            </div>
          </Flex>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default TeamInfo;
