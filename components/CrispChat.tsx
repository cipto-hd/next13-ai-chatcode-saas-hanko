"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5fa61cd6-4233-4e2a-8a41-fc361d6a771d");
  }, []);

  return null;
};
