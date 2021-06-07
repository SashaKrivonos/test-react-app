import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./styles.module.css";

const Path: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  
  const [disease, setDisease] = React.useState("");

  const [value, setSelectedValue] = React.useState("a");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value as string});
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDisease(event.target.value as string);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const body = (
    <div
      style={{ backgroundColor: "#FFFFFF", width: "26.5rem", height: "67.5rem", float: "right", paddingBottom: "2rem" }}>
      <Container>
        <CloseIcon className={styles.close} />
        <h2
          style={{
            font: "normal normal bold 32px/40px FS Me",
            color: "#444957",
            textTransform: "capitalize",
            opacity: "1",
          }}>
          New Study Project
        </h2>
        <div> Name* </div>
        <TextField
         value={form.name}
         onChange={changeHandler}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          style={{ width: "22.5rem", height: "3rem" }}
         
        />
        <div style={{ marginTop: "1.5rem" }}> Description* </div>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          multiline
          style={{ width: "22.5rem" }}
          rows={4}
          value={form.description}
         onChange={changeHandler}
        />
        <FormControl component="fieldset">
          <FormLabel component="legend" style={{ paddingTop: "0.5rem" }}>
            *Trial phase
          </FormLabel>
          <RadioGroup
            row
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
                  checked={value === "I"}
                  onChange={handleRadioChange}
                  value="I"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "I" }}
                />
              }
              label="I"
            />
            <FormControlLabel
              value="end"
              control={
                <Radio
                  color="primary"
                  checked={value === "I/II"}
                  onChange={handleRadioChange}
                  value="I/II"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "I/II" }}
                />
              }
              label="I/II"
            />
            <FormControlLabel
              value="end"
              control={
                <Radio
                  color="primary"
                  checked={value === "II"}
                  onChange={handleRadioChange}
                  value="II"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "II" }}
                />
              }
              label="II"
            />
            <FormControlLabel
              value="end"
              control={
                <Radio
                  color="primary"
                  checked={value === "II/III"}
                  onChange={handleRadioChange}
                  value="II/III"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "II/III" }}
                />
              }
              label="II/III"
            />
            <FormControlLabel
              value="end"
              control={
                <Radio
                  color="primary"
                  checked={value === "III"}
                  onChange={handleRadioChange}
                  value="III"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "III" }}
                />
              }
              label="III"
            />
            <FormControlLabel
              value="end"
              control={
                <Radio
                  color="primary"
                  checked={value === "III/IV"}
                  onChange={handleRadioChange}
                  value="III/IV"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "III/IV" }}
                />
              }
              label="III/IV"
            />
            <FormControlLabel
              value="end"
              control={
                <Radio
                  color="primary"
                  checked={value === "IV"}
                  onChange={handleRadioChange}
                  value="IV"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "IV" }}
                />
              }
              label="IV"
            />
          </RadioGroup>
        </FormControl>
        <InputLabel id="demo-simple-select-outlined-label" style={{ marginTop: "1rem" }}>
          Disease
        </InputLabel>
        <FormControl variant="outlined" style={{ width: "22.5rem", height: "3rem" }}>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={disease}
            onChange={handleChange}
            label="Disease">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Container>
          <Button
            style={{
              backgroundColor: "#D1497C",
              borderRadius: "0",
              font: "normal normal normal 14px/18px FS Me",
              color: "#FFFFFF",
              opacity: "1",
              width: "10.5rem",
              height: "3rem",
              marginTop: "2.5rem",
            }}>
            Create Study Project
          </Button>
          <Button
            style={{
              border: "1px solid var(---c7c8cd)",
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              borderWidth: "1px ",
              borderRadius: "1px",
              borderColor: "#C7C8CD",
              borderStyle: "solid",
              height: "3rem",
              marginTop: "2.5rem",
              marginLeft: "1.969rem",
            }}>
            Cancel
          </Button>
        </Container>
      </Container>
    </div>
  );


  return (
    <div>
      <AppBar style={{ marginTop: "5.6rem", backgroundColor: "#FFFFFF", height: "7.2rem", marginRight: "-2.6rem" }}>
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
          <div>
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
              }}
              onClick={handleOpen}>
              New Study Projects
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description">
              {body}
            </Modal>
          </div>
        </Container>
      </AppBar>
    </div>
  );
};

export default Path;
