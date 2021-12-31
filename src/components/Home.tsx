import {
  Center,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  VStack,
  Image,
  Heading,
  HStack,
  Container,
} from "@chakra-ui/react";
import { FC } from "react";
import logo from "../assets/logo.svg";
import Players from "./Players/Players";
import Matches from "./Matches/Matches";
import Team from "./Teams/Team";
import Leagues from "./Standings/Leagues";

const Home: FC = () => {
  return (
    <div className="home-Component">
      <VStack spacing="25px">
        <HStack>
          <Image
            borderRadius="full"
            boxSize="250px"
            src={logo}
            alt="Footmandu"
          />
          <Heading> Footmandu</Heading>
        </HStack>

        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>Live Matches</Tab>
            <Tab>Players</Tab>
            <Tab>Teams</Tab>
            <Tab>Standings</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Matches />
            </TabPanel>
            <TabPanel>
              <Players />
            </TabPanel>
            <TabPanel>
              <Team />
            </TabPanel>
            <TabPanel>
              <Leagues />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </div>
  );
};

export default Home;
