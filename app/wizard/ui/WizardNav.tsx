"use client";
import { Fragment } from "react";
import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useWizardStore } from "../providers/useWizardStore";

export function WizardNav({ current }: { current: string }) {
  const { config } = useWizardStore();

  const keys = Object.entries(config)
    .filter(([_, value]) => value === true)
    .map(([key, _]) => key);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {keys.map(function (page, index) {
          return (
            <Fragment key={page}>
              <BreadcrumbItem>
                {current === page ? (
                  <BreadcrumbPage>
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={`/wizard/${page}`}>
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < keys.length - 1 && (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
