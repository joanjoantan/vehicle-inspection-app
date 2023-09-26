import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FilterForm from "./FilterForm";
import userEvent from "@testing-library/user-event";

// Mock data for inspections and vehicles
const mockInspections = [
  { id: 1, name: "Inspection 1" },
  { id: 2, name: "Inspection 2" },
  // Add more mock inspections as needed
];

const mockVehicles = [
  { id: 1, description: "Car", type: "Car" },
  { id: 2, description: "Van", type: "Van" },
  // Add more mock vehicles as needed
];

test("FilterForm renders correctly", async () => {
  const onFilterChange = jest.fn();

  render(
    <FilterForm
      onFilterChange={onFilterChange}
      inspections={mockInspections}
      vehicles={mockVehicles}
    />
  );

  // Get the Select elements by their labels
  const selectVehicleName = /Vehicle Name/i;
  const selectVehicleNameElement = await screen.findByLabelText(
    selectVehicleName
  );

  // Assertions after select exit
  expect(selectVehicleNameElement).toBeInTheDocument();

  userEvent.click(selectVehicleNameElement);

  const selectVehicleType = /Vehicle Type/i;
  const selectVehicleTypeElement = await screen.findByLabelText(
    selectVehicleType
  );

  expect(selectVehicleTypeElement).toBeInTheDocument();

  userEvent.click(selectVehicleTypeElement);
});
