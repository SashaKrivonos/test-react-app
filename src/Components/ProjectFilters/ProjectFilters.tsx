import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import SearchIcon from "@material-ui/icons/Search";
import CancelIcon from "@material-ui/icons/Cancel";

const ProjectFilters: React.FC = () => {
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
    <div style={{ width: "26rem" }}>
      <Container style={{ flexDirection: "column", paddingTop: "7rem" }}>
        <div
          style={{
            color: "#444957",
            font: "normal normal bold 32px/40px FS Me",
            textTransform: "capitalize",
            opacity: "1",
          }}>
          Search projects
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid",
            width: "22.5rem",
            height: "3rem",
            marginTop: "1.063rem",
            alignItems: "center",
          }}>
          <SearchIcon />
          <InputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
        </div>
        <div
          style={{
            width: "8.813rem",
            height: "2.75rem",
            backgroundColor: "#ECEDEE",
            marginTop: "0.2rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}>
          <div style={{ font: "normal normal normal 16px/36px FS Me", color: "#444957", paddingLeft: "0.2rem" }}>
            {" "}
            Lung, Small Cell
          </div>
          <CancelIcon style={{ color: "#444957", paddingLeft: "0.2rem" }} />
        </div>
        <div
          style={{
            width: "12.25rem",
            height: "2.75rem",
            backgroundColor: "#ECEDEE",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}>
          <div style={{ font: "normal normal normal 16px/36px FS Me", color: "#444957", paddingLeft: "0.4rem" }}>
            Lung, Non-Small Cell
          </div>
          <CancelIcon style={{ color: "#444957", paddingLeft: "0.5rem" }} />
        </div>
        <FormControl component="fieldset">
          <FormLabel
            component="legend"
            style={{ paddingTop: "0.5rem", font: "normal normal normal 22px/36px FS Me", color: "#444957" }}>
            Sort
          </FormLabel>
          <RadioGroup
            style={{
              display: "flex",
              flexDirection: "column",
              font: "normal normal normal 14px/16px FS Me",
              color: "#444957",
            }}
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
      </Container>
    </div>
  );

  return (
    <div>
      {(["left"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{ marginTop: "-11rem", marginLeft: "-13rem" }}>
            {anchor}
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
