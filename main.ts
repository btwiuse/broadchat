import { start } from "https://raw.githubusercontent.com/lucacasonato/fresh/ae4603c7313fb50f126d3abb31f900ddf7ac611b/server.ts";
import routes from "./routes.gen.ts";

const DENO_REGION = Deno.env.get("DENO_REGION") ?? 'localhost';

async function heartbeat(){
  let resp = await fetch("https://broadchat.deno.dev/api/send", {
    body: JSON.stringify({
      user: DENO_REGION,
      body: new Date(),
    }),
    "method": "POST",
  });
  console.log(await resp.text());
}

setInterval(heartbeat, 3000);

start(routes);
