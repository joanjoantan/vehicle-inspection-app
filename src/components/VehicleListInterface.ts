import { Inspection } from "./InspectionListInterface";

export interface Vehicle {
  id: number;
  description: string;
  type: string;
  inspections: number[]; // Store inspection IDs for simplicity
}

export interface VehicleListProps {
  vehicles: Vehicle[];
  inspections: Inspection[];
  onAttachInspection: (vehicleId: number, inspectionId: number) => void;
  onRemoveInspection: (vehicleId: number, inspectionId: number) => void;
  filters: {
    vehicleName: string;
    vehicleType: string;
    inspectionName: string;
    allowedType: string;
  };
}
