import { AppBar, Toolbar, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./menubar.css";

export default function MenuBar() {
  return (
    <nav className="header">
      <div className="nav-wrapper">
        <AppBar color="inherit">
          <Toolbar>
            <Button variant="text" size="small" style={{ marginRight: 16 }}>
              <a href="">
                <h2>WILG Leaderboard</h2>
              </a>
            </Button>
            <Button variant="text" size="small" style={{ marginRight: 16 }}>
              <a href="">
                <h4>Checkoffs</h4>
              </a>
            </Button>
            <Button variant="text" size="small">
              <a href="">
                <h4>Request Supplies</h4>
              </a>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  );
}
