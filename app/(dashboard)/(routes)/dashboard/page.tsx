"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { tools } from "@/constants";

const DashboardIndexPage = () => {
  const router = useRouter();

  return (
    <div className="h-full">
      <div className="mb-8 spy-4 px-2">
        <h2 className="text2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-neutral font-light sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <div
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="card p-4 border border-solid border-black/5 flex flex-row items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="card-body flex flex-row items-center gap-x-4">
              <div className={`p-2 w-fit rounded-md ${tool.bgColor}`}>
                <tool.icon className={`w-8 h-8 ${tool.color}`} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default DashboardIndexPage;
