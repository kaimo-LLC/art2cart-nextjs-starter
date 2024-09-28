"use client";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { useWizardStore } from "../providers/useWizardStore";

const FormSchema = z.object({
  products: z.boolean().default(true),
  designs: z.boolean().default(true),
  personalization: z.boolean().default(true),
  listing: z.boolean().default(true),
  channels: z.boolean().default(true),
});

export function FeatureSelector() {
  const { setConfig } = useWizardStore();
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      products: true,
      designs: true,
      personalization: true,
      listing: true,
      channels: true,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setConfig(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    router.push("/wizard/products");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-medium">Features</h3>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="products"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Product Catalog</FormLabel>
                    <FormDescription>
                      Select products from your inventory. If turned off, I will
                      choose from some preselected defaults.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="designs"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Design Library</FormLabel>
                    <FormDescription>
                      Select designs from your library. If turned off, I will
                      choose from some preselected defaults.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="personalization"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Personalization</FormLabel>
                    <FormDescription>
                      Select personalization fields to configure designs.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="listing"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Listing Details</FormLabel>
                    <FormDescription>
                      Configure your listing details and merge fields. If turned
                      off, I will choose from some preselected defaults.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="channels"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Channel Definitions
                    </FormLabel>
                    <FormDescription>
                      Choose from your available channel providers. ie: Shopify,
                      Orderdesk, etc... If turned off, the job will only be
                      delivered to the listings page.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div>
          <ThemeToggleButton />
        </div>
        <Button type="submit">Let's Go</Button>
      </form>
    </Form>
  );
}
