import React from "react";
import styled from "styled-components";
import { SubHeadingText } from "../../Styles/styles";
import { data } from "./Data";

export default function Table() {
  return (
    <NotificationContainer>
      {data.map((notification, index) => {
        let color;
        if (notification.alertType === "supervisor") {
          color = "--supervisor-alert";
        } else if (notification.alertType === "machine") {
          color = "--machine-alert";
        } else {
          color = "--weaver-alert";
        }
        if (notification.alertStatus === "success") {
          color = "--green";
        }
        return (
          <NotificationCard>
            <ColoredDiv color={color}></ColoredDiv>
            <div className="data-div">
              <p>{notification.alertType} Alert</p>
              <SubHeadingText>{notification.message}</SubHeadingText>
            </div>
            <TimeDiv>
              <SubHeadingText>{notification.time}</SubHeadingText>
            </TimeDiv>
          </NotificationCard>
        );
      })}
    </NotificationContainer>
  );
}

const NotificationContainer = styled.section`
  background: #e5e5e5;
  padding: 2rem;
  margin: 2rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NotificationCard = styled.div`
  background: #ffffff;
  height: 5rem;
  border-radius: 0.5rem;
  display: flex;

  > div {
    height: 100%;
  }

  .data-div {
    width: 88%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    padding: 0 1rem;
    p:first-child {
      text-transform: capitalize;
      color: #595959;
      font-size: 0.9rem;
    }
    p:nth-child(2) {
      font-weight: 600;
    }
  }
`;

const ColoredDiv = styled.div`
  width: 2%;
  height: 100%;
  background: var(${(props) => props.color});
  border-radius: 0.5rem 0 0 0.5rem;
`;

const TimeDiv = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  p {
    color: #595959;
    font-size: 0.9rem;
  }
`;
