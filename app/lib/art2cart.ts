import { Configuration, CatalogProductsApi } from "art2cart";

const config = new Configuration({ apiKey: process.env.ART2CART });
export const catalogSdk = new CatalogProductsApi(config);
