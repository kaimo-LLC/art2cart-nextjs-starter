// app/posts.jsx
"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CatalogProduct } from "art2cart";
import { TitleCard } from "@/components/TitleCard";
import { useCatalogProducts } from "../data-access/useCatalogProducts";

export function Products({ products }: { products: CatalogProduct[] }) {
  const { productOptions, addSelectedProduct, removeSelectedProduct } =
    useCatalogProducts({
      products,
    });
  return (
    <>
      <TitleCard
        title="Catalog Products"
        description="Select products for your order"
      />
      <div className="mt-8">
        <Table>
          <TableCaption>A list of catalog products</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Code</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productOptions.map((product: CatalogProduct) => (
              <TableRow key={product.id}>
                <TableCell>{product.code}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.model}</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
