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
              <Link to="">
                <h4>Checkoffs</h4>
              </Link>
            </Button>
            <Button variant="text" size="small" style={{ marginRight: 16 }}>
              <Link to="/descriptions">
                <h4>Job Descriptions</h4>
              </Link>
            </Button>
            <Button variant="text" size="small">
              <Link to="">
                <h4>Request Supplies</h4>
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  );
}
