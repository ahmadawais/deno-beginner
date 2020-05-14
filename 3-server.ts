const listener = Deno.listen({ port: 8080 });

console.log("Listening on 0.0.0.0:8080");

for await (const conn of listener) {
  Deno.copy(conn, conn);
}
