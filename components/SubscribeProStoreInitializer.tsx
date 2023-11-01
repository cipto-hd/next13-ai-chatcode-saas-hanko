"use client";

import { useRef } from "react";

import { useSubscribePro } from "@/hooks";

const SubscribeProStoreInitializer = ({ isPro }: { isPro: boolean }) => {
  const initialized = useRef(false);

  if (!initialized.current) {
    useSubscribePro.setState({ isPro });
    initialized.current = true;
  }

  return true;
};

export default SubscribeProStoreInitializer;
