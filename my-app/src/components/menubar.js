import Grid from "@mui/material/Grid";
import "./menubar.css";

export default function MenuBar() {
  return (
    <nav className="header">
      <div className="nav-wrapper">
        <Grid>
          <Grid item xs={2}>
            <a className="logo" href="/">
              WILG Leaderboard
            </a>
          </Grid>
          <Grid item xs={2}>
            <div a href="">
              <h4>Checkoffs</h4>
            </div>
          </Grid>
          <Grid item xs={2}>
            <a href=" https://airtable.com/shr86g6yJ6qQsOEoI">
              Request Supplies
            </a>
          </Grid>
        </Grid>
      </div>
    </nav>
  );
}
