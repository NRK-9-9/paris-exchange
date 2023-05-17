import { createClient, groq } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function getSentence() {
  return client.fetch(`*[_type =="project"]`, { caches: "no-store" });
}
