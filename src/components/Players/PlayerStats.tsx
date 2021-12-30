import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  List,
  ListItem,
  Stack,
  Tag,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Kbd,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { RootState } from "../../store";

interface idProps {
  playerId?: number;
}
const PlayerStats: FC<idProps> = () => {
  const params = useParams();
  const playerId = parseInt(params.playerId!.toString());
  console.log("player id", params);

  const navigate = useNavigate();
  const playerData = useSelector((state: RootState) =>
    state.players.data?.filter((p) => p.player.id === playerId)
  );

  return (
    <div>
      {playerData?.map((p) => (
        <HStack spacing="24px" key={p.player.id}>
          <Box>
            <Avatar src={p.player.photo} />
            <Text as="kbd">{p.player.name}</Text>
            <Stack mt={4}>
              <Kbd>
                Date of Birth : {p.player.birth.place} | {p.player.birth.date}
              </Kbd>
              <Kbd variant="solid" colorScheme="red">
                Nationality :{p.player.nationality}
              </Kbd>
            </Stack>
          </Box>
          <Box>
            <Container>
              {p.statistics.map((s) => (
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Team</Th>
                      <Th>League</Th>
                      <Th>Games Played</Th>
                      <Th>Minutes PLayed</Th>
                      <Th>Position</Th>
                      <Th>Goal Scored</Th>
                      <Th>Assists</Th>
                      {s.games.position === "Goalkeeper" ? (
                        <>
                          <Th>Goal Conceded</Th>
                        </>
                      ) : null}
                      {s.games.position === "Goalkeeper" ? (
                        <>
                          <Th>Goal Saved</Th>
                        </>
                      ) : null}
                      <Th>Yellow Card</Th>
                      <Th>Red Card</Th>
                      <Th>Yellow - Red</Th>
                      <Th>Passes</Th>
                      <Th>Key Passes</Th>
                      <Th>Accuracy</Th>
                      <Th>Tackles</Th>
                      <Th>Blocks</Th>
                      <Th>Interceptions</Th>
                      <Th>Dribbles Attempts</Th>
                      <Th>Dribbles Success</Th>
                      <Th>Dribbles Past</Th>
                      <Th>Fouls Against</Th>
                      <Th>Fouls Committed</Th>
                      <Th>Duels Committed</Th>
                      <Th>Duels Won</Th>
                      <Th>Penalty Scored</Th>
                      <Th>
                        {s.games.position === "Goalkeeper" ? (
                          <>Penalty Saved</>
                        ) : null}
                      </Th>
                    </Tr>
                  </Thead>
                  {p.statistics.map((s) => (
                    <Tbody>
                      <Tr>
                        <Td>
                          <HStack>
                            <Avatar src={s.team.logo} mr="2" />
                            <Kbd>{s.team.name}</Kbd>
                          </HStack>
                        </Td>
                        <Td>
                          <HStack>
                            <Avatar src={s.league.logo} mr={2} />
                            <Kbd>{s.league.name}</Kbd>
                          </HStack>
                        </Td>
                        <Td>
                          <Kbd>{s.games.appearences}</Kbd>
                        </Td>
                        <Td>
                          <Kbd>{s.games.minutes}</Kbd>
                        </Td>
                        <Td>
                          <Kbd>{s.games.position}</Kbd>
                        </Td>
                        <Td>
                          <Kbd>{s.goals.total}</Kbd>
                        </Td>
                        <Td>
                          <Kbd>{s.goals.assists}</Kbd>
                        </Td>

                        {s.games.position === "Goalkeeper" ? (
                          <>
                            <Td>
                              <Kbd>{s.goals.conceded}</Kbd>
                            </Td>
                          </>
                        ) : null}

                        {s.games.position === "Goalkeeper" ? (
                          <>
                            <Td>
                              <Kbd>{s.goals.saves}</Kbd>
                            </Td>
                          </>
                        ) : null}

                        <Td>
                          <Kbd>{s.cards.yellow}</Kbd>
                        </Td>

                        <Td>
                          <Kbd>{s.cards.red}</Kbd>
                        </Td>

                        <Td>
                          <Kbd>{s.cards.yellowred}</Kbd>
                        </Td>

                        <Td>
                          <Kbd>{s.passes.total}</Kbd>
                        </Td>

                        <Td>
                          <Kbd>{s.passes.key}</Kbd>
                        </Td>

                        <Td>
                          <Kbd>{s.passes.accuracy} %</Kbd>
                        </Td>

                        <Td>
                          <Kbd>{s.tackles.total}</Kbd>
                        </Td>

                        <Td>
                          <Kbd>{s.tackles.blocks}</Kbd>
                        </Td>

                        <Td>
                          <Kbd>{s.tackles.interceptions}</Kbd>
                        </Td>

                        <Td>
                          <Kbd>{s.dribbles.attempts}</Kbd>
                        </Td>

                        <Td>
                          <Kbd>{s.dribbles.success}</Kbd>
                        </Td>

                        <Td>
                          <Kbd>{s.dribbles.past}</Kbd>
                        </Td>

                        <Td>
                          <Kbd>{s.fouls.drawn}</Kbd>
                        </Td>

                        <Td>
                          <Kbd>{s.fouls.committed}</Kbd>
                        </Td>

                        <Td>
                          <Kbd>{s.duels.total}</Kbd>
                        </Td>
                        <Td>
                          <Kbd>{s.duels.won}</Kbd>
                        </Td>
                        <Td>
                          <Kbd>{s.penalty.scored}</Kbd>
                        </Td>
                        {s.games.position === "Goalkeeper" ? (
                          <>
                            <Td>
                              <Kbd>{s.penalty.saved}</Kbd>
                            </Td>
                          </>
                        ) : null}
                      </Tr>
                    </Tbody>
                  ))}

                  <Tfoot>
                    <Tr>
                      <Th>
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
                      </Th>
                    </Tr>
                  </Tfoot>
                </Table>
              ))}
            </Container>
          </Box>
        </HStack>
      ))}
    </div>
  );
};

export default PlayerStats;
