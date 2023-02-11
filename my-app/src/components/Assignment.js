import React, { useEffect } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  IconButton,
  Divider,
  Chip,
  Switch,
  Container,
  Grid,
} from "@mui/material";
import "./Content.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import useData2 from "./useData2";
import PostTable2 from "./assignments.js";
import Background from "./nycbackgroundwithbunnies.svg";

const Assignments = () => {
  const { data, getData } = useData2();
  useEffect(() => {
    async function onPageLoad() {
      await getData();
    }
    onPageLoad();
  }, []);
  return (
    <div>
      <div className="content-wrapper">
        {data && <PostTable2 data={data} />}
      </div>
    </div>
  );
};
export default Assignments;
