import { FC } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { RootState } from "../../store";
import {
  SimpleGrid,
  Box,
  Image,
  Heading,
  Kbd,
  Button,
  Container,
  Center,
} from "@chakra-ui/react";

import { ArrowBackIcon } from "@chakra-ui/icons";

interface idProps {
  teamId?: number;
}

const Teams: FC<idProps> = () => {
  const params = useParams();
  const teamId = parseInt(params.teamId!.toString());
  console.log("player id", params);

  const navigate = useNavigate();
  const teamData = useSelector((state: RootState) =>
    state.teams.data?.filter((p) => p.team.id === teamId)
  );
  return (
    <div>
      {teamData?.map((t) => (
        <Container>
          <Center>
            <SimpleGrid minChildWidth="400px" spacing="30px">
              <Box bg="white" height="200px">
                <Image src={t.team.logo} height="50px" />
                <Heading>{t.team.name}</Heading>
                <Kbd>Founded : {t.team.founded}</Kbd>
                <Kbd>Address :{t.venue.address}</Kbd>
              </Box>
              <Box bg="white" height="200px">
                <Heading>Venue</Heading>
                <Image src={t.venue.image} height="50px" />
                <Kbd>Name: {t.venue.name}</Kbd>
                <Kbd>Capacity:{t.venue.capacity}</Kbd>
                <Kbd>Surface:{t.venue.surface}</Kbd>
              </Box>
            </SimpleGrid>
          </Center>
          <Button
            rightIcon={<ArrowBackIcon />}
            variant="outline"
            colorScheme="teal"
            onClick={() => {
              navigate("/");
            }}
          >
            Back to home
          </Button>
        </Container>
      ))}
    </div>
  );
};

export default Teams;
