import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function CopyrightComponent() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000">
        Movie Match
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default CopyrightComponent;
