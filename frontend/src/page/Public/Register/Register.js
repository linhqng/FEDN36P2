import React, { useState } from "react";
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

const Register = ({ classes, history }) => {
  const [newUser, setNewUser] = useState({});
  const handleFieldChange = (field, value) => {
    const newState = { ...newUser };
    newState[field] = value;
    setNewUser(newState);
  };
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
              <form className={classes.form}>
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
                    onChange={(event) =>
                      handleFieldChange("name", event.target.value)
                    }
                    value={newUser.name}
                  />
                  <TextField
                    className={classes.textField}
                    label="User name"
                    name="username"
                    variant="outlined"
                    onChange={(event) =>
                      handleFieldChange("username", event.target.value)
                    }
                    value={newUser.username}
                  />
                  <TextField
                    className={classes.textField}
                    label="Email address"
                    name="email"
                    variant="outlined"
                    onChange={(event) =>
                      handleFieldChange("email", event.target.value)
                    }
                    value={newUser.email}
                  />
                  <TextField
                    className={classes.textField}
                    label="Mobile Phone"
                    name="phone"
                    variant="outlined"
                    onChange={(event) =>
                      handleFieldChange("phone", event.target.value)
                    }
                    value={newUser.phone}
                  />
                  <TextField
                    className={classes.textField}
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={(event) =>
                      handleFieldChange("password", event.target.value)
                    }
                    value={newUser.password}
                  />
                  <FileUpload
                    className={classes.upload}
                    file={newUser.image}
                    onUpload={(event) => {
                      const file = event.target.files[0];
                      handleFieldChange("image", file);
                    }}
                  />
                  <div className={classes.policy}>
                    <Checkbox
                      className={classes.policyCheckbox}
                      color="primary"
                      name="policy"
                      checked={newUser.policy}
                      onChange={() =>
                        handleFieldChange("policy", !newUser.policy)
                      }
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

export default withStyles(styles)(Register);
