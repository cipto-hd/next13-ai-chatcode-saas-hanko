"use client";

import axios from "axios";
import { ZapIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface SubscriptionButtonProps {
  isPro?: boolean;
}

const SubscriptionButton = ({ isPro = false }: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading}
      onClick={onSubscribe}
      className="btn btn-premium btn-md rounded-full px-10"
    >
      {isPro ? "Manage Subscriptions" : "Subscribe"} <ZapIcon />
    </button>
  );
};
export default SubscriptionButton;
