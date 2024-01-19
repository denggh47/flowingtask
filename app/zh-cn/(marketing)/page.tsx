import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../../public/fonts/font.woff2"
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={cn(
        "flex items-center justify-center flex-col",
        headingFont.className,
      )}>
        <div className="mb-6 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full">
          <Medal className="h-6 w-6 mr-2" />
          No.1 任务管理
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          FlowingTask 帮您管理任务
        </h1>
        <div className="text-3xl md:text-7xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-4 pt-6 rounded-md pb w-fit">
          向前推进
        </div>
      </div>
      <div className={cn(
        "text-sm md:text-xl text-neutral-400 mt-6 max-w-xs md:max-w-2xl text-center mx-auto",
        textFont.className,
      )}>
        不论是协作、管理项目，助您达到新的生产力高峰。从公司决策到家庭办公室再到个人事务，都井井有条 - 使用FlowingTask来完成所有任务管理..
      </div>
      <Button className="mt-6 mb-6" size="lg" asChild>
        <Link href="/sign-up">
          免费使用 FlowingTask
        </Link>
      </Button>
    </div>
  );
};

export default MarketingPage;