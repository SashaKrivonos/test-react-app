import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";


function Path() {
  return (
    <div>
      <Container style={{ display: "flex", flexDirection: "row"}}>
        <div style= {{ BorderRadius: "50%", backgroundColor: "#63428C", width: "1.5rem", height: "1.5rem",  marginTop: "5rem"}}> ghb </div>
        <AppBar style={{ marginTop: "5.4rem", backgroundColor: "#FFFFFF",  height: "7.2rem"}}>
          <Container style={{ display: "flex", justifyContent: "space-between" }}>
            <Container style={{ flexDirection: "column", paddingTop: "1.563rem" }}>
              <div
                style={{
                  color: "#444957",
                  font: "normal normal bold 32px/40px FS Me",
                  textTransform: "capitalize",
                  opacity: "1",
                }}>
                Study Projects
              </div>
              <Typography
                style={{
                  font: "normal normal normal 22px/36px FS Me",
                  color: "#444957",
                  textTransform: "capitalize",
                  opacity: "1",
                }}>
                3 Projects
              </Typography>
            </Container>

            <Button
              style={{
                backgroundColor: "#D1497C",
                borderRadius: "0",
                textAlign: "center",
                font: "normal normal normal 14px/18px FS Me",
                color: "#FFFFFF",
                opacity: "1",
                width: "10.5rem",
                height: "3rem",
                marginTop: "2.5rem",
              }}>
              New Study Projects
            </Button>
          </Container>
        </AppBar>
      </Container>
    </div>
  );
}

export default Path;
