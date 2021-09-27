import React from "react";
import LeftNavBar from "../Navigation/SideNav/SideNav";
import TopNavBar from "../Navigation/TopNav/TopNav";
import { SectionRight, MainSection } from "../../Styles/styles";

export default function Leaderboard() {
  return (
    <>
      <LeftNavBar />
      <SectionRight className="section-leaderboard">
        <TopNavBar />
        <MainSection>
          <h1>Hello from dashboard</h1>
        </MainSection>
      </SectionRight>
    </>
  );
}
