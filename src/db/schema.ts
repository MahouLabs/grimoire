import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
  id: text("id").notNull().primaryKey(),
  githubId: integer("github_id").notNull().unique(),
  username: text("username").notNull(),
});

export const sessionsTable = sqliteTable("sessions", {
  id: text("id").notNull().primaryKey(),
  expiresAt: integer("expires_at").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id),
});
