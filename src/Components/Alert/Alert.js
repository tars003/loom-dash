import React from "react";
import LeftNavBar from "../Navigation/SideNav/SideNav";
import TopNavBar from "../Navigation/TopNav/TopNav";
import Table from "./Table";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  SectionRight,
  MainSection,
  HeadingText,
  SubHeadingText,
  Red,
} from "../../Styles/styles";
import styled from "styled-components";

export default function Alert() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <LeftNavBar />
      <SectionRight className="section-alert">
        <TopNavBar />
        <MainSection>
          <HeadingText align="left">Alerts</HeadingText>
          <HeadingDiv>
            <SubHeadingText>Shift No. 3</SubHeadingText>
            <div>
              <SubHeadingText>
                Total Shift Alerts:&nbsp;<Red>50</Red>
              </SubHeadingText>
              <Box sx={{ width: "20rem", display: "flex", gap: "2rem" }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Select Shift
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="select shift"
                    onChange={handleChange}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Select Alert
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="select alert"
                    onChange={handleChange}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </HeadingDiv>
        </MainSection>
        <Table />
      </SectionRight>
    </>
  );
}

const HeadingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  margin-top: 2rem;
  p {
    display: inline-block;
    align-self: center;
  }
  div {
    display: flex;
    gap: 1rem;
    align-content: center;
  }
`;
