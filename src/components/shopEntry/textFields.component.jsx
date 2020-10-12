import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
// import { SettingsPhoneTwoTone } from "@material-ui/icons";

const currencies = [
  {
    value: "Bakery",
    label: "Bakery",
  },
  {
    value: "Clothing",
    label: "Clothing",
  },
  {
    value: "Commondities",
    label: "Commondities",
  },
  {
    value: "Servicing",
    label: "Servicing",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px auto",
    "& .MuiTextField-root": {
      margin: theme.spacing(1.5, 10),
      width: "40%",
      justifyContent: "center",
      alignitems: "center",
    },
  },
  button: {
    margin: "0 auto ",
    display: "block",
  },
}));

export default function TextFields() {
  const classes = useStyles();
  // const [currency, setCurrency] = React.useState("EUR");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  //   setType(event.target.value)
  // };

  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/pricing"), [history]);

  function handleSubmit() {
    if (
      name === "" ||
      phone === "" ||
      address === "" ||
      type === "" ||
      desc === ""
    ) {
      alert("All fields are mandatory");
    } else {
      handleOnClick();
    }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent}
        >
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Create your own shop
          </Typography>
        </Container>
        <Grid container justify="center">
          <TextField
            required
            id="outlined-required"
            label="Name of the shop"
            variant="outlined"
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Phone Number"
            variant="outlined"
            onChange={(event) => setPhone(event.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Address"
            variant="outlined"
            multiline={true}
            rows={5}
            onChange={(event) => setAddress(event.target.value)}
          />
          <TextField
            id="filled-select-currency"
            select
            label="Type"
            // value={currency}
            // onChange={handleChange}
            helperText="Please select type of business"
            variant="filled"
            onChange={(event) => setType(event.target.value)}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            id="outlined-required"
            label="Short desctiption about your business"
            variant="outlined"
            multiline={true}
            rows={3}
            onChange={(event) => setDesc(event.target.value)}
          />
        </Grid>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          align="center"
        >
          Continue
        </Button>
      </div>
    </form>
  );
}
