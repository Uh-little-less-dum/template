import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SettingsAppendixCreateManyInputSchema: z.ZodType<Prisma.SettingsAppendixCreateManyInput> = z.object({
  id: z.string(),
  data: z.instanceof(Buffer),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default SettingsAppendixCreateManyInputSchema;
