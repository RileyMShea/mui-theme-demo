import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.status.danger,
    "&$checked": {
      // color: theme.status.danger,
      opacity: "100%",
    },
  },
  checked: {},
  h1: {
    fontFamily: "Muli",
    textShadow: "2px 2px black",
    fontWeight: 600,
    fontStyle: "bold",
  },
  reg: {
    flexGrow: 1,
    height:'100vh',
    backgroundColor: "orange",
  },
}));

function CustomCheckbox({ classes }) {
  return (
    <Container className={classes.reg} maxWidth="md">
      <Card>
        <CardContent>
          <Typography
            variant={"h1"}
            color={"primary"}
            classes={{
              h1: classes.h1,
            }}>
            H1 primary here
          </Typography>
        </CardContent>
      </Card>
      <Typography variant={"h2"} color={"secondary"}>
        H2 secondary here
      </Typography>
      <Typography variant={"button"} color={"secondary"}>
        H2 secondary here
      </Typography>
      <Typography variant={"body2"} color={"secondary"}>
        H2 secondary here
      </Typography>
      <Button color={"primary"} variant={"contained"}>
        contained
      </Button>
      <Button color={"secondary"} variant={"contained"}>
        contained
      </Button>
      <Button variant={"outlined"}>outlined</Button>
      <Button variant={"text"}>text</Button>
      <Checkbox
        defaultChecked
        classes={{
          root: classes.root,
          checked: classes.checked,
        }}
      />
    </Container>
  );
}

export default function CustomStyles() {
  const classes = useStyles();
  return <CustomCheckbox classes={classes} />;
}
