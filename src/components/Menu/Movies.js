import React from "react";
import { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useEffect } from "react";
import { getAllTodos, getUserDetails } from "../../api/todosApi.js";
import { Box } from "@material-ui/core";

const TodoScreen = (props) => {
  const [movies, setMovies] = useState(null);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "movieId", headerName: "movieId" },
    { field: "title", headerName: "Title", width: 800 },
    { field: "description", headerName: "Description", width: 200 },
  ];

  useEffect(() => {
    getAllTodos().then((response) => {
      movies(response.data);
    });
  }, []);

  const onCellClick = (cellInfo) => {
    const userId = cellInfo.row.userId;
    getUserDetails(userId)
      .then((userData) => {
        setMovies({
          user: userData.data,
          todo: cellInfo.row,
        });
      })
      .catch(() => {
        console.error("Something went wrong");
      });
  };

  return (
    <Box width="100%" height="100%" display="flex" justifyContent="center">
      {movies === null && <div>There is no todo yet</div>}
      {movies && (
        <Box width="80%">
          <DataGrid onCellClick={onCellClick} rows={movies} columns={columns} />
        </Box>
      )}
    </Box>
  );
};

export default TodoScreen;
