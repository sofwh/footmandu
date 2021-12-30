import React, { FC, useEffect } from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getLeague } from "../../store/actions/leagueAction";
import { Select } from "antd";

const { Option } = Select;
const Leagues: FC = () => {
  const dispatch = useDispatch();
  const leagueData = useSelector((state: RootState) => state.league.data);
  useEffect(() => {
    dispatch(getLeague());
    console.log("leagueData", leagueData);
  }, []);

  const handleChange = (value: string) => {
    console.log("Selected value", value);
  };
  return (
    <>
      <HStack spacing="15px">
        <Select defaultValue="Select league" onChange={handleChange} size='large'>
          {leagueData?.map((l) => (
            <Option value={l.league.id}>
              <HStack>
                <Image src={l.league.logo} height="20px" />
                <Text as="kbd">{l.league.name}</Text>
              </HStack>
            </Option>
          ))}
        </Select>
      </HStack>
    </>
  );
};

export default Leagues;
