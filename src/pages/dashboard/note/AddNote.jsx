import { AddSection } from "@notes";
import DashboardLayout from "@shared/DashboardLayout";

export default function AddNote() {
  return (
    <DashboardLayout activeKey="notesAdd">
      <AddSection />
    </DashboardLayout>
  );
}
