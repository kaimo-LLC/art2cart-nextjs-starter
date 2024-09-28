"use client";
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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useWizardStore } from "@/app/wizard/providers/useWizardStore";

const FormSchema = z.object({
  sku: z.string().default(""),
  handle: z.string().default(""),
  title: z.string().default(""),
  description: z.string().default(""),
  tags: z.string().default(""),
});

export function ListingDetails() {
  const { setListing, listing } = useWizardStore();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      sku: listing.sku,
      handle: listing.handle,
      title: listing.title,
      description: listing.description,
      tags: listing.tags,
    },
  });

  function onSubmit() {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(listing, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="sku"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sku</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={listing.sku}
                      onChange={(e) =>
                        setListing({ ...listing, sku: e.target.value })
                      }
                    />
                  </FormControl>
                  <FormDescription>
                    This is represents all variant skus
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="handle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Handle</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={listing.handle}
                      onChange={(e) =>
                        setListing({ ...listing, handle: e.target.value })
                      }
                    />
                  </FormControl>
                  <FormDescription>
                    This represents the handle on your listing. In Shopify, this
                    is used to define the product URL.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={listing.title}
                      onChange={(e) =>
                        setListing({ ...listing, title: e.target.value })
                      }
                    />
                  </FormControl>
                  <FormDescription>
                    This represents the title of your product
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      value={listing.description}
                      onChange={(e) =>
                        setListing({ ...listing, description: e.target.value })
                      }
                    />
                  </FormControl>
                  <FormDescription>
                    This represents the description of your product. HTML is
                    supported here.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={listing.tags}
                      onChange={(e) =>
                        setListing({ ...listing, tags: e.target.value })
                      }
                    />
                  </FormControl>
                  <FormDescription>
                    This represents the tags of your product. Separate each
                    value by a comma and we will automatically parse and place
                    the tag in the appropriate place for the respective channel.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
}
