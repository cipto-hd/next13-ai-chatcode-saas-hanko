"use client";

import { CheckIcon } from "lucide-react";

import { tools } from "@/constants";

import SubscriptionButton from "./SubscriptionButton";

const ProModal = () => {
  return (
    <dialog id="myDialog" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-2 items-center justify-center font-bold text-lg text-center">
            <div>Upgrade to Wasis </div>
            <div className="badge badge-premium rounded-full px-3 py-1">
              Pro
            </div>
          </div>
          <div className="px-2 space-y-4">
            {tools.map((tool) => (
              <div
                key={tool.href}
                className="card p-2 border border-solid border-black/5 flex flex-row items-center justify-between hover:shadow-md transition cursor-pointer"
              >
                <div className="card-body flex flex-row items-center gap-x-4">
                  <div className={`p-1 w-fit rounded-md ${tool.bgColor}`}>
                    <tool.icon className={`w-8 h-8 ${tool.color}`} />
                  </div>
                  <div className="font-semibold">{tool.label}</div>
                </div>
                <CheckIcon />
              </div>
            ))}
          </div>
        </div>
        <div className="modal-action flex items-center justify-center">
          <SubscriptionButton />
        </div>
      </div>
    </dialog>
  );
};
export default ProModal;
