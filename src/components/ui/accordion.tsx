"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "../../lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item className={cn("", className)} {...props} />;
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex mb-2">
      <AccordionPrimitive.Trigger
        {...props}
        className={cn(
          "flex flex-1 items-start justify-between gap-4 py-4 rounded-md text-left font-medium transition-all outline-none",
          "focus-visible:ring-3 focus-visible:ring-ring",
          "disabled:pointer-events-none disabled:opacity-50",
          "relative pr-6",
          "before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:text-lg before:transition-all",
          "before:content-['+'] data-[state=open]:before:content-['−']",
          "before:text-gray-600 data-[state=open]:before:text-red-700",
          "data-[state=open]:text-red-700",
          className
        )}
      >
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      {...props}
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
