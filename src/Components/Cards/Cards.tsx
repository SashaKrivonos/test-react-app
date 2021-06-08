import React from "react";
import { Card, CardContent, Button, Typography, Container } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styles from "./styles.module.scss";

const Cards: React.FC = () => {
  return (
    <div>
      <Card className={styles.cards}>
        <CardContent>
          <Container style={{ display: "flex", flexDirection: "row", marginTop: "1.5rem" }}>
            <Container>
              <Typography variant="h5" component="h2">
                Study Project name one
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                Updated 8 days ago | Created 04/07/2020
              </Typography>
            </Container>
            <MoreVertIcon />
          </Container>
          <hr className={styles.horizontalLine} />
          <Container>
            <Container>
              <Container
                style={{
                  marginLeft: "-4rem",
                  font: "normal normal normal 16px/24px FS Me",
                  color: "#444957",
                  opacity: "1",
                }}>
                <div className={styles.rectangleMainText}>
                  Est maiores aliquid vel eos iure. Sed iure quis. Omnis ipsa velit ipsam omnis molestiae et cupiditate
                  aut fugiat.
                </div>
                <div className={styles.rectangleTrial}>Trial phase</div>
                <div> II </div>
                <div className={styles.rectangleDisease}>Disease</div>
                <div>Lung, Non-Small Cell | Lung, Small Cell</div>
              </Container>
              <hr
                style={{
                  color: "#4449574D",
                  backgroundColor: "#4449574D",
                  height: "0.09rem",
                  border: "none",
                  width: "25.5rem",
                  marginTop: "1.5rem",
                  marginLeft: "-3rem",
                }}></hr>
              <Container
                style={{
                  marginLeft: "-4rem",
                  font: "normal normal normal 16px/24px FS Me",
                  color: "#444957",
                  opacity: "1",
                }}>
                <div>Owner</div>
                <Container style={{ display: "flex", flexDirection: "row", marginLeft: "-1.5rem" }}>
                  <AccountCircleIcon />
                  <div className={styles.rectangleOwners}>Amber Gordon(You)</div>
                </Container>
                <div className={styles.rectangleMembers}>Members</div>
              </Container>
            </Container>
            <hr className={styles.rectangleVerticalLine}></hr>
            <Container
              style={{
                marginLeft: "25rem",
                marginTop: "-12.6rem",
                width: "17.5rem",
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                color: "#444957",
                opacity: "1",
                font: "normal normal normal 16px/24px FS Me",
              }}>
              <div className={styles.rectangleBold}>You have no scenarios. </div>
              <div className={styles.rectanglePadding}> Set up a scenario by using the Create Scenario button. </div>
              <div className={styles.rectanglePadding}> You can create up to five scenarios in each Study Project. </div>
              <Button
                style={{
                  backgroundColor: "#D1497C",
                  borderRadius: "0",
                  textAlign: "center",
                  font: "normal normal normal 14px/18px FS Me",
                  color: "#FFFFFF",
                  opacity: "1",
                  width: "17.5rem",
                  height: "3rem",
                  marginTop: "5rem",
                }}>
                New Study Projects
              </Button>
            </Container>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
