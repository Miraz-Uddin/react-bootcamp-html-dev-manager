import { ViewSection } from "@notes";
import DashboardLayout from "@shared/DashboardLayout";

export default function ViewNote() {
  return (
    <DashboardLayout activeKey="notesView">
      <ViewSection />
    </DashboardLayout>
  );
}
