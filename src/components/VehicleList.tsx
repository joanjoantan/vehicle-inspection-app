import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { VehicleListProps } from "./VehicleListInterface";

const VehicleList: React.FC<VehicleListProps> = ({
  vehicles,
  inspections,
  onAttachInspection,
  onRemoveInspection,
  filters,
}) => {
  const filteredVehicles = vehicles.filter((vehicle) => {
    const { vehicleName, vehicleType, allowedType } = filters;

    const matchesName = vehicle.description
      .toLowerCase()
      .includes(vehicleName.toLowerCase());
    const matchesType = vehicleType === "" || vehicle.type === vehicleType;
    const hasMatchingInspection = inspections.some((inspection) => {
      return (
        vehicle.inspections.includes(inspection.id) &&
        (allowedType === "" ||
          inspection.allowedTypes.includes(allowedType) ||
          inspection.allowedTypes.includes("any"))
      );
    });
    const matchesRegistration =
      vehicleName === "" ||
      vehicle.description.toLowerCase().includes(vehicleName.toLowerCase());

    return (
      matchesName && matchesType && hasMatchingInspection && matchesRegistration
    );
  });

  return (
    <Box className="box-container">
      <h2 className="primary-colour">List of Vehicles</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Inspections</TableCell>
              <TableCell>Attach Inspections to Vehicles</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredVehicles.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell> {vehicle.description} </TableCell>

                <TableCell>{vehicle.type}</TableCell>

                <TableCell>
                  {vehicle.inspections.map((inspectionId) => {
                    const inspection = inspections.find(
                      (i) => i.id === inspectionId
                    );
                    if (inspection) {
                      return (
                        <span key={inspection.id}>
                          {inspection.name}{" "}
                          <button
                            onClick={() =>
                              onRemoveInspection(vehicle.id, inspection.id)
                            }
                          >
                            Remove
                          </button>
                          <br />
                        </span>
                      );
                    }
                    return null;
                  })}
                </TableCell>

                <TableCell>
                  <select
                    data-testid={`attach-inspection-select-${vehicle.id}`}
                    onChange={(e) =>
                      onAttachInspection(vehicle.id, parseInt(e.target.value))
                    }
                  >
                    <option value="">Select an inspection</option>
                    {inspections.map((inspection) => (
                      <option
                        key={inspection.id}
                        value={inspection.id}
                        disabled={
                          !inspection.allowedTypes.includes(vehicle.type) &&
                          !inspection.allowedTypes.includes("any")
                        }
                      >
                        {inspection.name}
                      </option>
                    ))}
                  </select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default VehicleList;
