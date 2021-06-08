import React from "react";
import { Drawer, Button, Box, InputBase } from "@material-ui/core";
import { FormControl, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import SearchIcon from "@material-ui/icons/Search";
import CancelIcon from "@material-ui/icons/Cancel";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import styles from "./styles.module.scss";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  radioGroup: {
    display: "flex",
    flexDirection: "column",
    font: "normal normal normal 14px/16px FS Me",
    color: "#444957",
  },
  button: {
    marginTop: "-11rem",
    marginLeft: "-13rem",
  },
});

const ProjectFilters: React.FC = () => {
  const classes = useStyles();
  type Anchor = "left";

  const [state, setState] = React.useState({
    left: false,
  });

  const [value, setSelectedValue] = React.useState("a");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div className={styles.body}>
      <Box className={styles.mainContainer}>
        <div className={styles.searchLogo}>Search projects</div>
        <div className={styles.searchPanel}>
          <SearchIcon />
          <InputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
        </div>
        <div className={styles.searchExamples}>
          <div className={styles.searchSmallPadding}> Lung, Small Cell</div>
          <CancelIcon className={styles.cancelIconSmall} />
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.searchNonSmallPadding}>Lung, Non-Small Cell</div>
          <CancelIcon className={styles.cancelIconNonSmall} />
        </div>
        <FormControl component="fieldset">
          <FormLabel
            component="legend"
            style={{ paddingTop: "0.5rem", font: "normal normal normal 22px/36px FS Me", color: "#444957" }}>
            Sort
          </FormLabel>
          <RadioGroup
            className={classes.radioGroup}
            aria-label="position"
            name="position"
            defaultValue="top"
            value={value}
            onChange={handleRadioChange}>
            <FormControlLabel
              value="end"
              control={
                <Radio
                  color="primary"
                  onChange={handleRadioChange}
                  value="Updated - newest"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "Updated - newest" }}
                />
              }
              label="Updated - newest"
            />
            <FormControlLabel
              value="end"
              control={
                <Radio
                  color="primary"
                  onChange={handleRadioChange}
                  value="Updated - oldest"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "Updated - oldest" }}
                />
              }
              label="Updated - oldest"
            />
            <FormControlLabel
              value="end"
              control={
                <Radio
                  color="primary"
                  checked={value === "Created - newest"}
                  onChange={handleRadioChange}
                  value="II"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "Created - newest" }}
                />
              }
              label="Created - newest"
            />
            <FormControlLabel
              value="end"
              control={
                <Radio
                  color="primary"
                  onChange={handleRadioChange}
                  value="Created - oldest"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "Created - oldest" }}
                />
              }
              label="Created - oldest"
            />
            <FormControlLabel
              value="end"
              control={
                <Radio
                  color="primary"
                  onChange={handleRadioChange}
                  value="A to Z"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "A to Z" }}
                />
              }
              label=" A to Z"
            />
            <FormControlLabel
              value="end"
              control={
                <Radio
                  color="primary"
                  onChange={handleRadioChange}
                  value="Z to A"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "Z to A" }}
                />
              }
              label="Z to A"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );

  return (
    <div>
      {(["left"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className={classes.button}>
            <ArrowDropDownCircleIcon className={styles.circleIcon} />
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
export default ProjectFilters;
