import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

export default function StyledModal(props) {
  return (
    <>
      <StyledDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <StyledDialogTitle
          id="customized-dialog-title"
          onClose={props.handleClose}
        >
          Modal title
        </StyledDialogTitle>
        <StyledModalContent divider style={{ minWidth: 500 }}>
          {props.children}
        </StyledModalContent>
        <StyledDialogActions>
          <Button autoFocus onClick={props.handleClose} color="primary">
            Close
          </Button>
          {props.onSubmit && (
            <Button
              variant="contained"
              onClick={props.onSubmit}
              color="primary"
              disabled={props.disabled || props.isLoading}
            >
              {props.isLoading ? <CircularProgress size={20} /> : "Submit"}
            </Button>
          )}
        </StyledDialogActions>
      </StyledDialog>
    </>
  );
}

const StyledModalContent = styled(DialogContent)`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
`;

const StyledDialogTitle = styled(DialogTitle)`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
`;
const StyledDialogActions = styled(DialogActions)`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
`;

const StyledDialog = styled(Dialog)`
  & .MuiDialog-paper {
    background-color: ${props => props.theme.applicationBackground};
    color: ${props => props.theme.color};
  }
`;
