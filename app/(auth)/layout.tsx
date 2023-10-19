import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-900">
      <div className="bg-gray-50 p-5 rounded-2xl shadow-md">
        <div className="text-gray-900">
          Auth by{" "}
          <a
            href="https://hanko.io/"
            target="_blank"
            className="font-semibold hover:underline text-red-700"
          >
            Hanko
          </a>
        </div>
        {children}
      </div>
    </div>
  );
};
export default AuthLayout;
