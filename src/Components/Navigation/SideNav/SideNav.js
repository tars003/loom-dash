import React from "react";
import { HeadingText, SubHeadingText } from "../../../Styles/styles";
import { navItems } from "./data";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SideNav() {
  return (
    <SideNavbar>
      <HeadingText>Loom Automation</HeadingText>
      <section>
        <List>
          {navItems.map((navLink, index) => {
            const url = window.location.pathname;
            const isActive = url === navLink.link;
            const className = isActive ? "activeNavLink" : null;
            return (
              <Link to={navLink.link} key={`sidenav-${index}`}>
                <li className={className}>
                  <div>
                    <img src={navLink.imageLight} alt="nav-icon" />
                  </div>
                  <SubHeadingText>{navLink.name}</SubHeadingText>
                </li>
              </Link>
            );
          })}
        </List>
      </section>
    </SideNavbar>
  );
}

const SideNavbar = styled.nav`
  width: 20vw;
  min-height: 100%;
  box-shadow: 4px 0px 10px 0px #70707033;
  padding: 2rem 1rem;
`;
const List = styled.ul`
  disc-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
  a {
    width: 100%;
    text-decoration: none;
    color: var(--grey);
  }
  li {
    display: flex;
    width: 100%;
    height: 2rem;
    cursor: pointer;
    align-items: center;
    padding: 1.5rem 0;
    div {
      width: 30%;
      text-align: center;
      img {
        width: 30%;
        object-fit: cover;
        align-self: center;
      }
    }
    p {
      width: 70%;
      align-self: center;
    }
  }
`;
