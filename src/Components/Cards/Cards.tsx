import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Cards: React.FC = () => {
  return (
    <div>
      <Card style={{ marginTop: "16.25rem", width: "49rem", height: "32rem", marginLeft: "2.563rem" }}>
        <CardContent>
          <Container
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1.5rem",
            }}>
            <Container style={{}}>
              <Typography
                variant="h5"
                component="h2"
                style={{
                  font: "normal normal normal 22px/36px FS Me",
                  color: "#444957",
                  textTransform: "capitalize",
                  opacity: "1",
                }}>
                Study Project name one
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                Updated 8 days ago | Created 04/07/2020
              </Typography>
            </Container>
            <MoreVertIcon />
          </Container>
          <hr
            style={{
              color: "#4449574D",
              backgroundColor: "#4449574D",
              height: "0.09rem",
              border: "none",
              width: "49rem",
              marginLeft: "-1.1rem",
              marginTop: "3rem",
            }}
          />
          <Container>
            <Container>
              <Container style={{ marginLeft: "-4rem" }}>
                <div
                  style={{
                    width: "26rem",
                    marginTop: "1.4rem",
                    font: "normal normal normal 16px/24px FS Me",
                    color: "#444957",
                    opacity: "1",
                  }}>
                  Est maiores aliquid vel eos iure. Sed iure quis. Omnis ipsa velit ipsam omnis molestiae et cupiditate
                  aut fugiat.
                </div>
                <div
                  style={{
                    font: "normal normal normal 16px/24px FS Me",
                    color: "#444957",
                    opacity: "1",
                    marginTop: "0.8rem",
                  }}>
                  Trial phase
                </div>
                <div style={{ font: "normal normal normal 16px/24px FS Me", color: "#444957", opacity: "1" }}> II </div>
                <div
                  style={{
                    font: "normal normal normal 16px/24px FS Me",
                    color: "#444957",
                    opacity: "1",
                    marginTop: "0.8rem",
                  }}>
                  Disease
                </div>
                <div style={{ font: "normal normal normal 16px/24px FS Me", color: "#444957", opacity: "1" }}>
                  Lung, Non-Small Cell | Lung, Small Cell
                </div>
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
              <Container style={{ marginLeft: "-4rem" }}>
                <div style={{ font: "normal normal normal 16px/24px FS Me", color: "#444957", opacity: "1" }}>Owner</div>
                <Container style={{ display: "flex", flexDirection: "row" }}>
                  <AccountCircleIcon style={{ marginLeft: "-1.6rem" }} />
                  <div
                    style={{
                      font: "normal normal normal 16px/24px FS Me",
                      color: "#444957",
                      opacity: "1",
                      paddingLeft: "0.6rem",
                    }}>
                    Amber Gordon(You)
                  </div>
                </Container>
                <div
                  style={{
                    font: "normal normal normal 16px/24px FS Me",
                    color: "#444957",
                    opacity: "1",
                    marginTop: "0.6rem",
                  }}>
                  Members
                </div>
              </Container>
            </Container>
            <hr
              style={{
                color: "#4449574D",
                backgroundColor: "#4449574D",
                height: "0.09rem",
                border: "none",
                transform: "rotate(-90deg)",
                width: "27rem",
                marginTop: "-5.8rem",
                marginRight: "5rem",
              }}></hr>
            <Container
              style={{
                marginLeft: "25rem",
                marginTop: "-12.6rem",
                width: "17.5rem",
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
              }}>
              <div style={{ font: "normal normal bold 16px/24px FS Me", color: "#444957" }}>You have no scenarios. </div>
              <div
                style={{
                  font: "normal normal normal 16px/24px FS Me",
                  color: "#444957",
                  opacity: "1",
                  paddingTop: "2rem",
                }}>
                {" "}
                Set up a scenario by using the Create Scenario button.{" "}
              </div>
              <div
                style={{
                  font: "normal normal normal 16px/24px FS Me",
                  color: "#444957",
                  opacity: "1",
                  paddingTop: "2rem",
                }}>
                {" "}
                You can create up to five scenarios in each Study Project.{" "}
              </div>
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
