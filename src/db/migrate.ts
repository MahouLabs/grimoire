// import { createClient } from "@libsql/client";
// import { config } from "dotenv";
// import { drizzle } from "drizzle-orm/d1";
// import { migrate } from "drizzle-orm/libsql/migrator";

// config({ path: ".env" });

// const client = createClient({
//   // biome-ignore lint/style/noNonNullAssertion: <explanation>
//   url: process.env.TURSO_CONNECTION_URL!,
//   // biome-ignore lint/style/noNonNullAssertion: <explanation>
//   authToken: process.env.TURSO_AUTH_TOKEN!,
// });
// export const db = drizzle(client);

// const main = async () => {
//   try {
//     await migrate(db, { migrationsFolder: "drizzle" });
//     console.log("Migration complete");
//   } catch (error) {
//     console.log(error);
//   }
//   process.exit(0);
// };

// main();
