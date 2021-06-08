import React from "react";
import { AppBar, Container, Button, Badge } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import HistoryIcon from "@material-ui/icons/History";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FolderIcon from "@material-ui/icons/Folder";
import RemoveIcon from "@material-ui/icons/Remove";
import logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";
import "./styles.overrides.scss";

const TopNavBar: React.FC = () => {
  return (
    <div>
      <AppBar style={{ marginTop: "1.82rem", backgroundColor: "#444957", boxShadow: "none" }}>
        <div className={styles.appContainer}>
          <Container>
            <img src={logo} alt="logo"></img>
          </Container>
          <FolderIcon style={{ paddingLeft: "1rem", color: "#C7C8CD" }} />
          <RemoveIcon style={{ transform: "rotate(90deg)", color: "#C7C8CD" }} />
          <Badge badgeContent={2} color="secondary">
            <NotificationsIcon style={{ color: "#C7C8CD" }} />
          </Badge>
          <HistoryIcon style={{ paddingRight: "0.5rem", paddingLeft: "0.5rem", color: "#C7C8CD" }} />
          <HelpOutlineIcon style={{ paddingRight: "0.5rem", color: "#C7C8CD" }} />
          <AccountCircleIcon style={{ paddingRight: "0.5rem", color: "#C7C8CD" }} />
          <Button
            style={{
              backgroundColor: "#D1497C",
              borderRadius: "0",
              textAlign: "center",
              font: "normal normal normal 14px/18px FS Me",
              color: "#FFFFFF",
              opacity: "1",
              width: "8.063rem",
              height: "2.25rem",
            }}>
            Ask the Analyst
          </Button>
        </div>
      </AppBar>
    </div>
  );
};

export default TopNavBar;
