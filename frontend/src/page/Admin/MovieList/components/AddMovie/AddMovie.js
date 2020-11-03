import React from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";
import classNames from "classnames";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import styles from './styles'
AddMovie.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  movie: PropTypes.object,
};
function AddMovie(props) {
  const { classes, className } = props;
  const rootClassName = classNames(classes.root, className);
  const subtitle = props.edit ? "Edit Movie" : "Add Movie";
  return (
    <div className={rootClassName}>
      <Typography variant="h4" className={classes.title}>
        {subtitle}
      </Typography>
    </div>
  );
}

export default withStyles(styles)(AddMovie);
