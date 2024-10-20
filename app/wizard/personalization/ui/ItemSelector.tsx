"use client";
import api from "@/lib/art2cart";
import { useState, useEffect } from "react";
import { MultiSelect } from "@/components/MultiSelector";
import { PersonalizationItem } from "art2cart";

async function fetchItemReferenceData({
  item,
  cursor,
  limit,
}: {
  item: string | undefined;
  cursor?: number;
  limit?: number;
}): Promise<PersonalizationItem[]> {
  const data = await api.getAllPersonalizationItemsByItemId(
    item,
    cursor,
    limit
  );
  if (!data) {
    return [];
  }
  return data;
}

export function ItemSelector({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [referencedItems, setReferencedItems] = useState<
    { value: string; label: string }[]
  >([]);
  const [selectedReferenceItems, setSelectedReferenceItems] = useState<
    string[]
  >([]);

  useEffect(() => {
    async function getRefItems() {
      const refItems = await fetchItemReferenceData({
        item: selectedItems.join(","),
      });
      const itemRefList = refItems.map(function (item) {
        return { value: `${item.id}`, label: item.name };
      });
      setReferencedItems(itemRefList);
    }
    getRefItems();
  }, [selectedItems]);

  return (
    <div className=" grid grid-cols-2 gap-4">
      <div className="w-full">
        <MultiSelect
          options={items}
          onValueChange={setSelectedItems}
          defaultValue={selectedItems}
          placeholder="Select Items"
          variant="inverted"
        />
      </div>
      <div className="w-full">
        <MultiSelect
          options={referencedItems}
          onValueChange={setSelectedReferenceItems}
          defaultValue={selectedReferenceItems}
          placeholder="Select Referenced Items"
          variant="inverted"
        />
      </div>
    </div>
  );
}
