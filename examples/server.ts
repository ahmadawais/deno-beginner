import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 8000 });

console.log("Running at: http://localhost:8000/");

for await (const req of server) {
  const body = "Hello Deno!";
  req.respond({ body });
}
