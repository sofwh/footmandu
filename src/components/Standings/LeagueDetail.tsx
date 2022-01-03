import {
  Box,
  Kbd,
  Container,
  HStack,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
  Center,
  Flex,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { Empty } from "antd";

const LeagueDetail: FC = () => {
  const standingsData = useSelector((state: RootState) => state.standings.data);
  const loading = useSelector((state: RootState) => state.standings.loading);
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <VStack>
          {" "}
          {standingsData ? null : (
            <>
              <Empty description="No data found" />
            </>
          )}
          <Box p="5">
            <Container>
              <Center>
                {standingsData?.map((data) => (
                  <Flex key={data.league.id}>
                    <HStack spacing="5">
                      <Image src={data.league.logo} height="30px" />
                      <Text as="kbd">{data.league.name}</Text>
                      <Tooltip label={data.league.country}>
                        <Image src={data.league.flag} height="30px" />
                      </Tooltip>
                    </HStack>
                    <Button
                      rightIcon={<ArrowBackIcon />}
                      variant="outline"
                      colorScheme="teal"
                      onClick={() => {
                        navigate("/");
                      }}
                      ml="5"
                      size="xs"
                    >
                      Back to home
                    </Button>
                  </Flex>
                ))}
              </Center>
            </Container>
          </Box>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Position</Th>
                <Th>Club</Th>
                <Th>Played</Th>
                <Th>Won</Th>
                <Th>Drawn</Th>
                <Th>Lost</Th>
                <Th>GF</Th>
                <Th>GA</Th>
                <Th>GD</Th>
                <Th>Points</Th>
                <Th>Form</Th>
              </Tr>
            </Thead>
            {standingsData?.map((data) => (
              <Tbody key={data.league.id}>
                {data.league.standings[0].map((t: any) => (
                  <Tr key={t.rank}>
                    <Td>{t.rank}</Td>
                    <Td>
                      <HStack>
                        <Image src={t.team.logo} height="30px" />
                        <Text as="kbd">{t.team.name}</Text>
                      </HStack>
                    </Td>
                    <Td>{t.all.played}</Td>
                    <Td>{t.all.win}</Td>
                    <Td>{t.all.draw}</Td>
                    <Td>{t.all.lose}</Td>
                    <Td>{t.all.goals.for}</Td>
                    <Td>{t.all.goals.against}</Td>
                    <Td>{t.goalsDiff}</Td>
                    <Td>{t.points}</Td>
                    <Td>
                      <Kbd>{t.form}</Kbd>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            ))}
          </Table>
        </VStack>
      </Container>
    </div>
  );
};

export default LeagueDetail;
