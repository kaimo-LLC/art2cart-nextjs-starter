import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function TitleCard({
  title,
  description,
  showHome,
}: {
  title: string;
  description: string;
  showHome?: boolean;
}) {
  return (
    <div className="space-y-4 flex justify-between items-center">
      {showHome && (
        <Button variant={"outline"} asChild>
          <Link href="/">Home</Link>
        </Button>
      )}
      <div
        className={cn(
          "space-y-1 text-right",
          showHome ? "text-right" : "text-left"
        )}
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {title}
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
