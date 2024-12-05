import { Redis } from "@upstash/redis";

export const db = new Redis({
  url: "https://inviting-llama-23321.upstash.io",
  token: "AVsZAAIjcDExZTY0YzEzY2MwNmY0NzM4OWVlZjQxZDBlNzI5MWIxZnAxMA",
});
