import { Code, MessageSquare } from "lucide-react";
import z from "zod";

export const formSchema = z.object({
  prompt: z
    .string()
    .min(2, { message: "Prompt is required. Minimum 2 chars." }),
});

export const MAX_FREE_COUNTS = 5;

export const PROMODAL_ID = "myDialog";

export const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },

  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];

/** Dummy Messages for testing */
export const DUMMY_MESSAGES = [
  [
    { role: "user", content: "Who is BJ Habibie?" },
    {
      role: "system",
      content:
        "BJ Habibie, full name Bacharuddin Jusuf Habibie, was an Indonesian engineer and politician. He served as the third President of Indonesia from 1998 to 1999 and was the country's first president after the fall of the authoritarian regime of Suharto. Habibie was born on June 25, 1936, in Parepare, South Sulawesi, Indonesia. He obtained a degree in aerospace engineering and later worked for Germany's Messerschmitt-Bölkow-Blohm (MBB), where he played a significant role in developing several aircraft projects. Habibie returned to Indonesia in 1974 and joined the government, holding various positions, including Minister of Research and Technology. As president, he implemented political and economic reforms, including granting greater political freedom and allowing the independence referendum for East Timor. Habibie stepped down from the presidency in 1999 and continued to be active in politics and advocacy work until his death on September 11, 2019.",
    },
  ],
  [
    { role: "user", content: "Who is BJ Habibie?" },
    {
      role: "system",
      content:
        "BJ Habibie, full name Bacharuddin Jusuf Habibie, was an Indonesian engineer and politician. He served as the third President of Indonesia from 1998 to 1999 and was the country's first president after the fall of the authoritarian regime of Suharto. Habibie was born on June 25, 1936, in Parepare, South Sulawesi, Indonesia. He obtained a degree in aerospace engineering and later worked for Germany's Messerschmitt-Bölkow-Blohm (MBB), where he played a significant role in developing several aircraft projects. Habibie returned to Indonesia in 1974 and joined the government, holding various positions, including Minister of Research and Technology. As president, he implemented political and economic reforms, including granting greater political freedom and allowing the independence referendum for East Timor. Habibie stepped down from the presidency in 1999 and continued to be active in politics and advocacy work until his death on September 11, 2019.",
    },
  ],
  [
    { role: "user", content: "Who is BJ Habibie?" },
    {
      role: "system",
      content:
        "BJ Habibie, full name Bacharuddin Jusuf Habibie, was an Indonesian engineer and politician. He served as the third President of Indonesia from 1998 to 1999 and was the country's first president after the fall of the authoritarian regime of Suharto. Habibie was born on June 25, 1936, in Parepare, South Sulawesi, Indonesia. He obtained a degree in aerospace engineering and later worked for Germany's Messerschmitt-Bölkow-Blohm (MBB), where he played a significant role in developing several aircraft projects. Habibie returned to Indonesia in 1974 and joined the government, holding various positions, including Minister of Research and Technology. As president, he implemented political and economic reforms, including granting greater political freedom and allowing the independence referendum for East Timor. Habibie stepped down from the presidency in 1999 and continued to be active in politics and advocacy work until his death on September 11, 2019.",
    },
  ],
];
