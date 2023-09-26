import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import VehicleList from "./VehicleList";

// Mock data for vehicles and inspections
const mockVehicles = [
  { id: 1, description: "Car 1", type: "Sedan", inspections: [1, 2] },
  { id: 2, description: "Van 1", type: "Minivan", inspections: [2] },
  // Add more mock vehicles as needed
];

const mockInspections = [
  { id: 1, name: "Inspection 1", allowedTypes: ["Sedan", "Minivan"] },
  { id: 2, name: "Inspection 2", allowedTypes: ["Minivan"] },
  // Add more mock inspections as needed
];

test("VehicleList renders correctly", () => {
  const onAttachInspection = jest.fn();
  const onRemoveInspection = jest.fn();

  render(
    <VehicleList
      vehicles={mockVehicles}
      inspections={mockInspections}
      onAttachInspection={onAttachInspection}
      onRemoveInspection={onRemoveInspection}
      filters={{
        vehicleName: "",
        vehicleType: "",
        allowedType: "",
        inspectionName: "",
      }}
    />
  );

  // Check if the title is rendered
  expect(screen.getByText("List of Vehicles")).toBeInTheDocument();

  // Check if the table headers are rendered
  expect(screen.getByText("Description")).toBeInTheDocument();
  expect(screen.getByText("Type")).toBeInTheDocument();
  expect(screen.getByText("Inspections")).toBeInTheDocument();
  expect(
    screen.getByText("Attach Inspections to Vehicles")
  ).toBeInTheDocument();

  // Check if vehicle data is displayed
  for (const vehicle of mockVehicles) {
    expect(screen.getByText(vehicle.description)).toBeInTheDocument();
    expect(screen.getByText(vehicle.type)).toBeInTheDocument();
  }

  // Simulate attaching an inspection
  const selectElement = screen.getByTestId("attach-inspection-select-1");
  fireEvent.change(selectElement, { target: { value: "1" } });
  expect(onAttachInspection).toHaveBeenCalledWith(1, 1);
});

test("VehicleList snapshots to compare the rendered component to a saved snapshot", () => {
  const onAttachInspection = jest.fn();
  const onRemoveInspection = jest.fn();

  const { asFragment } = render(
    <VehicleList
      vehicles={mockVehicles}
      inspections={mockInspections}
      onAttachInspection={onAttachInspection}
      onRemoveInspection={onRemoveInspection}
      filters={{
        vehicleName: "",
        vehicleType: "",
        allowedType: "",
        inspectionName: "",
      }}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
