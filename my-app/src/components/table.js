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
          <TableCell>Work Day Hours</TableCell>
          <TableCell>Makeup Hours</TableCell>
          <TableCell>Projected Fines</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="fullWidth">
        {data.map((el) => {
          return (
            <TableRow key={el.fields.Name} className="key__row">
              <TableCell backgroundOrigin="content-box">
                {el.fields.Name}
              </TableCell>
              <TableCell className="key__cell">
                <LinearProgress
                  variant="determinate"
                  value={(el.fields.HouseJobs / 14) * 100}
                />
              </TableCell>
              <TableCell className="key__cell">
                <LinearProgress
                  variant="determinate"
                  value={(el.fields.KitchenJobs / 14) * 100}
                />
              </TableCell>
              <TableCell className="key__cell colorKey__layers">
                <LinearProgress
                  variant="determinate"
                  value={(el.fields.BathroomJobs / 4) * 100}
                />
              </TableCell>
              <TableCell className="key__cell">
                <LinearProgress
                  variant="determinate"
                  value={(el.fields.WorkDay / 8) * 100}
                />
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
                    8 -
                    el.fields.WorkDay +
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
