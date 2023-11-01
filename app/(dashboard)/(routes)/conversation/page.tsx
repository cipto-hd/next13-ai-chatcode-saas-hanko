"use client";

import axios from "axios";
import { MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import z from "zod";

import ChatBox from "@/components/ChatBox";
import Heading from "@/components/Heading";
import { DUMMY_MESSAGES, formSchema } from "@/constants";
import { useApiLimit } from "@/hooks";
import { showProModal } from "@/libs/utils";
import { zodResolver } from "@hookform/resolvers/zod";

const ConversationPage = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      prompt: "",
    },
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  const [messages, setMessages] = useState<ChatCompletionMessageParam[][]>(
    [] //DUMMY_MESSAGES as ChatCompletionMessageParam[][]
  );

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: data.prompt,
      };

      const response = await axios.post("/api/conversation", {
        messages: [userMessage],
      });
      setMessages((current) => [...current, [userMessage, response.data]]);

      reset();

      useApiLimit.setState(({ apiLimitCount }) => ({
        apiLimitCount: apiLimitCount + 1,
      }));
    } catch (error: any) {
      if (error?.response?.status === 403) {
        showProModal();
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="pb-4 md:pb-8">
      <Heading
        {...{
          title: "Conversation",
          description: "Advanced conversation AI model",
          icon: MessageSquare,
          iconColor: "text-violet-500",
          bgColor: "bg-violet-500/10",
        }}
      />

      <div className="px-4 lg:px-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full rounded-lg border grid grid-cols-12 gap-2 p-4 px-3 md:px-6 focus-within:shadow-sm bg-white"
        >
          <div className="form-control col-span-12 lg:col-span-9 xl:col-span-10">
            <input
              type="text"
              placeholder="How to calculate the area of a ball?"
              className="input w-full focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent"
              {...register("prompt")}
              disabled={isSubmitting}
            />
          </div>
          <div className="flex flex-row items-center justify-center col-span-12 lg:col-span-3 xl:col-span-2">
            <button
              className="btn btn-neutral w-full disabled:bg-yellow-600 disabled:text-gray-50"
              disabled={isSubmitting}
            >
              <span
                className={`${isSubmitting ? "loading loading-spinner" : ""}`}
              ></span>
              {isSubmitting ? "Wait..." : "Go!"}
            </button>
          </div>

          {errors.prompt && (
            <div className="alert alert-error col-span-10">
              <span>{errors.prompt.message}</span>
            </div>
          )}
        </form>
      </div>

      <ChatBox {...{ messages }} />
    </div>
  );
};

export default ConversationPage;
