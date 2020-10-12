import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

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
    "& .MuiTextField-root": {
      margin: theme.spacing(1.5, 10),
      width: "40%",
    },
  },
}));

export default function TextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

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
          />
          <TextField
            required
            id="outlined-required"
            label="Phone Number"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Address"
            variant="outlined"
            multiline={true}
            rows={5}
          />
          <TextField
            id="filled-select-currency"
            select
            label="Type"
            value={currency}
            onChange={handleChange}
            helperText="Please select type of business"
            variant="filled"
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
          />
        </Grid>
      </div>
    </form>
  );
}
