const DENO_REGION = Deno.env.get("DENO_REGION") ?? "localhost";
const DOMAIN = 'broadchat.deno.dev';

var Counter = 0;
const VERSION = 'v0';

async function heartbeat() {
  // const url = "https://broxy.deno.dev/api/send";
  const url = `https://${DOMAIN}/api/send`;
  const method = "POST";
  const body = JSON.stringify({
    user: DENO_REGION,
    body: `${VERSION} ${new Date()} ${Counter++}`,
  });
  const resp = await fetch(url, {
    body,
    method,
  });
  console.log(await resp.text(), body);
}

setInterval(heartbeat, 3000);
