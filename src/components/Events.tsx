import React, { FC } from "react";

import { Select } from "@chakra-ui/react";

const Events: FC = () => {
  return (
    <>
      <Select placeholder="Select event">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </>
  );
};

export default Events;
