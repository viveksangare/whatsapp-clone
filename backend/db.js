import { i, init } from "@instantdb/react";
import schema from "../instant.schema";

const db = init({ appId: import.meta.env.VITE_INSTANTDB_API_KEY, schema });

export default db;


