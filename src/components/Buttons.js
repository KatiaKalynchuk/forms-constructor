import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab/Fab";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  ActionButton: {
    margin: theme.spacing(1),
    position: 'fixed',
    bottom: '20px',
    right: '20px',
  },
}));

export const ActionButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Fab color="primary" aria-label="add" className={classes.ActionButton} onClick={onClick}>
      <AddIcon />
    </Fab>
  );
}