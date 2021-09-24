import React from "react";
import { Link } from "react-router-dom";
import LeftNavBar from "./Components/Navigation/SideNav/SideNav";
import { SectionRight } from "./Styles/styles";

export default function Error() {
  return (
    <>
      <LeftNavBar />
      <SectionRight>
        <h1>
          404 Page not Found <Link to="/"> Go To Home</Link>{" "}
        </h1>
      </SectionRight>
    </>
  );
}
