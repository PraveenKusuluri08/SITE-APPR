import React from "react";
import clsx from "clsx";
import {
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Avatar,
  Menu,
  Tooltip,
} from "@material-ui/core";

import { connect } from "react-redux";
import { onSignout } from "../../Authentication/middleware";
import modules from "../../../modules";
import { Routes, Route, BrowserRouter, Navigate, useNavigate } from "react-router-dom";
import routes from "../../../routes";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import useStyles from "../styles/navBar";
import { Link } from "react-router-dom";
function Presentation(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openIcon = Boolean(anchorEl);


  const navigate = useNavigate()
 if(!props.auth.uid){
    return navigate("/login");
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <img
            className={classes.image}
            src="https://res.cloudinary.com/sasi/image/upload/v1649501933/lokesh/Screenshot_2022-04-09_162104_tib5wx.png"
            alt=""
            height="60"
          />
          <div className={classes.align}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar alt="Remy Sharp" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              keepMounted
              transformOrigin={{
                vertical: "center",
                horizontal: "right",
              }}
              open={openIcon}
              onClose={handleClose}
            >
              <Link
                to={`/profile`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
              <MenuItem onClick={props.onSignout}>Sign out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {modules
          .filter(
            (ele) =>
              (props.accessModules.includes(ele.moduleName) ||
               props.accessModules.includes("console-customization") 
            )
          )
          .map((item) => {
            return (
              <Link onClick={handleDrawerClose} to={item.link} key={item.text}>
                <ListItem className={classes.menuItem}>
                  <Tooltip
                    arrow
                    title={
                      <h4 style={{ size: "7px", marginBottom: "2px" }}>
                        {item.text}
                      </h4>
                    }
                    placement="right-end"
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                  </Tooltip>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            );
          })}
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <br />
        <Routes>
          {routes.map(({ path, component, moduleName }) => {
            if (
              props.accessModules.includes(moduleName) ||
              props.accessModules.includes("console-customization")
            )
              return <Route key={path} path={path} element={component} />;
          })}
        </Routes>
      </main>
    </div>
  );
}

export default Presentation;
