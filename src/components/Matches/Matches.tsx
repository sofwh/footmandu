import {
  SimpleGrid,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  Tag,
  Image,
  HStack,
  AccordionPanel,
  Text,
  Badge,
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
  }, []);
  return (
    <>
      <SimpleGrid columns={2} spacing="40px">
        {matchData?.map((m) => (
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <HStack spacing="10px">
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
                <HStack>
                  <Tag variant="solid" colorScheme="red">
                    {m.teams.home.name}
                  </Tag>

                  <div className="score-flex">
                    <Badge>
                      {m.goals.home} - {m.goals.away}
                    </Badge>
                    <h6 className="score-heading">
                      {m.fixture.status.elapsed}{" "}
                      <sup className="sup-header">'</sup>
                    </h6>
                  </div>
                  <Tag variant="solid" colorScheme="green">
                    {m.teams.away.name}
                  </Tag>
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
