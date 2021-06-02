import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Container from "@material-ui/core/Container";

const InformaBar: React.FC = () => { 
  
   return (
    <AppBar style={{ backgroundColor: "#696D79", boxShadow: "none" }}>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6" style={{ color: "#F5F5F6", opacity: "1", font: " normal normal bold 22px/29px FS Me" }}>
          informa
        </Typography>
        <ArrowDropDownIcon style={{ paddingTop: "0.3rem", color: "#F5F5F6" }} />
      </Container>
    </AppBar>
  );
};

export default InformaBar;
