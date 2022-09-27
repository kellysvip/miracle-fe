import React, { useState } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FriendRequests from "../features/friends/FriendRequests";
import useAuth from "../hooks/useAuth";
import { Box, Container, Tab, Tabs } from "@mui/material";
import styled from "styled-components";
import { capitalCase } from "change-case";
import FriendRequestSend from "../features/friends/FriendRequestSend";
const TabsWrapperStyle = styled("div")(({ theme }) => ({
    zIndex: 9,
    bottom: 0,
    width: "100%",
    display: "flex",
    backgroundColor: "#fff",
    justifyContent: "center",
   
  }));

const RequestPage = () => {
  const { user } = useAuth();

  const [currentTab, setCurrentTab] = useState("friend_requests");

  const handleChangeTab = (newValue) => {
    setCurrentTab(newValue);
  };
  const REQUEST_TABS = [
    {
      value: "friend_requests",
      icon: <AccountBoxIcon sx={{ fontSize: 24 }} />,
      component: <FriendRequests profile={user} />,
    },
    {
      value: "requests_send",
      icon: <PeopleAltIcon sx={{ fontSize: 24 }} />,
      component: <FriendRequestSend />,
    },
  ];
  return (
    <Container>
        <TabsWrapperStyle>
          <Tabs
            value={currentTab}
            scrollButtons="auto"
            variant="scrolllable"
            allowScrollButtonsMobile
            onChange={(e, value) => handleChangeTab(value)}
          >
            {REQUEST_TABS.map((tab) => (
              <Tab
                disableRipple
                key={tab.value}
                value={tab.value}
                icon={tab.icon}
                label={capitalCase(tab.value)}
              />
            ))}
          </Tabs>
        </TabsWrapperStyle>
    
      {REQUEST_TABS.map((tab) => {
        const isMatched = tab.value === currentTab;
        return isMatched && <Box key={tab.value}>{tab.component}</Box>;
      })}
    </Container>
  );
};

export default RequestPage;
