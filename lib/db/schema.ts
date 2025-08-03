import {
  pgTable,
  text,
  uuid,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm/relations";

export const files = pgTable("files", {
  id: uuid("id").defaultRandom().primaryKey(),

  // files entity info
  name: text("name").notNull(),
  path: text("path").notNull(),
  size: integer("size").notNull(),
  type: text("type").notNull(),

  // storage info
  fileUrl: text("fileUrl").notNull(),

  // ownership
  userId: text("userId").notNull(),
  parentId: uuid("parentId"),

  // file/folder flags
  isFolder: boolean("isFolder").default(false).notNull(),
  isStarred: boolean("isStared").default(false).notNull(),
  isTrashed: boolean("isTrashed").default(false).notNull(),

  // timestamps
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const filesRelations = relations(files, ({ one, many }) => ({
  parent: one(files, {
    fields: [files.parentId],
    references: [files.id],
  }),
  children: many(files),
}));

// tyoe definitions for TypeScript
export const File = typeof files.$inferSelect
export const NewFile = typeof files.$inferInsert
