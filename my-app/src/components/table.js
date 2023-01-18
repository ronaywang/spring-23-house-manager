import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
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
          <TableCell>House Jobs Remaining</TableCell>
          <TableCell>Kitchen Jobs Remaining</TableCell>
          <TableCell>Bathroom Jobs Remaining</TableCell>
          <TableCell>Work Day Hours Remaining</TableCell>
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
                {14 - el.fields.HouseJobs}
              </TableCell>
              <TableCell className="key__cell">
                {14 - el.fields.KitchenJobs}
              </TableCell>
              <TableCell className="key__cell colorKey__layers">
                {4 - el.fields.BathroomJobs}
              </TableCell>
              <TableCell className="key__cell">
                {8 - el.fields.WorkDay}
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
