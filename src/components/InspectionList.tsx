import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { InspectionListProps } from "./InspectionListInterface";

const InspectionList: React.FC<InspectionListProps> = ({ inspections }) => {
  return (
    <Box className="box-container">
      <h2 className="primary-colour">Available Inspections</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>Inspection Name</TableCell>
              <TableCell>Inspection Allowed Types</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inspections.map((inspection) => (
              <TableRow key={inspection.id}>
                <TableCell component="th" scope="row">
                  {inspection.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {inspection.allowedTypes.join(", ")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InspectionList;
