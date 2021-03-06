/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Page from "../../../utils/Page";
import MoviesTable from "./MoviesTable";
import Toolbar from "./Toolbar";
import { getMoviesApi } from "../../../api/Endpoints";
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
  const [movies, setMovies] = useState(null);
  const [movieError, setMovieError] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    setupAxiosInterceptors();
    getMoviesApi()
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
      <Container maxWidth={false} fixed>
        <Toolbar />
        <Box mt={3}>
          {movieError !== null && <div>{movieError}</div>}
          {movies === null && <div>There is no movie yet...</div>}
          {movies && <MoviesTable movies={movies} />}
        </Box>
      </Container>
    </Page>
  );
};

export default MoviesComponent;
