"use client";

import { useRef } from "react";

import { useApiLimit } from "@/hooks";

const ApiLimitStoreInitializer = ({
  apiLimitCount,
}: {
  apiLimitCount: number;
}) => {
  const initialized = useRef(false);

  if (!initialized.current) {
    useApiLimit.setState({ apiLimitCount });
    initialized.current = true;
  }

  return true;
};

export default ApiLimitStoreInitializer;
