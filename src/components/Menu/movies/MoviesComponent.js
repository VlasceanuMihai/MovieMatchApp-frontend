/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Page from "../../../utils/Page";
import MoviesTable from "./MoviesTable";
import Toolbar from "./Toolbar";
import { getMovies } from "../../../apis/Endpoints";
import AuthenticationService from "../../auth/AuthenticationService";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // justifyContent: "center",
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(32),
  },
}));

const MoviesComponent = () => {
  const { setupAxiosInterceptors } = AuthenticationService();
  const [movie, setMovies] = useState(null);
  const [movieError, setMovieError] = useState(null);
  const classes = useStyles();
  // const [movies] = useState(data);

  useEffect(() => {
    setupAxiosInterceptors();
    getMovies()
      .then((response) => {
        console.log(response.data);
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
        setMovieError(error.response);
      });
  }, []);

  return (
    <Page className={classes.root} title="Movies">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          {movieError !== null && <div>{movieError}</div>}
          {movie === null && <div>There is no movie yet...</div>}
          {movie && <MoviesTable movies={movie} />}
        </Box>
      </Container>
    </Page>
  );
};

export default MoviesComponent;
