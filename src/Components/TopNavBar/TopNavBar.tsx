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
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appBar: {
    marginTop: "1.82rem",
    backgroundColor: "#444957",
    boxShadow: "none",
  },
  button: {
    backgroundColor: "#D1497C",
    borderRadius: "0",
    textAlign: "center",
    font: "normal normal normal 14px/18px FS Me",
    color: "#FFFFFF",
    opacity: "1",
    width: "8.463rem",
    height: "2.25rem",
  },
});

const TopNavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appBar}>
        <div className={styles.appContainer}>
          <Container>
            <img src={logo} alt="logo"></img>
          </Container>
          <FolderIcon className={styles.folderIcon} />
          <RemoveIcon className={styles.removeIcon} />
          <Badge badgeContent={2} color="secondary">
            <NotificationsIcon className={styles.notificationsIcon} />
          </Badge>
          <HistoryIcon className={styles.historyIcon} />
          <HelpOutlineIcon className={styles.helpOutlineIcon} />
          <AccountCircleIcon className={styles.accountIcon} />
          <Button className={classes.button}>Ask the Analyst</Button>
        </div>
      </AppBar>
    </div>
  );
};

export default TopNavBar;
