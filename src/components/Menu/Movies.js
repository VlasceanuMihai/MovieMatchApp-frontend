/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { getMovies } from "../../apis/Endpoints";
import AuthenticationService from "../auth/AuthenticationService";
import { DataGrid } from "@material-ui/data-grid";
import { Box } from "@material-ui/core";

const Movies = (props) => {
  const { setupAxiosInterceptors } = AuthenticationService();
  const [movie, setMovies] = useState(null);
  const [movieError, setMovieError] = useState(null);

  const moviesColumns = [
    { field: "id", headerName: "Id" },
    { field: "name", headerName: "Title", width: 400 },
    { field: "description", headerName: "Description", width: 200 },
  ];

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
    <div style={{ height: 800, width: "100%" }}>
      <Box width="100%" height="100%" display="flex" justifyContent="center">
        {movieError !== null && <div>{movieError}</div>}
        {movie === null && <div>There is no movie yet...</div>}
        {movie && (
          <Box width="95%" height="90%">
            <DataGrid rows={movie} columns={moviesColumns} />
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Movies;
