import { EditSection } from "@notes";
import DashboardLayout from "@shared/DashboardLayout";

export default function EditNote() {
  return (
    <DashboardLayout activeKey="notesView">
      <EditSection />
    </DashboardLayout>
  );
}
