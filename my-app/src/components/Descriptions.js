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
import SimpleAccordian from "./Accordian";
import Background from "./nycbackgroundwithbunnies.svg";

const Descriptions = () => {
  const { data, getData } = useData2();
  useEffect(() => {
    async function onPageLoad() {
      await getData();
    }
    onPageLoad();
  }, []);
  return (
    <div
      className="bunnies"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="content-wrapper">
        {data && <SimpleAccordian data={data} />}
      </div>
    </div>
  );
};
export default Descriptions;
