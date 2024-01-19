import { ClerkProvider } from "@clerk/nextjs";
import { Children } from "react";

const PlatformLayput = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayput;