import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/logo.png"
          alt="/logo.png"
          height={35}
          width={35}
        />
        <p className={cn(
          "text-2xl text-neutral-700 pt-1",
          headingFont.className,
        )}>
          FlowingTask
        </p>
      </div>
    </Link>
  );
};