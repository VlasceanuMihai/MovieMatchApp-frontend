import React from "react";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import Page from "../../utils/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(10),
  },
  image: {
    marginTop: 50,
    display: "inline-block",
    maxWidth: "100%",
    width: 560,
  },
}));

function ErrorComponent() {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="404">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Typography align="center" color="textPrimary" variant="h5">
            404: The page you are looking for isn’t here...
          </Typography>
          <Box textAlign="center">
            <img
              alt="Under development"
              className={classes.image}
              src="/static/404.jpg"
            />
          </Box>
        </Container>
      </Box>
    </Page>
  );
}

export default ErrorComponent;
