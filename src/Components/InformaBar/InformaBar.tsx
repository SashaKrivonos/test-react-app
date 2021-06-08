import React from "react";
import { AppBar, Typography, Box } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import styles from "./styles.module.scss";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#696D79",
    boxShadow: "none",
  },
  logo: {
    color: "#F5F5F6",
    opacity: "1",
    font: " normal normal bold 22px/29px FS Me",
  },
});

const InformaBar: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Box className={styles.container}>
        <Typography variant="h6" className={classes.logo}>
          informa
        </Typography>
        <ArrowDropDownIcon className={styles.dropIcon} />
      </Box>
    </AppBar>
  );
};

export default InformaBar;
