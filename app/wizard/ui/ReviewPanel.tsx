"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useWizardStore } from "../providers/useWizardStore";

export function ReviewPanel() {
  const { selectedDesigns } = useWizardStore();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Review Order</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Order Review</SheetTitle>
          <SheetDescription>Review your order</SheetDescription>
        </SheetHeader>
        <div className="my-8">
          <ScrollArea className="h-100 w-[350px] rounded-md border p-4">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <p className="col-span-3">Catalog Products</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <p className="col-span-3">Designs</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <p className="col-span-3">Personalizations</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <p className="col-span-3">Listing Details</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <p className="col-span-3">Channels</p>
              </div>
            </div>
          </ScrollArea>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Submit</Button>
          </SheetClose>
          <Button variant={"secondary"} type="submit">
            Clear
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
