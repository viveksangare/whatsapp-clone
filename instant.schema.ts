import { i } from "@instantdb/react";

//schema declaration
const _schema = i.schema({
  entities: {
    $users: i.entity({
      username: i.string().unique().indexed(),
      email: i.string().unique(),
      createdAt: i.date(),
      status: i.string(),
    }),
    messages: i.entity({
      content: i.string(),
      sentAt: i.date(),
      isRead: i.boolean(),
    }),
    chats: i.entity({
      lastMessageAt: i.date(),
    }),
    groups: i.entity({
      name: i.string(),
      createdAt: i.date(),
    }),
    media: i.entity({
      url: i.string(),
      type: i.string(),
      uploadedAt: i.date(),
    }),
  },
  links: {
    userMessages: {
      forward: { on: "messages", has: "many", label: "sentMessages" },
      reverse: { on: "$users", has: "one", label: "sender" },
    },
    chatMessages: {
      forward: { on: "messages", has: "many", label: "messages" },
      reverse: { on: "chats", has: "one", label: "chat" },
    },
    chatParticipants: {
      forward: { on: "$users", has: "many", label: "chats" },
      reverse: { on: "chats", has: "many", label: "participants" },
    },
    groupMembers: {
      forward: { on: "$users", has: "many", label: "groups" },
      reverse: { on: "groups", has: "many", label: "members" },
    },
    groupMessages: {
      forward: { on: "messages", has: "many", label: "groupMessages" },
      reverse: { on: "groups", has: "one", label: "group" },
    },
    messageMedia: {
      forward: { on: "media", has: "one", label: "media" },
      reverse: { on: "messages", has: "one", label: "message" },
    },
  },
  rooms: {},
});

// This helps Typescript display nicer intellisense
type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };
export default schema;
