import React from "react";
import { useDispatch } from "react-redux";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import FileUpload from "../../../components/FileUpload/FileUpload";
import {
  Button,
  Checkbox,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import { withFormik } from "formik";
import * as Yup from "yup";

const Register = ({
  classes,
  history,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isValid,
  dirty,
  handleSubmit,
  setFieldValue,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.bgWrapper} item lg={5}>
          <div className={classes.bg} />
        </Grid>
        <Grid className={classes.content} item lg={7} xs={12}>
          <div className={classes.content}>
            <div className={classes.contentHeader}>
              <IconButton
                className={classes.backButton}
                onClick={() => {
                  history.goBack();
                }}
              >
                <ArrowBackIcon />
              </IconButton>
            </div>
            <div className={classes.contentBody}>
              <form className={classes.form} onSubmit={handleSubmit}>
                <Typography className={classes.title} variant="h2">
                  Create new account
                </Typography>
                <Typography className={classes.subtitle} variant="body1">
                  Use your email to create new account... it's free.
                </Typography>
                <div className={classes.fields}>
                  <TextField
                    className={classes.textField}
                    label="Full name"
                    name="name"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.name}
                    error={errors.name && touched.name ? true : false}
                    helperText={
                      errors.name && touched.name ? errors.name : null
                    }
                    onBlur={handleBlur}
                  />
                  <TextField
                    className={classes.textField}
                    label="User name"
                    name="username"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.username}
                    error={errors.username && touched.username ? true : false}
                    helperText={
                      errors.username && touched.username
                        ? errors.username
                        : null
                    }
                    onBlur={handleBlur}
                  />
                  <TextField
                    className={classes.textField}
                    label="Email address"
                    name="email"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.email}
                    error={errors.email && touched.email ? true : false}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                    onBlur={handleBlur}
                  />
                  <TextField
                    className={classes.textField}
                    label="Mobile Phone"
                    name="phone"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.phone}
                    error={errors.phone && touched.phone ? true : false}
                    helperText={
                      errors.phone && touched.phone ? errors.phone : null
                    }
                    onBlur={handleBlur}
                  />
                  <TextField
                    className={classes.textField}
                    label="Password"
                    type="password"
                    name="password"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.password}
                    error={errors.password && touched.password ? true : false}
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                    onBlur={handleBlur}
                  />
                  <FileUpload
                    className={classes.upload}
                    file={values.image}
                    name="image"
                    onUpload={(event) => {
                      setFieldValue("image", event.target.files[0]);
                    }}
                  />
                  <div className={classes.policy}>
                    <Checkbox
                      className={classes.policyCheckbox}
                      color="primary"
                      name="policy"
                      checked={values.policy}
                      onChange={handleChange}
                      error={errors.policy && touched.policy ? true : false}
                      helperText={
                        errors.policy && touched.policy ? errors.policy : null
                      }
                      onBlur={handleBlur}
                    />
                    <Typography className={classes.policyText} variant="body1">
                      I have read the &nbsp;
                      <Link className={classes.policyUrl} to="#">
                        Terms and Conditions
                      </Link>
                    </Typography>
                  </div>
                </div>

                <Button
                  className={classes.registerButton}
                  color="primary"
                  size="large"
                  variant="contained"
                  disabled={!isValid || !dirty}
                  type="submit"
                >
                  Register now
                </Button>

                <Typography className={classes.login} variant="body1">
                  Have an account?{" "}
                  <Link className={classes.loginUrl} to="/login">
                    Login
                  </Link>
                </Typography>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(
  withFormik({
    mapPropsToValues() {
      return {
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        image: null,
        policy: false,
      };
    },
    validationSchema: Yup.object().shape({
      // Validate form field
      name: Yup.string()
        .required("Name is required")
        .min(5, "Name must have min 5 characters"),
      username: Yup.string()
        .required("Username is required")
        .min(5, "Username must have min 5 characters")
        .max(16, "Username have max 16 characters"),
      email: Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^(0)+([0-9]{9})\b$/, "Phone number is not valid !")
        .required("Phone number is required"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          "Password must have minimum 8 characters, at least one uppercase letter, one lowercase letter and one number"
        )
        .required("Password is required")
        .min(8, "Password have min 8 characters")
        .max(32, "Password have max 32 characters"),
      image: Yup.mixed().required("Avatar is required"),
      policy: Yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
    }),
    handleSubmit: (values) => {
      console.log(values);
    },
  })(Register)
);
