import React from "react";
import { AppBar, Typography, Container } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import styles from "./styles.module.scss";

const InformaBar: React.FC = () => {
  return (
    <AppBar style={{ backgroundColor: "#696D79", boxShadow: "none" }}>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6" style={{ color: "#F5F5F6", opacity: "1", font: " normal normal bold 22px/29px FS Me" }}>
          informa
        </Typography>
        <ArrowDropDownIcon className={styles.dropIcon} />
      </Container>
    </AppBar>
  );
};

export default InformaBar;
