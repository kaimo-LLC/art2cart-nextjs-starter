import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function WizardNav({ current }: { current: number }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          {current === 0 ? (
            <BreadcrumbPage>Start</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href={"/wizard"}>Start</BreadcrumbLink>
          )}
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {current === 1 ? (
            <BreadcrumbPage>Products</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href={"/wizard/products"}>Products</BreadcrumbLink>
          )}
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {current === 2 ? (
            <BreadcrumbPage>Designs</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href={"/wizard/designs"}>Designs</BreadcrumbLink>
          )}
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {current === 3 ? (
            <BreadcrumbPage>Personalization</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href={"/wizard/personalization"}>
              Personalization
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {current === 4 ? (
            <BreadcrumbPage>Listing</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href={"/wizard/listing"}>Listing</BreadcrumbLink>
          )}
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {current === 5 ? (
            <BreadcrumbPage>Channels</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href={"/wizard/channels"}>Channels</BreadcrumbLink>
          )}
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
