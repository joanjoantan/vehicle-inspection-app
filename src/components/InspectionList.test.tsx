import React from "react";
import { render } from "@testing-library/react";
import InspectionList from "./InspectionList";

// Mock data for inspections
const mockInspections = [
  { id: 1, name: "Inspection 1", allowedTypes: ["car", "van"] },
  { id: 2, name: "Inspection 2", allowedTypes: ["lorry", "any"] },
  // Add more mock inspections as needed
];

test("InspectionList renders correctly", () => {
  const { getByText, getAllByRole } = render(
    <InspectionList inspections={mockInspections} />
  );

  // Check if the title is rendered
  const titleElement = getByText("Available Inspections");
  expect(titleElement).toBeInTheDocument();

  // Check if the table headers are rendered
  const inspectionNameHeader = getByText("Inspection Name");
  const allowedTypesHeader = getByText("Inspection Allowed Types");

  expect(inspectionNameHeader).toBeInTheDocument();
  expect(allowedTypesHeader).toBeInTheDocument();

  // Check if the inspection data is displayed
  const inspection1Name = getByText("Inspection 1");
  const inspection1AllowedTypes = getByText("car, van");
  const inspection2Name = getByText("Inspection 2");
  const inspection2AllowedTypes = getByText("lorry, any");

  expect(inspection1Name).toBeInTheDocument();
  expect(inspection1AllowedTypes).toBeInTheDocument();
  expect(inspection2Name).toBeInTheDocument();
  expect(inspection2AllowedTypes).toBeInTheDocument();

  // Check if there are the correct number of rows in the table body
  const tableRows = getAllByRole("row");
  // Subtract 1 for the table header row
  expect(tableRows.length - 1).toBe(mockInspections.length);
});

test("InspectionList snapshots to compare the rendered component to a saved snapshot", () => {
  const { asFragment } = render(
    <InspectionList inspections={mockInspections} />
  );

  expect(asFragment()).toMatchSnapshot();
});
