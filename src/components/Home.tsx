import {
  Center,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Input,
  IconButton,
  Select,
  HStack,
  VStack,
  Image,
  Heading,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { FC } from "react";
import logo from "../assets/logo.svg";

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
            <Heading>FOOTMANDU</Heading>
          </Center>

          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab>Live Match</Tab>
              <Tab>Players</Tab>
              <Tab>Teams</Tab>
              <Tab>Events</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Select placeholder="Select live match">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </TabPanel>
              <TabPanel>
                <HStack spacing="15px">
                  <Input variant="outline" placeholder="Enter player name" />
                  <IconButton
                    aria-label="Search database"
                    icon={<SearchIcon />}
                    colorScheme="teal"
                  />
                </HStack>
              </TabPanel>
              <TabPanel>
                <HStack spacing="15px">
                  <Input variant="outline" placeholder="Enter team name" />
                  <IconButton
                    aria-label="Search database"
                    icon={<SearchIcon />}
                    colorScheme="teal"
                  />
                </HStack>
              </TabPanel>
              <TabPanel>
                <Select placeholder="Select event">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Center>
    </div>
  );
};

export default Home;
