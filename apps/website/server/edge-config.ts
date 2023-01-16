import { z } from 'zod'; // "zod": "3.20.2"

const schema = z.object({
  value: z.boolean().default(true)
});
const result = schema.parse({});
