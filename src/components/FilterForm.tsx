import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import { FilterFormProps } from "./FilterFormInterface";

const FilterForm: React.FC<FilterFormProps> = ({
  onFilterChange,
  inspections,
  vehicles,
}) => {
  const empty = {
    inspectionName: "",
    allowedType: "",
    vehicleName: "",
    vehicleType: "",
  };

  const [filters, setFilters] = useState(empty);

  const handleSelectChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  const handleReset = () => {
    setFilters(empty);

    onFilterChange(empty);
  };

  return (
    <>
      <Box className="box-container">
        <Grid container spacing={4}>
          <form onSubmit={handleSubmit} className="filter-form">
            <Grid item xs={6} md={3}>
              <FormControl fullWidth size="small">
                <InputLabel
                  id="vehicle-name-label"
                  data-testid="vehicle-name-label"
                >
                  Vehicle Name
                </InputLabel>

                <Select
                  labelId="vehicle-name-label"
                  id="vehicle-name-select"
                  label="vehicle Name"
                  name="vehicleName"
                  value={filters.vehicleName}
                  onChange={handleSelectChange}
                  data-testid="vehicle-name-select"
                >
                  {vehicles.map((vehicle) => (
                    <MenuItem key={vehicle.id} value={vehicle.description}>
                      {vehicle.description}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} md={3}>
              <FormControl fullWidth size="small">
                <InputLabel
                  id="vehicle-type-label"
                  data-testid="vehicle-type-label"
                >
                  Vehicle Type
                </InputLabel>

                <Select
                  labelId="vehicle-type-label"
                  id="vehicle-type-select"
                  label="Vehicle Type"
                  name="vehicleType"
                  value={filters.vehicleType}
                  onChange={handleSelectChange}
                  data-testid="vehicle-type-select"
                >
                  <MenuItem value="">All </MenuItem>
                  <MenuItem value="car">Car</MenuItem>
                  <MenuItem value="van">Van</MenuItem>
                  <MenuItem value="lorry">Lorry</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} md={3}>
              <FormControl fullWidth size="small">
                <InputLabel
                  id="inspection-name-label"
                  data-testid="inspection-name-label"
                >
                  Inspection Name
                </InputLabel>

                <Select
                  labelId="inspection-name-label"
                  id="inspection-name-select"
                  label="inspection Name"
                  name="inspectionName"
                  value={filters.inspectionName}
                  onChange={handleSelectChange}
                  data-testid="inspection-name-select"
                >
                  {inspections.map((inspection) => (
                    <MenuItem key={inspection.id} value={inspection.name}>
                      {inspection.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} md={3}>
              <FormControl fullWidth size="small">
                <InputLabel
                  id="inspection-allowed-type-label"
                  data-testid="inspection-allowed-type-label"
                >
                  Inspections Allowed Type
                </InputLabel>

                <Select
                  labelId="inspection-allowed-type-label"
                  id="inspection-allowed-type-select"
                  label="Allowed Type"
                  name="allowedType"
                  value={filters.allowedType}
                  onChange={handleSelectChange}
                  data-testid="inspection-allowed-type-select"
                >
                  {inspections.map((inspection) => (
                    <MenuItem key={inspection.id} value={inspection.name}>
                      {inspection.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                data-testid="apply-filters"
              >
                Apply Filters
              </Button>{" "}
              <Button
                onClick={handleReset}
                variant="contained"
                color="secondary"
                data-testid="reset-filters"
              >
                Reset Filters
              </Button>
            </Grid>
          </form>
        </Grid>
      </Box>
    </>
  );
};

export default FilterForm;
