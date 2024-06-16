// import { getSecret } from "astro:env/server";
// import { createClient } from "@libsql/client";
// import { drizzle } from "drizzle-orm/libsql";

// export const createDbClient = () => {
//   const tursoConnectionUrl = getSecret("TURSO_CONNECTION_URL");
//   const tursoAuthToken = getSecret("TURSO_AUTH_TOKEN");

//   const client = createClient({
//     url: tursoConnectionUrl,
//     authToken: tursoAuthToken,
//   });

//   return drizzle(client);
// };
