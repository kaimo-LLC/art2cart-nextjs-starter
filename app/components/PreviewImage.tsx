import { previewImageSdk } from "../lib/art2cart";

async function fetchImage(image: string | null) {}

export async function PreviewImage({
  image,
  name,
  bucket,
  height,
  width,
}: {
  image: string | null;
  name: string;
  bucket: string | undefined;
  height: number;
  width: number;
}) {
  const url = await fetchImage(image);
  return <div></div>;
}
