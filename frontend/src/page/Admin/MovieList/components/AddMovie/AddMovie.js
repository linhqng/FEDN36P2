import React from "react";
import PropTypes from "prop-types";
import { Button, TextField, Typography, withStyles } from "@material-ui/core";
import classNames from "classnames";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import styles from "./styles";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FileUpload from "../../../../../components/FileUpload/FileUpload";
import { useDispatch } from "react-redux";
import {
  addMovie,
  removeMovie,
  updateMovie,
} from "../../../../../redux/actions/movies";
AddMovie.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  movie: PropTypes.object,
};
function AddMovie(props) {
  const { classes, className, edit } = props;
  const rootClassName = classNames(classes.root, className);
  const subtitle = props.edit ? "Edit Movie" : "Add Movie";
  const submitButton = props.edit ? "Update Movie" : "Add Movie";
  const dispatch = useDispatch();
  const handleInitialValues = () => {
    if (props.edit) {
      return {
        title: edit.title,

        genre: edit.genre,
        language_movie: edit.language_movie,
        duration: edit.duration,
        description: edit.description,
        director: edit.director,
        cast: edit.cast,
        releaseDate: new Date(edit.releaseDate),
        endDate: new Date(edit.endDate),
      };
    } else {
      return {
        title: "",
        image: null,
        genre: "",
        language_movie: "",
        duration: "",
        description: "",
        director: "",
        cast: "",
        releaseDate: new Date(),
        endDate: new Date(),
      };
    }
  };
  return (
    <div className={rootClassName}>
      <Typography variant="h4" className={classes.title}>
        {subtitle}
      </Typography>
      <Formik
        initialValues={handleInitialValues()}
        validationSchema={Yup.object().shape({
          title: Yup.string().required("Title is required !"),
          genre: Yup.string().required("Genre is required !"),
          language_movie: Yup.string().required("language_movie is required !"),
          description: Yup.string().required("Description is required !"),
          director: Yup.string().required("Director is required !"),
          cast: Yup.string().required("Cast is required !"),
          duration: Yup.number()
            .min(50, "Min 50 minutes")
            .required("Duration is required !"),
        })}
        onSubmit={(values) => {
          const { image, ...rest } = values;
          const movie = { ...rest };
          if (!edit) dispatch(addMovie(image, movie));
          else {
            dispatch(updateMovie(edit._id, movie, image));
          }
        }}
      >
        {(props) => {
          return (
            <Form>
              <div className={classes.field}>
                <TextField
                  error={
                    props.errors.title && props.touched.title ? true : false
                  }
                  helperText={
                    props.errors.title && props.touched.title
                      ? props.errors.title
                      : null
                  }
                  className={classes.textField}
                  label="Title"
                  margin="dense"
                  name="title"
                  required
                  value={props.values.title}
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </div>
              <div className={classes.field}>
                <TextField
                  error={
                    props.errors.genre && props.touched.genre ? true : false
                  }
                  helperText={
                    props.errors.genre && props.touched.genre
                      ? props.errors.genre
                      : null
                  }
                  className={classes.textField}
                  label="genre"
                  margin="dense"
                  name="genre"
                  required
                  value={props.values.genre}
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </div>
              <div className={classes.field}>
                <TextField
                  error={
                    props.errors.language_movie && props.touched.language_movie
                      ? true
                      : false
                  }
                  helperText={
                    props.errors.language_movie && props.touched.language_movie
                      ? props.errors.language_movie
                      : null
                  }
                  className={classes.textField}
                  label="language_movie"
                  margin="dense"
                  name="language_movie"
                  required
                  value={props.values.language_movie}
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </div>
              <div className={classes.field}>
                <TextField
                  error={
                    props.errors.description && props.touched.description
                      ? true
                      : false
                  }
                  helperText={
                    props.errors.description && props.touched.description
                      ? props.errors.description
                      : null
                  }
                  className={classes.textField}
                  label="description"
                  margin="dense"
                  name="description"
                  required
                  value={props.values.description}
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </div>
              <div className={classes.field}>
                <TextField
                  error={
                    props.errors.director && props.touched.director
                      ? true
                      : false
                  }
                  helperText={
                    props.errors.director && props.touched.director
                      ? props.errors.director
                      : null
                  }
                  className={classes.textField}
                  label="director"
                  margin="dense"
                  name="director"
                  required
                  value={props.values.director}
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </div>
              <div className={classes.field}>
                <TextField
                  error={props.errors.cast && props.touched.cast ? true : false}
                  helperText={
                    props.errors.cast && props.touched.cast
                      ? props.errors.cast
                      : null
                  }
                  className={classes.textField}
                  label="cast"
                  margin="dense"
                  name="cast"
                  required
                  value={props.values.cast}
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </div>
              <div className={classes.field}>
                <TextField
                  size="medium"
                  error={
                    props.errors.duration && props.touched.duration
                      ? true
                      : false
                  }
                  helperText={
                    props.errors.duration && props.touched.duration
                      ? props.errors.duration
                      : null
                  }
                  type="number"
                  className={classes.textField}
                  label="duration"
                  margin="dense"
                  name="duration"
                  required
                  value={props.values.duration}
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </div>
              <div className={classes.field}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardDatePicker
                    minDate={new Date()}
                    className={classes.textField}
                    inputVariant="outlined"
                    margin="normal"
                    id="release-date"
                    label="Release Date"
                    name="releaseDate"
                    value={props.values.releaseDate}
                    onChange={(date) =>
                      props.setFieldValue("releaseDate", date._d)
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />

                  <KeyboardDatePicker
                    className={classes.textField}
                    minDate={new Date()}
                    inputVariant="outlined"
                    margin="normal"
                    id="end-date"
                    label="End Date"
                    name="endDate"
                    value={props.values.endDate}
                    onChange={(date) => props.setFieldValue("endDate", date._d)}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <div className={classes.field}>
                <FileUpload
                  className={classes.upload}
                  file={props.values.image}
                  onUpload={(event) => {
                    const file = event.target.files[0];
                    props.setFieldValue("image", file);
                  }}
                />
              </div>
              <Button
                className={classes.buttonFooter}
                color="primary"
                variant="contained"
                type="submit"
                onSubmit={props.handleSubmit}
              >
                {submitButton}
              </Button>
              {edit && (
                <Button
                  color="secondary"
                  className={classes.buttonFooter}
                  variant="contained"
                  onClick={() => {
                    dispatch(removeMovie(edit._id));
                  }}
                >
                  Delete Movie
                </Button>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default withStyles(styles)(AddMovie);
