// import { drizzle } from "drizzle-orm/d1";

// import { sessionsTable, usersTable } from "@db/schema";
// import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
// import { Lucia } from "lucia";

// import { GitHub } from "arctic";
// import type { APIContext } from "astro";

// export function createLuciaClient(D1: D1Database) {
//   const db = drizzle(D1);
//   const adapter = new DrizzleSQLiteAdapter(db, sessionsTable, usersTable);
//   return new Lucia(adapter, {
//     sessionCookie: {
//       attributes: {
//         secure: false,
//       },
//     },
//     getUserAttributes: (attributes) => {
//       return {
//         githubId: attributes.github_id,
//         username: attributes.username,
//       };
//     },
//   });
// }

// export const createGithubClient = (ctx: APIContext) => {
//   const clientId = ctx.locals.runtime.env.GITHUB_CLIENT_ID;
//   const clientSecret = ctx.locals.runtime.env.GITHUB_CLIENT_SECRET;
//   return new GitHub(clientId, clientSecret);
// };

// declare module "lucia" {
//   interface Register {
//     Lucia: ReturnType<typeof createLuciaClient>;
//     DatabaseUserAttributes: DatabaseUserAttributes;
//   }
// }

// type DatabaseUserAttributes = {
//   github_id: number;
//   username: string;
// };
