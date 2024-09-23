import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TitleCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-4 flex justify-between items-center">
      <Button variant={"outline"} asChild>
        <Link href="/">Home</Link>
      </Button>
      <div className="space-y-1 text-right">
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
