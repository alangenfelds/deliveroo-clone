import sanityClient from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

const client = createClient({
  projectId: "ql8wy9l4",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export default client;
