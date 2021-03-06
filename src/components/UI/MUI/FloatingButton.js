import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  fabBtnContainer: {
    position: "fixed",
    margin: 0,
    top: "auto",
    bottom: "2rem",
    right: "2rem",
    left: "auto",
    [theme.breakpoints.down("sm")]: {
      bottom: "30px",
      right: "30px"
    }
  }
}));
export default function FloatingButton(props) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <div className={classes.fabBtnContainer}>
      <Fab
        color="secondary"
        aria-label="add"
        className={classes.fab}
        onClick={onClick}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
