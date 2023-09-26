import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

// Mock data for vehicles and inspections
const mockVehicles = [
  { id: 1, description: "Car", type: "Sedan", inspections: [] },
  { id: 2, description: "Van", type: "Minivan", inspections: [] },
  // Add more mock vehicles as needed
];

const mockInspections = [
  { id: 1, name: "Inspection 1", allowedTypes: ["Sedan"] },
  { id: 2, name: "Inspection 2", allowedTypes: ["Minivan"] },
  // Add more mock inspections as needed
];

test("App renders correctly", () => {
  const { getByText, getByLabelText, getByTestId } = render(<App />);

  // Check if the main title is rendered
  const titleElement = getByText("Vehicle Inspection App");
  expect(titleElement).toBeInTheDocument();

  // Check if the filter form labels are rendered
  const vehicleNameInput = getByLabelText("Vehicle Name");
  const vehicleTypeInput = getByLabelText("Vehicle Type");
  expect(vehicleNameInput).toBeInTheDocument();
  expect(vehicleTypeInput).toBeInTheDocument();
});
