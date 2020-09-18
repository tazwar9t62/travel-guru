import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import * as firebase from "firebase/app";
import { useHistory, useLocation } from "react-router-dom";
import { userContext } from "../../App";
import Header from "../Header/Header";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInForm() {
  const classes = useStyles();
  let [newUser, setNewUser] = useState(false);
  let [user, setUser] = useState({
    isSignedIn: false,
    email: "",
    username: "",
    photo: "",
    password: "",
    error: "",
    success: false,
  });
  const { SignedInUser, hotels } = React.useContext(userContext);
  let [loggesInUser, setLoggedInUser] = SignedInUser;
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  let handleOnChange = (event) => {
    //   console.log(event.target.name, event.target.value);
    let isFieldValid = true;
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      isFieldValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
        event.target.value
      );
    }

    if (isFieldValid) {
      let newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };
  let handleSubmit = (event) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          let newUserInfo = { ...user };
          newUserInfo.success = true;
          newUserInfo.error = "";
          setUser(newUserInfo);
          updateUserName(user.username);
          setLoggedInUser(res.user);
          history.replace(from);
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
          let newUserInfo = { ...user };
          newUserInfo.error = "This Email is already taken!";
          setUser(newUserInfo);
          // ...
        });
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          let newUserInfo = { ...user };
          newUserInfo.success = true;
          newUserInfo.error = "";
          setUser(newUserInfo);
          //   setLoggedInUser(newUserInfo);
          setLoggedInUser(res.user);
          history.replace(from);

          console.log("Signed in user info: ", res.user);
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ...
        });
    }
    event.preventDefault();
  };
  let updateUserName = (username) => {
    let user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: username,
      })
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <>
      <Header></Header>
      <Container
        style={{ border: "1px solid gray", borderRadius: "7px" }}
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          {newUser ? (
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
          ) : (
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
          )}
          <form className={classes.form}>
            <TextField
              onBlur={handleOnChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Enter your Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onBlur={handleOnChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              label="Type your password"
              id="userName"
              autoComplete="current-username"
            />
            {newUser && (
              <>
                <TextField
                  onBlur={handleOnChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="re-password"
                  type="password"
                  label="Confirm your password"
                  id="re-password"
                />
                <TextField
                  onBlur={handleOnChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="username"
                  label="Set Your username"
                  id="username"
                  autoComplete="current-username"
                />
              </>
            )}

            {newUser ? (
              <Button
                onClick={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                style={{
                  backgroundColor: "#F9A51A",
                  color: "black",
                  width: "100%",
                  textDecoration: "none",
                }}
                className={classes.submit}
              >
                Sign Up
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            )}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item color="secondary">
                <input
                  type="checkbox"
                  onChange={() => setNewUser(!newUser)}
                  name="signUp"
                  id="signUp"
                />
                <label htmlFor="signUp">New User?Sign Up! </label>
              </Grid>
            </Grid>
          </form>

          {user.success ? (
            <Typography color="primary" mt={2}>
              {newUser ? "Created" : "Signed In"} Successfully
            </Typography>
          ) : (
            <Typography color="secondary" mt={2}>
              {user.error}
            </Typography>
          )}
        </div>
        <Box mt={8}></Box>
      </Container>
    </>
  );
}
