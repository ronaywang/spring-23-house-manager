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

const PostTable2 = ({ data }) => {
  const fields = data.map((el) => {
    return el.fields;
  });

  return (
    <Table className="key">
      <TableHead className="table-head">
        {" "}
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>House Job</TableCell>
          <TableCell>Kitchen Job</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="fullWidth">
        {data.map((el) => {
          return (
            <TableRow key={el.fields.Name} className="key__row">
              <TableCell backgroundOrigin="content-box">
                {el.fields.Name}
              </TableCell>
              <TableCell className="key__cell">{el.fields.House}</TableCell>
              <TableCell className="key__cell">{el.fields.Kitchen}</TableCell>

              <TableCell className="key__cell">{el.fields.Status}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
export default PostTable2;
