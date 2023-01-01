import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 436,
  site: "test-new-site",
  domains: ["deco-sites-test-new-site.deno.dev"],
});
