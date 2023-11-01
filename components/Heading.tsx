import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <div className="px-4 lg:px-8 flex flex-row items-center gap-x-3 mb-8">
      <div className={`p-2 w-fit rounded-md ${bgColor}`}>
        <Icon className={`w-10 h-10 ${iconColor}`} />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-neutral font-light ">{description}</p>
      </div>
    </div>
  );
};
export default Heading;
