import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { utils } from "../../../utils/utils";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

const Results = ({ className, movies, ...rest }) => {
  const classes = useStyles();
  const [selectedMovieIds, setSelectedMovieIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedMoviesIds;

    if (event.target.checked) {
      newSelectedMoviesIds = movies.map((movie) => movie.id);
    } else {
      newSelectedMoviesIds = [];
    }

    setSelectedMovieIds(newSelectedMoviesIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedMovieIds.indexOf(id);
    let newSelectedMoviesIds = [];

    if (selectedIndex === -1) {
      newSelectedMoviesIds = newSelectedMoviesIds.concat(selectedMovieIds, id);
    } else if (selectedIndex === 0) {
      newSelectedMoviesIds = newSelectedMoviesIds.concat(
        selectedMovieIds.slice(1)
      );
    } else if (selectedIndex === selectedMovieIds.length - 1) {
      newSelectedMoviesIds = newSelectedMoviesIds.concat(
        selectedMovieIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedMoviesIds = newSelectedMoviesIds.concat(
        selectedMovieIds.slice(0, selectedIndex),
        selectedMovieIds.slice(selectedIndex + 1)
      );
    }

    setSelectedMovieIds(newSelectedMoviesIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedMovieIds.length === movies.length}
                    color="primary"
                    indeterminate={
                      selectedMovieIds.length > 0 &&
                      selectedMovieIds.length < movies.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Year</TableCell>
                {/* <TableCell>Popularity</TableCell> */}
                <TableCell>Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies.slice(0, limit).map((movie) => (
                <TableRow
                  hover
                  key={movie.id}
                  selected={selectedMovieIds.indexOf(movie.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedMovieIds.indexOf(movie.id) !== -1}
                      onChange={(event) => handleSelectOne(event, movie.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Avatar className={classes.avatar} src={movie.imageUrl}>
                        {utils(movie.name)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {movie.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{movie.description}</TableCell>
                  <TableCell>{movie.year}</TableCell>
                  <TableCell>{movie.rating}</TableCell>
                  {/* <TableCell>
                    {moment(movie.createdAt).format("DD/MM/YYYY")}
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={movies.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25, 50]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  movies: PropTypes.array.isRequired,
};

export default Results;
