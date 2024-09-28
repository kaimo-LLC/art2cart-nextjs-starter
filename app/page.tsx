import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BodyCard } from "@/components/BodyCard";

export default async function Page() {
  return (
    <div className="mx-auto flex flex-col justify-center items-center p-4 lg:p-16">
      <div className="space-y-4">
        <div className="space-y-1">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
            Art2Cart Starter Project
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-center">
            A starter project to interact with the Art2Cart Tool Set.
          </p>
        </div>
      </div>
      <div className="flex h-5 items-center space-x-4 text-sm my-8">
        <div>NextJS 14.1.1</div>
        <Separator orientation="vertical" />
        <div>TypeScript 5</div>
        <Separator orientation="vertical" />
        <div>Tailwind CSS 3.4.12</div>
        <Separator orientation="vertical" />
        <div>Art2Cart SDK 1.0.2</div>
      </div>
      <p className="text-xs text-right italic">last update - 9/23/2024</p>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <BodyCard title="Data" description="Setup data">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant={"outline"} asChild>
                <Link href="/catalog">Catalog</Link>
              </Button>
              <Button variant={"outline"} asChild>
                <Link href="/designs">Designs</Link>
              </Button>
              <Button variant={"outline"} asChild>
                <Link href="/channels">Channels</Link>
              </Button>
            </div>
          </BodyCard>
          <BodyCard title="Build" description="Build your listing">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant={"outline"} asChild>
                <Link href="/wizard">Wizard</Link>
              </Button>
            </div>
          </BodyCard>
          <BodyCard title="Sell" description="Review output">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant={"outline"} asChild>
                <Link href="/listings">Listings</Link>
              </Button>
            </div>
          </BodyCard>
        </div>
      </div>
    </div>
  );
}
