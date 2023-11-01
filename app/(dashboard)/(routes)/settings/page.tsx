"use client";

import { Settings2Icon } from "lucide-react";

import Heading from "@/components/Heading";
import SubscriptionButton from "@/components/SubscriptionButton";
import { useSubscribePro } from "@/hooks";

const SettingsPage = () => {
  const { isPro } = useSubscribePro.getState();

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings"
        icon={Settings2Icon}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on a Pro plan."
            : "You are currently on a free plan."}
        </div>
        <SubscriptionButton {...{ isPro }} />
      </div>
    </div>
  );
};

export default SettingsPage;
