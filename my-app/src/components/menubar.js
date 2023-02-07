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

  return (
    <nav className="header">
      <div className="nav-wrapper">
        <AppBar color="inherit" style={{ marginBottom: 16 }}>
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
            <Button variant="text" size="small" style={{ marginRight: 16 }}>
              <a href="https://docs.google.com/spreadsheets/d/19k7-uypnHk25MnwEV_-Wq6aTaJlWNSxiUCcepvUzmH4/edit#gid=1527960718">
                <h4>Temporary Jobs</h4>
              </a>
            </Button>
            <Button variant="text" size="small" style={{ marginRight: 16 }}>
              <a href="https://airtable.com/shrZPPLW0wxlm9uvA">
                <h4>Preference Form</h4>
              </a>
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
                  <a href="https://airtable.com/shrDCpzEMr5HKyBYW">Makeup</a>
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  );
}
