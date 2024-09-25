import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const pages = [
  {
    id: 0,
    label: "Start",
    href: "/wizard",
  },
  {
    id: 1,
    label: "Products",
    href: "/wizard/products",
  },
  {
    id: 2,
    label: "Designs",
    href: "/wizard/designs",
  },
  {
    id: 3,
    label: "Personalization",
    href: "/wizard/personalization",
  },
  {
    id: 4,
    label: "Listing",
    href: "/wizard/listing",
  },
  {
    id: 5,
    label: "Channels",
    href: "/wizard/channels",
  },
];

export function WizardNav({ current }: { current: number }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pages.map(function (page) {
          return (
            <>
              <BreadcrumbItem key={page.id}>
                {current === page.id ? (
                  <BreadcrumbPage>{page.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={page.href}>{page.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {page.id !== pages.length - 1 && <BreadcrumbSeparator />}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
