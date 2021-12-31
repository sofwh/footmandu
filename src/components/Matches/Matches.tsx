import {
  SimpleGrid,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  Image,
  HStack,
  AccordionPanel,
  Text,
  Badge,
  Kbd,
  VStack,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { getMatch } from "../../store/actions/matchAction";

const Matches: FC = () => {
  const dispatch = useDispatch();
  const matchData = useSelector((state: RootState) => state.matchs.data);
  useEffect(() => {
    dispatch(getMatch());
  }, [dispatch]);
  return (
    <>
      <SimpleGrid columns={2} spacing="40px">
        {matchData?.map((m) => (
          <Accordion allowToggle key={m.fixture.id}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <HStack spacing="30px">
                      <Image src={m.league.flag} height="20px" />
                      <Text as="kbd">
                        {m.league.country}-{m.league.name}-{m.league.round}-
                        {m.league.season}
                      </Text>
                    </HStack>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <HStack spacing="30px">
                  <Text as="kbd" color="black">
                    {m.teams.home.name}
                  </Text>
                  <VStack>
                    <Badge>
                      {m.goals.home} - {m.goals.away}
                    </Badge>
                    <HStack>
                      <Text as="kbd" color="red" fontSize="xs">
                        {m.fixture.status.elapsed}{" "}
                      </Text>
                      <Text as="sup" color="green">
                        '
                      </Text>
                    </HStack>
                  </VStack>

                  <Text as="kbd" color="black">
                    {m.teams.away.name}
                  </Text>
                </HStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Matches;
