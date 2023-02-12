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
import useData from "./DescriptionsData";
import SimpleAccordian from "./Accordian";
import Background from "./nycbackgroundwithbunnies.svg";

const Descriptions = () => {
  const { data, getData } = useData();
  useEffect(() => {
    async function onPageLoad() {
      await getData();
    }
    onPageLoad();
  }, []);
  return (
    <div className="content-wrapper">
      {data && <SimpleAccordian data={data} />}
    </div>
  );
};
export default Descriptions;
