import React, { useContext, useState } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { Modal, TextField, MenuItem, FormControl, FormControlLabel } from "@material-ui/core";
import { Select, InputLabel, Radio, RadioGroup, FormLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./styles.module.scss";
import { Context } from "../../Context/Context";

const useStyles = makeStyles({
  description: {
    marginTop: "1.5rem",
  },
  textfield: {
    width: "22.5rem",
    height: "3rem",
  },
  textfieldDescription: {
    width: "22.5rem",
  },
  formLabel: {
    paddingTop: "0.5rem",
  },
  inputLabel: {
    marginTop: "1rem",
  },
  createProject: {
    backgroundColor: "#D1497C",
    borderRadius: "0",
    font: "normal normal normal 14px/18px FS Me",
    color: "#FFFFFF",
    opacity: "1",
    width: "10.5rem",
    height: "3rem",
    marginTop: "2.5rem",
  },
  cancel: {
    border: "1px solid var(---c7c8cd)",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    borderWidth: "1px ",
    borderRadius: "1px",
    borderColor: "#C7C8CD",
    borderStyle: "solid",
    height: "3rem",
    marginTop: "2.5rem",
    marginLeft: "1.969rem",
  },
  appBar: {
    marginTop: "5.6rem",
    backgroundColor: "#FFFFFF",
    height: "7.2rem",
    marginRight: "-2.6rem",
  },
  pathStudy: {
    color: "#444957",
    font: "normal normal bold 32px/40px FS Me",
    textTransform: "capitalize",
    opacity: "1",
  },
  numberOfProjects: {
    font: "normal normal normal 22px/36px FS Me",
    color: "#444957",
    textTransform: "capitalize",
    opacity: "1",
  },
  newStudyProject: {
    backgroundColor: "#D1497C",
    borderRadius: "0",
    textAlign: "center",
    font: "normal normal normal 14px/18px FS Me",
    color: "#FFFFFF",
    opacity: "1",
    width: "10.5rem",
    height: "3rem",
    marginTop: "2.5rem",
    marginLeft: "-16rem",
  },
});

const ModalWindow: React.FC = () => {
  const classes = useStyles();

  let project = {
    name: "test",
    disease: "test",
    description: "test",
    phase: "test",
  };
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const [disease, setDisease] = React.useState("");

  const [value, setSelectedValue] = React.useState("a");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value as string });
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDisease(event.target.value as string);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<{}>) => {
    event.preventDefault();

    if (form.name.trim() && form.description.trim()) {
      project = {
        name: form.name,
        description: form.description,
        phase: value,
        disease: disease,
      };
    }

    debugger;
  };
  return (
    <Context.Provider value={{ project }}>
      <div className={styles.body}>
        <form onSubmit={handleSubmit}>
          <Container>
            <CloseIcon className={styles.close} />
            <h2 className={styles.textLogo}>New Study Project</h2>
            <Typography> Name* </Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              className={classes.textfield}
              type="text"
              name="name"
              onChange={changeHandler}
            />
            <Typography className={classes.description}> Description* </Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              multiline
              className={classes.textfieldDescription}
              rows={4}
              onChange={changeHandler}
              type="text"
              name="description"
            />
            <FormControl component="fieldset">
              <FormLabel component="legend" className={classes.formLabel}>
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
            <InputLabel id="demo-simple-select-outlined-label" className={classes.inputLabel}>
              Disease
            </InputLabel>
            <FormControl variant="outlined" className={styles.FormControl}>
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
              <Button className={classes.createProject} type="submit">
                Create Study Project
              </Button>
              <Button className={classes.cancel}>Cancel</Button>
            </Container>
          </Container>
        </form>
      </div>
    </Context.Provider>
  );
};

export default ModalWindow;
