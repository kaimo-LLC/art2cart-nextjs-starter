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

export function ReviewPanel() {
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
