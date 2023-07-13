import { EditSection } from "@/components/profile";
import DashboardLayout from "@shared/DashboardLayout";

export default function EditProfile() {
  return (
    <DashboardLayout activeKey="profileEdit">
      <EditSection />
    </DashboardLayout>
  );
}
