import { AppBar, Toolbar, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./menubar.css";

export default function MenuBar() {
  return (
    <nav className="header">
      <div className="nav-wrapper">
        <AppBar color="inherit">
          <Toolbar>
            <Button variant="text" size="small">
              <a className="logo" href="/">
                WILG Leaderboard
              </a>
            </Button>
            <Button variant="text" size="small">
              <div a href="">
                <h4>Checkoffs</h4>
              </div>
            </Button>
            <Button variant="text" size="small">
              <a href=" https://airtable.com/shr86g6yJ6qQsOEoI">
                Request Supplies
              </a>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  );
}
