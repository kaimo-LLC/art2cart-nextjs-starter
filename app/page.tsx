import { Separator } from "@/components/ui/separator";
import { NavBar } from "@/components/NavBar";

export default async function Page() {
  return (
    <div className="flex flex-col justify-center items-center text-white p-16">
      <div>
        <div className="space-y-1">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Art2Cart Starter Project
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            A starter project to interact with the Art2Cart Tool Set
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>NextJS 14.1.1</div>
          <Separator orientation="vertical" />
          <div>TypeScript 5</div>
          <Separator orientation="vertical" />
          <div>Tailwind CSS 3.4.12</div>
          <Separator orientation="vertical" />
          <div>Art2Cart SDK 1.0.2</div>
        </div>
        <Separator className="my-2" />
        <p className="text-xs text-right italic">last update - 9/23/2024</p>
        {/* <div className="my-4">
          <NavBar />
        </div> */}
      </div>
    </div>
  );
}
