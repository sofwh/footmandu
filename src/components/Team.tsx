import React, { FC } from "react";
import { HStack, Input, IconButton, Select } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Team: FC = () => {
  return (
    <>
      <HStack spacing="15px">
        <Input variant="outline" placeholder="Enter team name" />
        <Select placeholder="Select Season">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <IconButton
          aria-label="Search database"
          icon={<SearchIcon />}
          colorScheme="teal"
        />
      </HStack>
    </>
  );
};

export default Team;
