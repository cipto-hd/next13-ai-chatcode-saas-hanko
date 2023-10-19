import { Logout } from "@/components/Logout";
import { Profile } from "@/components/Profile";

const DashboardIndexPage = () => {
  return (
    <div>
      <div className="flex flex-row space-x-2 items-center justify-end">
        <Profile align="right" /> <Logout />
      </div>
      <p>DashboardIndexPage</p>
    </div>
  );
};
export default DashboardIndexPage;
