import React, { FC, useEffect } from "react";
import { HStack, Image, Tag, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getLeague } from "../../store/actions/leagueAction";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import { getStanding } from "../../store/actions/standingAction";

const { Option } = Select;
const Leagues: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const leagueData = useSelector((state: RootState) => state.league.data);
  useEffect(() => {
    dispatch(getLeague());
  }, []);

  const handleChange = (value: number) => {
    console.log("Selected value", value);
    dispatch(getStanding(value));
    navigate(`/standings=${value}`);
  };
  return (
    <>
      <HStack spacing="15px">
        <Tag variant="solid">Select League</Tag>
        <Select onChange={handleChange} size="large">
          {leagueData?.map((l) => (
            <Option value={l.league.id} key={l.league.id}>
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
