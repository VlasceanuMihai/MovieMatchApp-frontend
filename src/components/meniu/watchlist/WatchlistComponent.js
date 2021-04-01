/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import moment from "moment";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Page from "../../../utils/Page";
import AuthenticationService from "../../auth/AuthenticationService";

const data = [
  {
    id: uuid(),
    name: "Dropbox",
    imageUrl: "/static/images/products/product_1.png",
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Medium Corporation",
    imageUrl: "/static/images/products/product_2.png",
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Slack",
    imageUrl: "/static/images/products/product_3.png",
    updatedAt: moment().subtract(3, "hours"),
  },
  {
    id: uuid(),
    name: "Lyft",
    imageUrl: "/static/images/products/product_4.png",
    updatedAt: moment().subtract(5, "hours"),
  },
  {
    id: uuid(),
    name: "GitHub",
    imageUrl: "/static/images/products/product_5.png",
    updatedAt: moment().subtract(9, "hours"),
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(28),
    paddingRight: theme.spacing(0),
  },
  image: {
    height: 48,
    width: 48,
  },
}));

const WatchlistComponent = ({ className, ...rest }) => {
  const classes = useStyles();
  const { getWatchlist } = AuthenticationService();
  const [products] = useState(data);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getWatchlist()
      .then((response) => {
        console.log(response.data);
        setMovies(response.data);
      })
      
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Page className={classes.root} title="Watchlist">
      <Container maxWidth={false} fixed>
        <Grid container spacing={0}>
          <Grid item lg={12} sm={1} xl={8} xs={12}>
            <Card className={clsx(classes.root, className)} {...rest}>
              <List>
                {movies.map((movie, i) => (
                  <ListItem divider={i < movies.length - 1} key={movie.id}>
                    <ListItemAvatar>
                      <img
                        alt="Movie"
                        className={classes.image}
                        src={movie.imageUrl}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={movie.name}
                      //   secondary={`Updated ${movie.updatedAt.fromNow()}`}
                      secondary={`Updated x ago`}
                    />
                    <IconButton edge="end" size="small">
                      <MoreVertIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <Box display="flex" justifyContent="flex-end" p={2}>
                <Button
                  color="primary"
                  endIcon={<ArrowRightIcon />}
                  size="small"
                  variant="text"
                >
                  View all
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

WatchlistComponent.propTypes = {
  className: PropTypes.string,
};

export default WatchlistComponent;
