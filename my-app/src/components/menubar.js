import * as React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./menubar.css";
import { Link } from "react-router-dom";

export default function MenuBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

  var weekNumber = Math.ceil(days / 7);

  return (
    <nav className="header">
      <div className="nav-wrapper">
        <AppBar color="inherit" style={{ marginBottom: 16 }}>
          <Toolbar>
            <Button variant="text" size="small" style={{ marginRight: 16 }}>
              <Link to="">
                <h2>Leaderboard</h2>
              </Link>
            </Button>
            <Button variant="text" size="small" style={{ marginRight: 16 }}>
              <a href="/assignments">
                <h4>Assignments</h4>
              </a>
            </Button>

            <Button variant="text" size="small" style={{ marginRight: 16 }}>
              <Link to="/descriptions">
                <h4>Descriptions</h4>
              </Link>
            </Button>

            <div>
              <Button
                variant="text"
                size="small"
                style={{ marginRight: 16 }}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <h4>Checkoffs</h4>
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <a href="https://airtable.com/shr5s7HXraqZt8pj3">Kitchen</a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a href="https://airtable.com/shrzKhkThkd2zO9NF">House</a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a href="https://airtable.com/shrFlmTxn5dHMFnDx">Bathroom</a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a href="https://airtable.com/shrDCpzEMr5HKyBYW">Makeup</a>
                </MenuItem>
              </Menu>
            </div>
            <span style={{ marginLeft: 64 }}>
              <h5>Currently: Week {weekNumber - 5} of 14</h5>
            </span>
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  );
}
