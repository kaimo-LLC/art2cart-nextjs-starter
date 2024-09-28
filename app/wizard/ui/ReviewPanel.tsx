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
  const {
    listing,
    selectedDesigns,
    selectedProducts,
    resetConfig,
    clearListing,
  } = useWizardStore();

  function clearStore() {
    resetConfig();
    clearListing();
  }

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
              <div className="grid grid-cols-1 items-center gap-4">
                <p>Catalog Products</p>
                <pre className="rounded-lg border bg-card text-card-foreground p-4">
                  <code>{JSON.stringify(selectedProducts, null, 2)}</code>
                </pre>
              </div>
              <div className="grid grid-cols-1 items-center gap-4">
                <p>Designs</p>
                <pre className="rounded-lg border bg-card text-card-foreground p-4">
                  <code>{JSON.stringify(selectedDesigns, null, 2)}</code>
                </pre>
              </div>
              <div className="grid grid-cols-1 items-center gap-4">
                <p>Personalizations</p>
              </div>
              <div className="grid grid-cols-1 items-center gap-4">
                <p>Listing Details</p>
                <pre className="rounded-lg border bg-card text-card-foreground p-4">
                  <code>{JSON.stringify(listing, null, 2)}</code>
                </pre>
              </div>
              <div className="grid grid-cols-1 items-center gap-4">
                <p>Channels</p>
                <pre className="rounded-lg border bg-card text-card-foreground p-4">
                  <code></code>
                </pre>
              </div>
            </div>
          </ScrollArea>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Submit</Button>
          </SheetClose>
          <Button
            onClick={() => clearStore()}
            variant={"secondary"}
            type="submit"
          >
            Clear
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
