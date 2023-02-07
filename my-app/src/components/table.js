import React from "react";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  LinearProgress,
  TableContainer,
  Box,
  Typography,
  Button,
} from "@mui/material";
//import useData from "./useData";

const PostTable = ({ data }) => {
  const fields = data.map((el) => {
    return el.fields;
  });

  return (
    <Table className="key">
      <TableHead className="table-head">
        {" "}
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>House Jobs</TableCell>
          <TableCell>Kitchen Jobs</TableCell>
          <TableCell>Bathroom Jobs</TableCell>
          <TableCell>Work Day Hrs</TableCell>
          <TableCell>Hrs Owed</TableCell>
          <TableCell>Current Fines</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="fullWidth">
        {data.map((el) => {
          return (
            <TableRow key={el.fields.Ranking} className="key__row">
              <TableCell backgroundOrigin="content-box">
                {el.fields.Name}
              </TableCell>
              <TableCell className="key__cell">
                <LinearProgress
                  variant="determinate"
                  value={(el.fields.HouseJobs / 14) * 100}
                />
                {el.fields.HouseJobs} / 14
              </TableCell>
              <TableCell className="key__cell">
                <LinearProgress
                  variant="determinate"
                  value={(el.fields.KitchenJobs / 14) * 100}
                />
                {el.fields.KitchenJobs} / 14
              </TableCell>
              <TableCell className="key__cell colorKey__layers">
                <LinearProgress
                  variant="determinate"
                  value={(el.fields.BathroomJobs / 4) * 100}
                />
                {el.fields.BathroomJobs} / 4
              </TableCell>
              <TableCell className="key__cell">
                <LinearProgress
                  variant="determinate"
                  value={(el.fields.WorkDay / 8) * 100}
                />
                {el.fields.WorkDay} / 8
              </TableCell>

              <TableCell className="key__cell">
                {el.fields.MakeupHours}
              </TableCell>
              <TableCell className="key__cell">
                $
                {15 *
                  (14 -
                    el.fields.KitchenJobs +
                    4 -
                    el.fields.BathroomJobs +
                    14 -
                    el.fields.HouseJobs +
                    el.fields.MakeupHours)}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
export default PostTable;
