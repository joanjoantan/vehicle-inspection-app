export interface FilterFormProps {
  onFilterChange: (filters: {
    vehicleName: string;
    vehicleType: string;
    inspectionName: string;
    allowedType: string;
  }) => void;
  inspections: { id: number; name: string }[];
  vehicles: { id: number; description: string }[];
}
