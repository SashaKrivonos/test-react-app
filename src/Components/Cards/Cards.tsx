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
            <Container style={{ display: "flex", flexDirection: "row" }}>
              <Container>
                <div
                  style={{
                    marginLeft: "-4rem",
                    width: "26rem",
                    marginTop: "1.4rem",
                    font: "normal normal normal 16px/24px FS Me",
                    color: "#444957",
                    opacity: "1",
                  }}>
                  Est maiores aliquid vel eos iure. Sed iure quis. Omnis ipsa velit ipsam omnis molestiae et cupiditate
                  aut fugiat.
                </div>
                <div>Trial phase</div>
                <div> II </div>
                <div> Disease </div>
                <div> Lung, Non-Small Cell | Lung, Small Cell</div>
              </Container>
              <hr
                style={{
                  color: "#4449574D",
                  backgroundColor: "#4449574D",
                  height: "0.09rem",
                  border: "none",
                }}></hr>
              <Container>
                <div>Owner</div>
                <Container style={{ display: "flex", flexDirection: "row" }}>
                  <AccountCircleIcon />
                  <div>Amber Gordon(You)</div>
                </Container>
                <div> Members </div>
              </Container>
            </Container>
            <hr
              style={{
                color: "#4449574D",
                backgroundColor: "#4449574D",
                height: "0.09rem",
                border: "none",
                marginLeft: "7rem",
                transform: "rotate(-90deg)",
                marginTop: "14.4rem",
              }}></hr>
            <Container>
              <div>
                You have no scenarios. Set up a scenario by using the Create Scenario button. You can create up to five
                scenarios in each Study Project.
              </div>
            </Container>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
