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
  return (
    <Table className="key">
      <TableHead className="table-head">
        {" "}
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>House Jobs</TableCell>
          <TableCell>Kitchen Jobs</TableCell>
          <TableCell>Bathroom Jobs</TableCell>
          <TableCell>Hrs Owed</TableCell>
          <TableCell>Current Fines</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="fullWidth">
        {data.map((el) => {
          return (
            <TableRow className="key__row">
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
                {el.fields.HrsOwed.toFixed(2)}
              </TableCell>
              <TableCell className="key__cell">
                $
                {(
                  45 *
                  ((Math.floor(el.fields.HrsOwed / 3) *
                    (Math.floor(el.fields.HrsOwed / 3) + 1)) /
                    2 +
                    (el.fields.HrsOwed / 3 -
                      Math.floor(el.fields.HrsOwed / 3)) *
                      Math.floor(el.fields.HrsOwed / 3))
                ).toFixed(2)}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
export default PostTable;
