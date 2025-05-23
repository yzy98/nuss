import * as z from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
});

// eslint-disable-next-line node/no-process-env
export const env = envSchema.parse(process.env);
