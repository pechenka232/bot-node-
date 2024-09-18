import * as dotenv from "dotenv";
import { parseEnv, z } from "znv";

dotenv.config();

export const config = parseEnv(process.env, {
    RPC_URL: z.string().url(),
    CONTRACT_ADDRESS: z.string().regex(/^\d{8,10}:[\w-]{35}$/),
    BOT_TOKEN: z.string(),
    CHAT_ID: z.number().int(),
});
