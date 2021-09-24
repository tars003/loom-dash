import React from "react";
import { SubHeadingText } from "../../../Styles/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function TopNav() {
  return (
    <TopNavBar>
      <List>
        <Link>
          <li>
            <SubHeadingText>Setting</SubHeadingText>
          </li>
        </Link>
        <Link>
          <li>
            <SubHeadingText>Help</SubHeadingText>
          </li>
        </Link>
      </List>
    </TopNavBar>
  );
}

const TopNavBar = styled.nav`
  box-shadow: 0px 5px 4px 0px #70707026;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  justify-content: flex-end;
  padding: 0 2rem;
  a {
    width: auto;
    text-decoration: none;
    color: var(--grey);
  }
  li {
    height: 3rem;
    cursor: pointer;
    padding: 0.7rem 0;
    p {
      color: var(--black);
    }
  }
`;
