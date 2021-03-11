import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Page from "../../../utils/Page";
import UpdatePasswordComponent from "./UpdatePasswordComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
}));

const SettingsComponent = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Settings">
      <Container maxWidth="lg">
        <Box mt={3}>
          <UpdatePasswordComponent />
        </Box>
      </Container>
    </Page>
  );
};

export default SettingsComponent;
