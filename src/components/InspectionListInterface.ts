export interface Inspection {
  id: number;
  name: string;
  allowedTypes: string[];
}

export interface InspectionListProps {
  inspections: Inspection[];
}
