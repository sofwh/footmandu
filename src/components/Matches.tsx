import React, { FC } from "react";
import { HStack, Select, Input } from "@chakra-ui/react";

const Matches: FC = () => {
  return (
    <>
      <HStack spacing="10px">
        <Select placeholder="League">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Input type="date" placeholder="Filled" />
        <Select placeholder="Season">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </HStack>
    </>
  );
};

export default Matches;
