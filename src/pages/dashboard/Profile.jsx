import { ViewSection } from "@profile";
import DashboardLayout from "@shared/DashboardLayout";

export default function Profile() {
  return (
    <DashboardLayout activeKey="profile">
      <ViewSection />
    </DashboardLayout>
  );
}
