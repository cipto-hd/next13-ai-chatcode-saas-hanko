"use client";

import { useEffect, useState } from "react";

import { MAX_FREE_COUNTS } from "@/constants";
import { useApiLimit, useSubscribePro } from "@/hooks";
import { showProModal } from "@/libs/utils";

const FreeCounter = () => {
  const [mounted, setMounted] = useState(false);
  const { isPro } = useSubscribePro();
  const { apiLimitCount } = useApiLimit();

  useEffect(() => {
    setMounted(true);
  }, [isPro]);

  if (!mounted) {
    return null;
  }

  if (isPro) {
    return null;
  }

  return (
    <div className="px-3">
      <div className="card w-full bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <p>
            {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
          </p>
          <progress
            className="progress progress-premium bg-slate-100 h-5"
            value={apiLimitCount}
            max="5"
          ></progress>
          <button
            onClick={() => {
              showProModal();
            }}
            className="btn btn-premium btn-md rounded-full px-10"
          >
            Upgrade
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default FreeCounter;
