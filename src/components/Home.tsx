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
} from "@chakra-ui/react";
import React, { FC } from "react";
import logo from "../assets/logo.svg";
import Players from "./Players";
import Matches from "./Matches";
import Team from "./Team";
import Events from "./Events";

const Home: FC = () => {
  return (
    <div className="home-Component">
      <Center bg="black" h="100px" color="white" style={{ height: "inherit" }}>
        <VStack spacing="25px">
          <Center>
            <Image
              borderRadius="full"
              boxSize="250px"
              src={logo}
              alt="Footmandu"
            />
            <Heading>Everything about Premier League</Heading>
          </Center>

          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab>Matches</Tab>
              <Tab>Players</Tab>
              <Tab>Teams</Tab>
              <Tab>Events</Tab>
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
                <Events />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Center>
    </div>
  );
};

export default Home;
