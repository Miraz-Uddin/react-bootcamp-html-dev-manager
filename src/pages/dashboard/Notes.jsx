import { ListSection } from "@notes";
import DashboardLayout from "@shared/DashboardLayout";

export default function Notes() {
  return (
    <DashboardLayout activeKey="notesView">
      <ListSection />
    </DashboardLayout>
  );
}
