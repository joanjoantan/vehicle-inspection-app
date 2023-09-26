import React, { useState } from "react";
import "./App.css";
import VehicleList from "./components/VehicleList";
import InspectionList from "./components/InspectionList";
import FilterForm from "./components/FilterForm";
import vehiclesData from "./data/vehicles";
import inspectionsData from "./data/inspections";

import { Vehicle } from "./components/VehicleListInterface";
import { Inspection } from "./components/InspectionListInterface";

const App: React.FC = () => {
  // Initialize state for vehicles and inspections
  const [vehicles, setVehicles] = useState<Vehicle[]>(vehiclesData);
  const [inspections, setInspections] = useState<Inspection[]>(inspectionsData);

  // State for filters
  const [filters, setFilters] = useState({
    vehicleName: "",
    vehicleType: "",
    inspectionName: "",
    allowedType: "",
  });

  // Function to attach an inspection to a vehicle
  const attachInspection = (vehicleId: number, inspectionId: number) => {
    setVehicles((prevVehicles) =>
      prevVehicles.map((vehicle) => {
        if (
          vehicle.id === vehicleId &&
          !vehicle.inspections.includes(inspectionId)
        ) {
          return {
            ...vehicle,
            inspections: [...vehicle.inspections, inspectionId],
          };
        }
        return vehicle;
      })
    );
  };

  // Function to remove an inspection from a vehicle
  const removeInspection = (vehicleId: number, inspectionId: number) => {
    setVehicles((prevVehicles) =>
      prevVehicles.map((vehicle) => {
        if (vehicle.id === vehicleId) {
          return {
            ...vehicle,
            inspections: vehicle.inspections.filter(
              (id) => id !== inspectionId
            ),
          };
        }
        return vehicle;
      })
    );
  };

  // Function to handle filter changes
  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  // Apply filters to vehicles and inspections
  const filteredVehicles = vehicles.filter((vehicle) => {
    const { vehicleName, vehicleType } = filters;
    return (
      vehicle.description.toLowerCase().includes(vehicleName.toLowerCase()) &&
      (vehicleType === "" || vehicle.type === vehicleType)
    );
  });

  const filteredInspections = inspections.filter((inspection) => {
    const { inspectionName, allowedType } = filters;
    return (
      inspection.name.toLowerCase().includes(inspectionName.toLowerCase()) &&
      (allowedType === "" ||
        inspection.allowedTypes.includes(allowedType) ||
        inspection.allowedTypes.includes("any"))
    );
  });

  return (
    <div className="App">
      <h1 className="primary-colour">Vehicle Inspection App</h1>
      <FilterForm
        onFilterChange={handleFilterChange}
        inspections={inspections}
        vehicles={vehicles}
      />
      <div className="content">
        <VehicleList
          vehicles={filteredVehicles}
          inspections={filteredInspections}
          onAttachInspection={attachInspection}
          onRemoveInspection={removeInspection}
          filters={filters}
        />
        <InspectionList inspections={filteredInspections} />
      </div>
    </div>
  );
};

export default App;
