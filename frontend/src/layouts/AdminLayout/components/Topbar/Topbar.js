import { Badge, IconButton, Toolbar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import InputIcon from "@material-ui/icons/Input";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import styles from "./styles";
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';

import { NavLink } from "react-router-dom";
Topbar.propTypes = {};

function Topbar(props) {
  const {
    classes,
    ToolbarClasses,
    children,
    isSidebarOpen,
    onToggleSidebar,
  } = props;
  return (
    <div className={`${classes.root} , ${ToolbarClasses}`}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.brandWrapper}>
          <div className={classes.logo}>Cinema +</div>
          <IconButton
            className={classes.menuButton}
            aria-label="Menu"
            onClick={onToggleSidebar}
          >
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>

        <NavLink className={classes.title} to="/">
          Cinema App
        </NavLink>

        <IconButton
          className={classes.notificationsButton}
          onClick={() => console.log("Notification")}
        >
          <Badge badgeContent={4} color="primary" variant="dot">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton className={classes.signOutButton}>
          <InputIcon />
        </IconButton>
      </Toolbar>
      {children}
    </div>
  );
}

export default withStyles(styles)(Topbar);
