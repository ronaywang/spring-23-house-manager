import { AppBar, Toolbar, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./menubar.css";
import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <nav className="header">
      <div className="nav-wrapper">
        <AppBar color="inherit">
          <Toolbar>
            <Button variant="text" size="small" style={{ marginRight: 16 }}>
              <Link to="">
                <h2>WILG Leaderboard</h2>
              </Link>
            </Button>

            <Button variant="text" size="small" style={{ marginRight: 16 }}>
              <Link to="/descriptions">
                <h4>Job Descriptions</h4>
              </Link>
            </Button>
            <Button variant="text" size="small">
              <a href="https://docs.google.com/spreadsheets/d/19k7-uypnHk25MnwEV_-Wq6aTaJlWNSxiUCcepvUzmH4/edit#gid=1527960718">
                <h4>Temporary Jobs</h4>
              </a>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  );
}
