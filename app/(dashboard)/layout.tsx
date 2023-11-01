import { cookies } from "next/headers";
import { ReactNode } from "react";

import ApiLimitStoreInitializer from "@/components/ApiLimitStoreInitializer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SubscribeProStoreInitializer from "@/components/SubscribeProStoreInitializer";
import { useApiLimit, useSubscribePro } from "@/hooks";
import { getApiLimitCount } from "@/libs/apiLimit";
import { checkSubscription } from "@/libs/subscription";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const token = cookies().get("hanko")?.value || "";

  const isPro = await checkSubscription(token);
  useSubscribePro.setState({ isPro });

  const apiLimitCount = await getApiLimitCount(token);
  useApiLimit.setState({ apiLimitCount });

  return (
    <div className="relative">
      <SubscribeProStoreInitializer {...{ isPro }} />
      <ApiLimitStoreInitializer {...{ apiLimitCount }} />
      <div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72 flex-1">
        <Navbar />
        {children}
        {/* {useSubscribePro.getState().isPro ? "True" : "False"} */}
      </main>
    </div>
  );
};
export default DashboardLayout;
