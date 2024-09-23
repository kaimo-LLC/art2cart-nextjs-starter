import {
  Configuration,
  CatalogProductsApi,
  DesignsApi,
  ChannelsApi,
  ListingsApi,
  JobsApi,
  PrintersApi,
  PrintFilesApi,
  PreviewImagesApi,
  PersonalizationApi,
  ImpositionApi,
} from "art2cart";

const config = new Configuration({ apiKey: process.env.ART2CART });

export const jobSdk = new JobsApi(config);
export const catalogSdk = new CatalogProductsApi(config);
export const channelSdk = new ChannelsApi(config);
export const designSdk = new DesignsApi(config);
export const listingSdk = new ListingsApi(config);
export const printerSdk = new PrintersApi(config);
export const printFileSdk = new PrintFilesApi(config);
export const previewImageSdk = new PreviewImagesApi(config);
export const personalizationSdk = new PersonalizationApi(config);
export const impositionSdk = new ImpositionApi(config);
