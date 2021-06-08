import React from "react";
import { Card, CardContent, Button, Typography, Container, Box } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styles from "./styles.module.scss";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  secondTest: {
    font: "normal normal normal 22px/36px FS Me",
    color: "#444957",
    texttransform: "capitalize",
    opacity: "1",
  },
  rectangleMainText: {
    width: "26rem",
    marginTop: "1.4rem",
    font: "normal normal normal 16px/24px FS Me",
    color: "#444957",
    opacity: "1",
  },
  rectangleTrial: {
    marginTop: "0.8rem",
    width: "26rem",
    font: "normal normal normal 16px/24px FS Me",
    color: "#444957",
    opacity: "1",
  },
  owner: {
    width: "26rem",
    font: "normal normal normal 16px/24px FS Me",
    color: "#444957",
    opacity: "1",
  },
  button: {
    backgroundColor: "#D1497C",
    borderRadius: "0",
    textAlign: "center",
    font: "normal normal normal 14px/18px FS Me",
    color: "#FFFFFF",
    opacity: "1",
    width: "17.5rem",
    height: "3rem",
    marginTop: "5rem",
  },
});

const Cards: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={styles.cards}>
        <CardContent>
          <Box className={styles.test}>
            <Container>
              <Typography variant="h5" component="h2" className={classes.secondTest}>
                Study Project name one
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                Updated 8 days ago | Created 04/07/2020
              </Typography>
            </Container>
            <MoreVertIcon />
          </Box>
          <hr className={styles.horizontalLine} />
          <Container>
            <Container>
              <Box className={styles.rectangleMainContainer}>
                <Typography className={classes.rectangleMainText}>
                  Est maiores aliquid vel eos iure. Sed iure quis. Omnis ipsa velit ipsam omnis molestiae et cupiditate
                  aut fugiat.
                </Typography>
                <Typography className={classes.rectangleTrial}>Trial phase</Typography>
                <div> II </div>
                <Typography className={classes.rectangleTrial}>Disease</Typography>
                <div>Lung, Non-Small Cell | Lung, Small Cell</div>
              </Box>
              <hr className={styles.secondHorizontalLine}></hr>
              <Box className={styles.rectangleContainersOwners}>
                <Typography className={classes.owner}>Owner</Typography>
                <Box className={styles.containerOwners}>
                  <AccountCircleIcon />
                  <div className={styles.rectangleOwners}>Amber Gordon(You)</div>
                </Box>
                <div className={styles.rectangleMembers}>Members</div>
              </Box>
            </Container>
            <hr className={styles.rectangleVerticalLine}></hr>
            <Box className={styles.leftContainer}>
              <div className={styles.rectangleBold}>You have no scenarios. </div>
              <div className={styles.rectanglePadding}> Set up a scenario by using the Create Scenario button. </div>
              <div className={styles.rectanglePadding}> You can create up to five scenarios in each Study Project. </div>
              <Button className={classes.button}>
                New Study Projects
              </Button>
            </Box>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
