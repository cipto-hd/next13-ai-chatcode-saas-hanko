import { BotIcon } from "lucide-react";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

interface ChatBoxProps {
  messages: ChatCompletionMessageParam[][];
}
const ChatBox = ({ messages }: ChatBoxProps) => {
  return (
    <div className="px-4 lg:px-8 mt-8 flex flex-col-reverse space-y-3">
      {/* trick to make dynamic chat-start + chat-end class name work  */}
      <div className="hidden">
        <div className="chat chat-end"></div>
        <div className="chat chat-start"></div>
      </div>
      {/* end of trick to make dynamic chat-start + chat-end class name work */}

      {messages.map((messageGroup, i) => (
        <div key={i} className="flex flex-col">
          {messageGroup.map((message, i) => (
            <div
              key={i}
              className={`chat chat-${
                message.role == "user" ? "end" : "start"
              } m-4`}
            >
              <div
                className={`chat-image ${
                  message.role == "user" ? "" : "avatar"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full ${
                    message.role == "user"
                      ? "flex items-center justify-center bg-violet-500/10"
                      : ""
                  }`}
                >
                  {message.role == "user" ? <p>Me</p> : <BotIcon />}
                </div>
              </div>
              <div className="chat-header">
                {message.role == "user" ? "Prompt" : "Bot"}
              </div>
              <div className="chat-bubble whitespace-pre-line">
                {message.content}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default ChatBox;
